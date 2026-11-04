import sharp from 'sharp'
import { mkdir, stat } from 'node:fs/promises'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const source = resolve(root, 'references/patio-concept-only')
const output = resolve(root, 'public/images/concept')
await mkdir(output, { recursive: true })
const images = [
  { input: '1000020835.jpg', name: 'patio-existing' },
  { input: 'generated/patio-enclosure-clean.png', name: 'patio-proposed-v2' },
]
for (const image of images) {
  await stat(resolve(source, image.input))
  for (const width of [480, 800, 1080]) {
    await sharp(resolve(source, image.input)).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 82, effort: 5 }).toFile(resolve(output, `${image.name}-${width}.webp`))
  }
}
console.log('Prepared the original patio reference and corresponding design visualisation at three responsive widths.')
