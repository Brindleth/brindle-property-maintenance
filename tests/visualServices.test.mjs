import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFile, stat } from 'node:fs/promises'
import sharp from 'sharp'
import { serviceImages } from '../src/data/serviceImages.ts'
import { comparisonAt, comparisonClip } from '../src/lib/patioComparison.ts'

test('service examples and genuine photographs have accurate, metadata-free responsive files', async () => {
  assert.equal(Object.keys(serviceImages).length, 6)
  assert.equal(Object.values(serviceImages).filter(photo => photo.original).length, 2)
  for (const photo of Object.values(serviceImages)) {
    const prefix = photo.original ? 'images/' + photo.name : 'images/services/' + photo.name
    for (const width of [480,960,photo.original ? 1600 : 1440]) {
      const path = new URL('../public/' + prefix + '-' + width + '.webp',import.meta.url)
      const metadata = await sharp(await readFile(path)).metadata()
      assert.equal(metadata.width, Math.min(width,photo.original ? 1152 : 1440))
      assert.equal(metadata.exif, undefined)
      assert.ok((await stat(path)).size < 500000)
    }
  }
})
test('retained patio images share the same output dimensions at each responsive width', async () => {
  for (const width of [480,800,1080]) {
    const metadata = []
    for (const name of ['patio-existing','patio-proposed-v2']) {
      const file = new URL('../public/images/concept/' + name + '-' + width + '.webp',import.meta.url)
      const info = await sharp(await readFile(file)).metadata()
      assert.equal(info.exif,undefined)
      assert.equal(info.width,width)
      metadata.push([info.width,info.height])
    }
    assert.deepEqual(metadata[0],metadata[1])
  }
})
test('patio pointer mapping and clipping remain bounded at both endpoints', () => {
  assert.equal(comparisonAt(300,100,400),50)
  assert.equal(comparisonAt(50,100,400),0)
  assert.equal(comparisonAt(600,100,400),100)
  assert.equal(comparisonAt(100,100,0),50)
  assert.equal(comparisonClip(-10),'inset(0 0 0 0%)')
  assert.equal(comparisonClip(50),'inset(0 0 0 50%)')
  assert.equal(comparisonClip(120),'inset(0 0 0 100%)')
})
