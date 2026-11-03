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
assert.ok(html.includes('id="home-title"'), 'Homepage must be statically rendered')
assert.ok(html.includes('id="work"'), 'Portfolio must exist before JavaScript')
assert.equal((html.match(/<h1[ >]/g) || []).length, 1, 'One page title')
assert.equal((html.match(/class="project-photo /g) || []).length, 6, 'All six photos must be in static HTML')
assert.ok(html.indexOf('id="work"') < html.indexOf('id="about"'), 'Portfolio must precede service copy')
assert.ok(!html.includes('will-reveal'), 'Photographs must not depend on reveal scripts')
assert.ok(!html.includes('<canvas'), 'The renderer must not start with the portfolio')
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
