import sharp from 'sharp'
import {mkdir} from 'node:fs/promises'
import{resolve}from'node:path'
const root=resolve(import.meta.dirname,'..'),output=resolve(root,'public/images/assembly')
await mkdir(output,{recursive:true})
for(const id of ['thermal-wrap','metal-battens-clean','window-trims','exterior-cladding']) for(const width of [720,1080,1440]) await sharp(resolve(root,'references/assembly-generated/'+(id==='metal-battens-clean'?'metal-battens-v3':id)+'.png')).rotate().resize(width,Math.round(width*4/3),{fit:'fill'}).webp({quality:83,effort:5}).toFile(resolve(output,id+'-'+width+'.webp'))
await sharp(resolve(root,'references/assembly-generated/fixing-tab.png')).trim().resize({width:128}).webp({quality:95,lossless:true}).toFile(resolve(output,'fixing-tab.webp'))
console.log('Prepared four registered photographic plates and one alpha-preserving fixing-tab cutout, without source metadata.')
