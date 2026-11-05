import sharp from 'sharp'
import {mkdir} from 'node:fs/promises'
import {resolve} from 'node:path'
const root=resolve(import.meta.dirname,'..'),output=resolve(root,'public/images/revision')
await mkdir(output,{recursive:true})
for(const id of ['cladding-finished','timber-framing','steel-framing','feature-wall-before'])for(const width of [480,960,1440]){
  await sharp(resolve(root,'references/cladding-revision/'+id+'.png')).rotate().resize({width}).webp({quality:85,effort:5}).toFile(resolve(output,id+'-'+width+'.webp'))
}
console.log('Prepared four photographic edits/illustrations at three responsive widths; source metadata removed.')
