import { readFile, readdir, rm, stat } from 'node:fs/promises'
import { resolve, sep } from 'node:path'
import assert from 'node:assert/strict'
const root=resolve(import.meta.dirname,'..'),dist=resolve(root,'dist'),originals=resolve(dist,'portfolio')
assert.ok(originals.startsWith(dist+sep),'Cleanup must remain inside dist')
await rm(originals,{recursive:true,force:true})
const html=await readFile(resolve(dist,'index.html'),'utf8')
assert.ok(html.includes('BRINDLE | Property Maintenance &amp; Smart Home Solutions'))
assert.equal((html.match(/<h1[ >]/g)||[]).length,1)
assert.ok(html.includes('id="home-title"'))
assert.ok(html.includes('class="cladding-hero"'))
assert.ok(html.includes('Upper wall digitally visualised.'))
assert.ok(html.includes('>brindle<span'))
assert.ok(html.includes('Call to discuss work'))
for(const tag of html.match(/<img\b[^>]*>/g)||[])if(!tag.includes('cladding-hero-photo'))assert.ok(tag.includes('loading="lazy"'),'Below-fold imagery must lazy-load')
assert.ok(html.includes('0451 743 037'))
const sections=['top','services','construction','concept','fitouts','smart-home','property-maintenance','work','experience','contact']
let previous=-1
for(const id of sections){const position=html.indexOf('id="'+id+'"');assert.ok(position>previous,'Section order: '+id);previous=position}
assert.equal((html.match(/class="image-comparison /g)||[]).length,3,'Exactly three transformation comparisons')
for(const id of ['cladding','patio','feature'])assert.ok(html.includes('id="'+id+'-comparison"'))
assert.ok(html.includes('Original site photograph → upper section digitally visualised.'))
assert.ok(html.includes('Unbuilt proposal; the existing patio and lighting are not BRINDLE’s completed work.'))
assert.ok(html.includes('Illustrative transformation, not a completed BRINDLE project.'))
assert.equal((html.match(/class="imagery-disclosure"/g)||[]).length,1)
assert.ok(html.includes('images/concept/patio-existing-800.webp'))
assert.ok(html.includes('images/concept/patio-proposed-v2-800.webp'))
assert.ok(html.includes('images/revision/timber-framing-960.webp'))
assert.ok(html.includes('images/revision/steel-framing-960.webp'))
assert.ok(html.includes('Fixed wiring, switchboards, hardwired lighting and regulated cabling'))
assert.equal((html.match(/class="project-slide /g)||[]).length,4)
assert.ok(html.includes('id="project-stage"'))
assert.ok(html.includes('class="project-detail"'))
for(const retired of ['photo-assembly','SCROLL TO ASSEMBLE','Pause animation','Construction assembly progress','images/assembly/','framing-support-','<canvas','id="patio-grid"'])assert.ok(!html.includes(retired),'Remove retired content: '+retired)
assert.ok(!html.includes('/src/main.tsx'))
assert.ok(!html.includes('will-reveal'))
const experience=html.slice(html.indexOf('id="experience"'),html.indexOf('id="contact"'))
assert.ok(!/images\/10000209/.test(experience))
const urls=[...html.matchAll(/(?:src|href)="([^"]+)"/g)].map(m=>m[1]).filter(p=>!p.includes(':')&&!p.startsWith('#'))
for(const path of urls){const local=path.includes('/assets/')?path.slice(path.indexOf('assets/')):path.includes('/images/')?path.slice(path.indexOf('images/')):path.split('/').at(-1);await stat(resolve(dist,local))}
const folders={images:18,'images/concept':6,'images/inspiration':9,'images/revision':12}
for(const [folder,count] of Object.entries(folders)){const files=await readdir(resolve(dist,folder));assert.equal(files.filter(f=>f.endsWith('.webp')).length,count);if(folder!=='images')assert.ok(!files.some(f=>/\.(jpg|png)$/.test(f)))}
assert.ok(!(await readdir(dist)).includes('references'))
await stat(resolve(dist,'robots.txt'));await stat(resolve(dist,'favicon.svg'))
console.log('Static output verified: cladding-first photographic hero, exactly three accessible comparisons, separate framing imagery, genuine work and scoped services; no wall assembly or raw originals.')
