import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFile, stat } from 'node:fs/promises'
import sharp from 'sharp'
import { business } from '../src/config/business.ts'
import { patioComparison } from '../src/data/patio.ts'
import { capabilityImages } from '../src/data/capabilities.ts'

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
})
test('outdoor comparison identifies the proposed design without claiming completed work', async () => {
  const source = await readFile(new URL('../src/components/PatioConcept.tsx', import.meta.url), 'utf8')
  assert.equal(patioComparison.label, 'Outdoor Transformation — Design Visualisation')
  assert.ok(source.includes('Unbuilt proposal; the existing patio and lighting are not Brindle’s completed work'))
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

test('seven varied service illustrations have responsive local derivatives', async () => {
  assert.equal(capabilityImages.length, 7)
  for (const image of capabilityImages) {
    assert.ok(image.alt.startsWith('Illustrative service photograph'))
    for (const width of [480, 960, 1440]) {
      const path = new URL(`../public/images/inspiration/${image.id}-${width}.webp`, import.meta.url)
      const metadata = await sharp(await readFile(path)).metadata()
      assert.equal(metadata.width, width)
      assert.equal(metadata.exif, undefined)
      assert.ok((await stat(path)).size < 450000)
    }
  }
})
