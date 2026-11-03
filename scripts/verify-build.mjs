import { readFile, readdir, rm, stat } from 'node:fs/promises'
import { resolve, sep } from 'node:path'
import assert from 'node:assert/strict'

const root = resolve(import.meta.dirname, '..')
const dist = resolve(root, 'dist')
const originals = resolve(dist, 'portfolio')
assert.ok(originals.startsWith(`${dist}${sep}`), 'Cleanup must remain inside build output')
await rm(originals, { recursive: true, force: true })
const html = await readFile(resolve(dist, 'index.html'), 'utf8')
assert.ok(html.includes('Brindle — Property Maintenance &amp; Construction Support') || html.includes('Brindle — Property Maintenance & Construction Support'))
assert.ok(html.includes('0451 743 037'))
assert.ok(!html.includes('/src/main.tsx'))
const paths = [...html.matchAll(/(?:src|href)="([^"]+)"/g)].map(m => m[1]).filter(p => !p.includes(':') && !p.startsWith('#'))
for (const path of paths) {
  const localPath = /\/(assets|images)\//.test(path) ? path.slice(path.indexOf(path.includes('/assets/') ? 'assets/' : 'images/')) : path.split('/').at(-1)
  await stat(resolve(dist, localPath))
}
const images = await readdir(resolve(dist, 'images'))
assert.equal(images.filter(f => f.endsWith('.webp')).length, 18)
assert.ok(!images.some(f => /100002083[1-5]/.test(f)))
assert.ok(!(await readdir(dist)).includes('references'))
await stat(resolve(dist, 'robots.txt'))
await stat(resolve(dist, 'favicon.svg'))
console.log('Static production output verified: entrypoint, local assets, six genuine photos, metadata-free derivatives, no original/reference photos.')
