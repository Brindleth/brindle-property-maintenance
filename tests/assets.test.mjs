import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFile, stat } from 'node:fs/promises'
import sharp from 'sharp'
import { business } from '../src/config/business.ts'
import { patioImages, patioSourceIndex } from '../src/data/patio.ts'

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
test('concept presentation explicitly separates the unbuilt proposal from genuine work', async () => {
  const source = await readFile(new URL('../src/components/PatioConcept.tsx', import.meta.url), 'utf8')
  assert.ok(source.includes('CONCEPT VISUALISATION — NOT CONSTRUCTED'))
  assert.ok(source.includes('Existing patio and lighting are not Brindle’s completed work'))
  const gallery = await readFile(new URL('../src/data/portfolio.ts', import.meta.url), 'utf8')
  for (const id of ids) assert.ok(gallery.includes(id))
  assert.ok(!/100002083[1-5]/.test(gallery))
})

test('the photo concept has one labelled AI proposal, five actual references and metadata-free responsive assets', async () => {
  assert.equal(patioImages.filter(image => image.kind === 'concept').length, 1)
  assert.equal(patioImages.filter(image => image.kind === 'reference').length, 5)
  assert.equal(patioImages[patioSourceIndex].name, 'patio-existing-5')
  assert.equal(patioImages[0].label, 'CONCEPT VISUALISATION — NOT CONSTRUCTED')
  for (const image of patioImages) for (const width of [480, 800, 1080]) {
    const path = new URL(`../public/images/concept/${image.name}-${width}.webp`, import.meta.url)
    const metadata = await sharp(await readFile(path)).metadata()
    assert.equal(metadata.format, 'webp')
    assert.equal(metadata.width, width, 'Image widths must match their responsive descriptors')
    assert.equal(metadata.exif, undefined)
    assert.ok((await stat(path)).size < 500000)
  }
})
