import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFile, stat } from 'node:fs/promises'
import sharp from 'sharp'
import { business } from '../src/config/business.ts'
import { patioComparison } from '../src/data/patio.ts'
import { serviceGroups } from '../src/data/services.ts'
import { transformations } from '../src/data/transformations.ts'

const ids = ['1000020847','1000020958','1000020946','1000020954','1000020945','1000020943']
test('all six genuine photographs have responsive local derivatives without EXIF metadata', async () => {
  for (const id of ids) for (const width of [480, 960, 1600]) {
    const path = new URL(`../public/images/${id}-${width}.webp`, import.meta.url)
    const metadata = await sharp(await readFile(path)).metadata()
    assert.equal(metadata.format, 'webp')
    assert.ok(metadata.width <= width)
    assert.equal(metadata.exif, undefined, 'GPS and source EXIF must not ship')
    assert.ok((await stat(path)).size < 450000)
  }
})
test('business defaults use the supplied phone and unapproved prices stay unpublished', () => {
  assert.equal(business.telephone, 'tel:+61451743037')
  assert.equal(business.phone, '0451 743 037')
  assert.equal(business.rate, 'Rates discussed by phone')
  assert.equal(business.fullName, 'BRINDLE — Property Maintenance & Smart Home Solutions')
})
test('outdoor comparison identifies the proposed design without claiming completed work', async () => {
  assert.equal(patioComparison.label, 'Outdoor Living — Transformation Preview')
  assert.ok(transformations[1].disclosure.includes('Unbuilt proposal; the existing patio and lighting are not BRINDLE’s completed work'))
  const gallery = await readFile(new URL('../src/data/portfolio.ts', import.meta.url), 'utf8')
  for (const id of ids) assert.ok(gallery.includes(id))
  assert.ok(!/100002083[1-5]/.test(gallery))
})

test('the original patio and corresponding proposal have metadata-free responsive assets', async () => {
  for (const image of [patioComparison.before, patioComparison.after]) for (const width of [480, 800, 1080]) {
    const path = new URL(`../public/images/concept/${image.name}-${width}.webp`, import.meta.url)
    const metadata = await sharp(await readFile(path)).metadata()
    assert.equal(metadata.format, 'webp')
    assert.equal(metadata.width, width, 'Image widths must match their responsive descriptors')
    assert.equal(metadata.exif, undefined)
    assert.ok((await stat(path)).size < 500000)
  }
})

test('the retained illustrative service photographs have responsive local derivatives', async () => {
  for (const id of ['feature-wall','painting-maintenance','smart-home']) {
    for (const width of [480, 960, 1440]) {
      const path = new URL(`../public/images/inspiration/${id}-${width}.webp`, import.meta.url)
      const metadata = await sharp(await readFile(path)).metadata()
      assert.equal(metadata.width, width)
      assert.equal(metadata.exif, undefined)
      assert.ok((await stat(path)).size < 450000)
    }
  }
})

test('cladding leads the six service groups and wireless smart-home scope is retained', async () => {
  assert.equal(serviceGroups.length,6)
  assert.equal(serviceGroups[0].id,'cladding')
  const smart=serviceGroups.find(group=>group.id==='smart-home')
  assert.ok(smart.items.some(item=>item.includes('Wireless')))
  for(const width of [480,960,1440]){
    const metadata=await sharp(await readFile(new URL('../public/images/inspiration/smart-home-'+width+'.webp',import.meta.url))).metadata()
    assert.equal(metadata.width,width);assert.equal(metadata.exif,undefined)
  }
})

test('new framing photographs and transformation edits have responsive, metadata-free assets',async()=>{
  for(const id of ['cladding-finished','timber-framing','steel-framing','feature-wall-before'])for(const width of [480,960,1440]){
    const path=new URL('../public/images/revision/'+id+'-'+width+'.webp',import.meta.url)
    const metadata=await sharp(await readFile(path)).metadata()
    assert.equal(metadata.width,width);assert.equal(metadata.height,Math.round(width*(id==='cladding-finished'?4/3:2/3)));assert.equal(metadata.exif,undefined)
    assert.ok((await stat(path)).size<600000)
  }
})

test('exactly three comparison pairs preserve aspect ratios, unique controls and honest provenance',async()=>{
  assert.deepEqual(transformations.map(item=>item.id),['cladding','patio','feature'])
  assert.equal(new Set(transformations.map(item=>item.controlLabel)).size,3)
  for(const pair of transformations){
    assert.ok(pair.disclosure.length>20)
    const ratios=[]
    for(const side of [pair.before,pair.after]){
      const metadata=await sharp(await readFile(new URL('../public/'+side.src,import.meta.url))).metadata()
      ratios.push(metadata.width/metadata.height)
      for(const source of side.sources){const data=await sharp(await readFile(new URL('../public/'+source.src,import.meta.url))).metadata();assert.equal(data.width,source.width,'Responsive descriptors must match the actual pixel width')}
    }
    assert.equal(ratios[0],ratios[1],pair.id+' views must share the same image proportions')
  }
  assert.ok(transformations[0].before.src.includes('1000020958'))
  assert.ok(transformations[0].disclosure.includes('digitally visualised'))
  assert.ok(transformations[2].disclosure.includes('not a completed BRINDLE project'))
})
