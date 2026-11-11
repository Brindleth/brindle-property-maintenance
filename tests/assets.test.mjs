import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFile, stat } from 'node:fs/promises'
import sharp from 'sharp'
import { business } from '../src/config/business.ts'
import { serviceGroups } from '../src/data/services.ts'

const ids = ['1000020847', '1000020958', '1000020946', '1000020954', '1000020945', '1000020943']
test('all six genuine photographs retain responsive metadata-free derivatives', async () => {
  for (const id of ids) for (const width of [480, 960, 1600]) {
    const path = new URL('../public/images/' + id + '-' + width + '.webp', import.meta.url)
    const metadata = await sharp(await readFile(path)).metadata()
    assert.equal(metadata.format, 'webp')
    assert.equal(metadata.width, Math.min(width, 1152))
    assert.equal(metadata.exif, undefined, 'Source EXIF/GPS must not ship')
    assert.ok((await stat(path)).size < 450000)
  }
})
test('supplied phone, maintenance identity and unapproved rates are preserved', () => {
  assert.equal(business.telephone, 'tel:+61451743037')
  assert.equal(business.phone, '0451 743 037')
  assert.equal(business.tagline, 'Property Maintenance & Skilled Labour')
  assert.equal(business.rate, 'Rates discussed by phone')
  assert.ok(business.travel.includes('disclosed before acceptance'))
})
test('six broad services retain prominent labouring, task limits and secondary plug-in scope', () => {
  assert.deepEqual(serviceGroups.map(group => group.id), ['property-maintenance', 'carpentry', 'labouring', 'interiors', 'exteriors', 'installations'])
  assert.equal(serviceGroups[2].featured, true)
  assert.ok(serviceGroups[2].scope.includes('unlicensed subcontracting'))
  assert.ok(serviceGroups[4].scope.includes('Independent cladding'))
  assert.ok(serviceGroups[5].items.some(item => item.includes('Plug-in smart-home')))
  assert.ok(serviceGroups[5].scope.includes('No fixed electrical work'))
})
test('portfolio data contains only the genuine supplied project with accurate progress captions', async () => {
  const data = await readFile(new URL('../src/data/portfolio.ts', import.meta.url), 'utf8')
  for (const id of ids) assert.ok(data.includes(id))
  assert.ok(!data.includes('images/concept'))
  assert.ok(!data.includes('images/revision'))
  assert.ok(data.includes('supplied materials and instructions'))
  assert.ok(data.includes('installation in progress'))
})
