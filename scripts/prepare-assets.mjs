import sharp from 'sharp'
import { mkdir, readdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const input = resolve(root, 'public/portfolio/completed')
const output = resolve(root, 'public/images')
await mkdir(output, { recursive: true })
const files = (await readdir(input)).filter(f => f.endsWith('.jpg')).sort()
const thumbnails = []
for (const [index, file] of files.entries()) {
  const source = resolve(input, file)
  const id = file.replace('.jpg', '')
  for (const width of [480, 960, 1600]) {
    // autoOrient and a new encode remove GPS/EXIF metadata. Originals remain untouched.
    await sharp(source).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 80, effort: 5 }).toFile(resolve(output, `${id}-${width}.webp`))
  }
  const thumbnail = await sharp(source).rotate().resize(380, 300, { fit: 'contain', background: '#eae8e1' }).jpeg().toBuffer()
  const label = Buffer.from(`<svg width="380" height="36"><rect width="380" height="36" fill="#fff"/><text x="12" y="24" font-family="Arial" font-size="17">${file}</text></svg>`)
  thumbnails.push({ input: thumbnail, left: (index % 3) * 380, top: Math.floor(index / 3) * 336 })
  thumbnails.push({ input: label, left: (index % 3) * 380, top: Math.floor(index / 3) * 336 + 300 })
}
await mkdir(resolve(root, 'test-results'), { recursive: true })
await sharp({ create: { width: 1140, height: 672, channels: 3, background: '#fff' } }).composite(thumbnails).jpeg({ quality: 85 }).toFile(resolve(root, 'test-results/asset-contact-sheet.jpg'))
const og = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="#f4f3ef"/><rect x="70" y="65" width="42" height="8" fill="#dc2925"/><text x="70" y="145" font-family="Arial" font-size="58" font-weight="700" fill="#191b18">brindle<tspan fill="#dc2925">.</tspan></text><text x="70" y="180" font-family="Arial" font-size="17" letter-spacing="4" fill="#191b18">PROPERTY MAINTENANCE</text><text x="70" y="330" font-family="Arial" font-size="100" font-weight="700" fill="#191b18">Good work.</text><text x="70" y="440" font-family="Arial" font-size="100" font-weight="700" fill="#191b18">From the ground up.</text><path d="M70 500h1060" stroke="#cccac3"/><text x="70" y="557" font-family="Arial" font-size="24" fill="#191b18">MELBOURNE &amp; SURROUNDING AREAS</text><text x="870" y="557" font-family="Arial" font-size="27" fill="#dc2925">0451 743 037</text></svg>`)
await sharp(og).jpeg({ quality: 90 }).toFile(resolve(output, 'og-brindle.jpg'))
await writeFile(resolve(output, '.gitkeep'), '')
console.log(`Prepared ${files.length * 3} local WebP images, metadata-free; originals preserved.`)
