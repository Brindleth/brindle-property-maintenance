import { readFile, readdir, rm, stat } from 'node:fs/promises'
import { resolve, sep } from 'node:path'
import assert from 'node:assert/strict'
import sharp from 'sharp'

const root = resolve(import.meta.dirname, '..')
const dist = resolve(root, 'dist')
// Retain the patio, genuine photos and selected service images; exclude old masters.
for (const relative of ['portfolio', 'images/inspiration', 'images/revision', 'images/og-brindle.jpg', 'images/og-brindle-v2.jpg', 'images/og-brindle-v3.jpg', 'images/og-brindle-v4.jpg']) {
  const target = resolve(dist, relative)
  assert.ok(target.startsWith(dist + sep), 'Cleanup must stay inside dist')
  await rm(target, { recursive: true, force: true })
}
const html = await readFile(resolve(dist, 'index.html'), 'utf8')
assert.ok(html.includes('Property Maintenance &amp; Skilled Labour Melbourne'))
assert.equal((html.match(/<h1[ >]/g) || []).length, 1)
assert.ok(html.includes('id="home-title"'))
for (const text of ['Property maintenance.', 'Skilled hands.', 'Quality results.', '0451 743 037', 'Site visit &amp; quote.', 'before acceptance', 'South Australian scope']) assert.ok(html.includes(text), text)
let previous = -1
for (const id of ['top', 'services', 'patio', 'about', 'work', 'process', 'contact']) {
  const position = html.indexOf('id="' + id + '"')
  assert.ok(position > previous, 'Section order: ' + id)
  previous = position
}
assert.equal((html.match(/class="service-card /g) || []).length, 6)
assert.ok(html.includes('service-featured'))
assert.equal((html.match(/<dialog /g) || []).length, 1)
assert.equal((html.match(/type="range"/g) || []).length, 1, 'Only the patio comparison remains')
assert.equal((html.match(/class="comparison-stage"/g) || []).length, 1)
assert.ok(html.includes('id="patio-comparison"'))
assert.ok(html.includes('The enclosure has not been built by Brindle.'))
assert.ok(html.includes('AI-created examples of work in progress'))
for (const id of ['privacy', 'service-scope', 'image-information']) assert.ok(html.includes('id="' + id + '"'))
for (const retired of ['Smart Home Solutions', 'project-stage', 'Concept Work', 'Visualised Finish', 'Proposed Finish', 'Transformation Preview', 'Illustrative Transformation', 'images/revision/', 'images/inspiration/', '<canvas', '<form', 'will-reveal']) assert.ok(!html.includes(retired), 'Retired content: ' + retired)
assert.ok(!html.includes('/src/main.tsx'))
assert.ok(!html.includes('mailto:'))
const phoneLinks = [...html.matchAll(/href="(tel:[^"]+)"/g)].map(match => match[1])
assert.ok(phoneLinks.length >= 4)
assert.ok(phoneLinks.every(phone => phone === 'tel:+61451743037'))
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1])
assert.equal(new Set(ids).size, ids.length, 'Unique element IDs')
for (const match of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(match[1]), 'Missing anchor: ' + match[1])

const images = [...html.matchAll(/<img\b[^>]*>/g)].map(match => match[0])
assert.equal(images.length, 12, 'Hero, six services, patio pair and three gallery views')
const sources = new Set()
for (const tag of images) {
  assert.ok(/width="\d+"/.test(tag) && /height="\d+"/.test(tag), 'Stable image dimensions')
  assert.ok(/alt="[^"]+"/.test(tag), 'Meaningful alt text')
  if (!tag.includes('hero-photo')) assert.ok(tag.includes('loading="lazy"'), 'Lazy below-fold images')
  const src = tag.match(/\bsrc="([^"]+)"/)[1]
  assert.ok(!sources.has(src), 'Avoid repeated photographs')
  sources.add(src)
  for (const match of (tag.match(/srcSet="([^"]+)"/i)?.[1] || '').matchAll(/([^, ]+) (\d+)w/g)) {
    const path = resolve(dist, match[1].slice(match[1].indexOf('images/')))
    const metadata = await sharp(path).metadata()
    assert.equal(metadata.width, Number(match[2]), 'Accurate responsive descriptor: ' + path)
    assert.equal(metadata.exif, undefined)
  }
}
for (const name of ['1000020847','1000020943','1000020945','1000020946','1000020954','1000020958']) assert.ok([...sources].some(source => source.includes(name)), 'Retain each original site view')
const localURLs = [...html.matchAll(/(?:src|href)="([^"]+)"/g)].map(match => match[1]).filter(url => !url.includes(':') && !url.startsWith('#'))
for (const url of localURLs) {
  const relative = /\/(assets|images)\//.test(url) ? url.slice(url.search(/(assets|images)\//)) : url.split('/').at(-1)
  await stat(resolve(dist, relative))
}
const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])
assert.equal(schema.telephone, '+61451743037')
assert.equal(schema.hasOfferCatalog.itemListElement.length, 6)
assert.ok(!('address' in schema) && !('aggregateRating' in schema))
for (const [folder,count] of [['images',18],['images/services',12],['images/concept',6]]) {
  const files = await readdir(resolve(dist, folder))
  assert.equal(files.filter(file => file.endsWith('.webp')).length, count)
  if (folder !== 'images') assert.ok(!files.some(file => /\.(png|jpg)$/i.test(file)))
}
for (const name of ['images/og-brindle-v5.jpg','robots.txt','sitemap.xml']) await stat(resolve(dist,name))
const cssFiles = (await readdir(resolve(dist,'assets'))).filter(file => file.endsWith('.css'))
const css = (await Promise.all(cssFiles.map(file => readFile(resolve(dist,'assets',file),'utf8')))).join('')
assert.ok(css.includes('Space Grotesk Variable') && css.includes('Manrope Variable'))
assert.ok(css.includes('font-weight:500'))
console.log('Verified: photographic services, all six unique genuine site views, exactly one patio comparison, original type, scoped telephone enquiries and valid static resources.')
