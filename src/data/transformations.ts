import { patioComparison } from './patio.ts'

export type ComparisonPhoto = {src:string;sources:{src:string;width:number}[];width:number;height:number;alt:string}
export type Transformation = {id:string;label:string;controlLabel:string;beforeLabel:string;afterLabel:string;layout:'portrait'|'patio'|'landscape';before:ComparisonPhoto;after:ComparisonPhoto;disclosure:string}
function photo(path:string,widths:number[],alt:string,width:number,height:number):ComparisonPhoto {
  return {src:path+'-'+widths[1]+'.webp',sources:widths.map(size=>({src:path+'-'+size+'.webp',width:size})),width,height,alt}
}
export const claddingTransformation:Transformation = {
  id:'cladding',label:'Exterior cladding — upper-wall finish preview',controlLabel:'Compare original cladding progress and visualised finish',beforeLabel:'Original progress',afterLabel:'Visualised finish',layout:'portrait',
  before:{...photo('images/1000020958',[480,960,1600],'Original site photograph: horizontal cladding and white window surrounds with reflective wrap still exposed above',1152,1536),sources:[{src:'images/1000020958-480.webp',width:480},{src:'images/1000020958-960.webp',width:960},{src:'images/1000020958-1600.webp',width:1152}]},
  after:photo('images/revision/cladding-finished',[480,960,1440],'Same original wall with only the exposed upper section digitally finished to match the existing horizontal cladding',1152,1536),
  disclosure:'Original site photograph → upper section digitally visualised. The lower cladding and window surrounds are real work; the completed upper wall is a preview.',
}
export const patioTransformation:Transformation = {
  id:'patio',label:patioComparison.label,controlLabel:'Compare existing patio and proposed design',beforeLabel:'Existing patio',afterLabel:'Proposed finish',layout:'patio',
  before:photo('images/concept/'+patioComparison.before.name,[480,800,1080],patioComparison.before.alt,1080,1440),
  after:photo('images/concept/'+patioComparison.after.name,[480,800,1080],patioComparison.after.alt,1080,1440),
  disclosure:'Unbuilt proposal; the existing patio and lighting are not BRINDLE’s completed work.',
}
export const featureTransformation:Transformation = {
  id:'feature',label:'Feature wall & entertainment — illustrative transformation',controlLabel:'Compare plain room and proposed entertainment fit-out',beforeLabel:'Plain room',afterLabel:'Proposed fit-out',layout:'landscape',
  before:photo('images/revision/feature-wall-before',[480,960,1440],'Illustrative plain plasterboard wall in the same room before the proposed entertainment fit-out',1536,1024),
  after:photo('images/inspiration/feature-wall',[480,960,1440],'Illustrative oak feature wall, entertainment cabinetry and low-voltage lighting in the same room',1536,1024),
  disclosure:'Illustrative transformation, not a completed BRINDLE project. Decorative fit-out and permitted equipment integration only.',
}
export const transformations=[claddingTransformation,patioTransformation,featureTransformation]
