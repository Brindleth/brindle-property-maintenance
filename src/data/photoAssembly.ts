// Registered to the cleaned 1000020847 camera plate in a 1152 x 1536 space.
// Windows and foreground remain on the fixed camera plate.
export const photoAssembly = {
  width: 1152, height: 1536,
  files: ['thermal-wrap','metal-battens-clean','window-trims','exterior-cladding'],
  wall: '528,0 1152,0 1152,1415 340,843 338,529',
  largeWindow: '528,620 1152,412 1152,1264 528,952',
  smallWindow: '433,659 446,654 446,792 433,791',
  leftTop: [338,140], leftBottom: [338,950], rightTop: [1152,-1572], rightBottom: [1152,1526],
} as const
export function boardPolygon(index: number, count: number, completion=1) {
  const t0=index/count,t1=(index+completion)/count
  const point=(left: boolean,t: number) => { const a=left?photoAssembly.leftTop:photoAssembly.rightTop; const b=left?photoAssembly.leftBottom:photoAssembly.rightBottom; return [a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t].join(',') }
  return [point(true,t0),point(false,t0),point(false,t1),point(true,t1)].join(' ')
}

function inPolygon(x: number,y: number,polygon: string) {
  const points=polygon.split(' ').map(point=>point.split(',').map(Number));let inside=false
  for(let i=0,j=points.length-1;i<points.length;j=i++){
    const [xi,yi]=points[i],[xj,yj]=points[j]
    if((yi>y)!==(yj>y)&&x<(xj-xi)*(y-yi)/(yj-yi)+xi)inside=!inside
  }
  return inside
}
// A photographic cutout supplies the hardware texture; geometry controls its true small scale.
export const fixingTabs = [358,375,392,409,428,455,480,508,551,598,674,752,885,1047].flatMap(x=>{
  const size=3+5*(x-338)/814,step=145*(0.30+0.70*(x-338)/814)
  const top=Math.max(0,529-(x-338)*2.784),bottom=843+(x-340)*0.704
  const tabs=[]
  for(let y=top+32;y<bottom-12;y+=step){
    if(!inPolygon(x,y,photoAssembly.wall)||inPolygon(x,y,'493,582 1152,360 1152,1320 493,990')||inPolygon(x,y,'410,631 470,618 470,826 410,819'))continue
    tabs.push({x,y,width:size,height:size/3,angle:Math.atan2(y-746,x-50)*180/Math.PI})
  }
  return tabs
})
