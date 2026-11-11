import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const output = resolve(root, 'public/images/services')
const names = ['property-maintenance-work', 'joinery-assembly-work', 'interior-improvements-work', 'custom-installations-work']
await mkdir(output, { recursive: true })
for (const name of names) {
  for (const width of [480, 960, 1440]) {
    await sharp(resolve(root, 'references/service-refresh-2026/' + name + '.png')).rotate()
      .resize(width, Math.round(width * 2 / 3), { fit: 'cover' })
      .webp({ quality: 82, effort: 5 }).toFile(resolve(output, name + '-' + width + '.webp'))
  }
}
console.log('Prepared four work-in-progress service images at three widths, with metadata removed.')
