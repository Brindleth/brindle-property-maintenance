import sharp from 'sharp'
import { mkdir, stat } from 'node:fs/promises'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const source = resolve(root, 'references/patio-concept-only')
const output = resolve(root, 'public/images/concept')
await mkdir(output, { recursive: true })
const images = [
  ...[1, 2, 3, 4, 5].map(i => ({ input: `100002083${i}.jpg`, name: `patio-existing-${i}` })),
  { input: 'generated/patio-enclosure-concept.png', name: 'patio-proposed' },
]
for (const image of images) {
  await stat(resolve(source, image.input))
  for (const width of [480, 800, 1080]) {
    await sharp(resolve(source, image.input)).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 82, effort: 5 }).toFile(resolve(output, `${image.name}-${width}.webp`))
  }
}
console.log('Prepared 18 metadata-free patio assets in the separate concept directory. Original patio references remain unchanged.')
