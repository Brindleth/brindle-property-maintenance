import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const output = resolve(root, 'public/images/inspiration')
await mkdir(output, { recursive: true })
for (const id of ['feature-wall', 'outdoor-living', 'architectural-finishes', 'framing-support', 'interior-fitout', 'lighting-av', 'painting-maintenance', 'smart-home']) {
  for (const width of [480, 960, 1440]) {
    await sharp(resolve(root, `references/inspiration-generated/${id}.png`)).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 82, effort: 5 }).toFile(resolve(output, `${id}-${width}.webp`))
  }
}
console.log('Prepared eight illustrative service assets, each at three responsive widths.')
