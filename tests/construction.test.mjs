import{test}from'node:test'
import assert from'node:assert/strict'
import{assembly,clipOpacity,loopDuration,loopFrame,pieceProgress,stageAt,constructionStages}from'../src/lib/construction.ts'
import{boardPolygon,fixingTabs}from'../src/data/photoAssembly.ts'

test('five photographic stages match the specified installation order',()=>{
 assert.deepEqual(constructionStages.map(s=>s.label),['Thermal wrap','Metal clips','Metal battens','Window surrounds & corners','Exterior cladding'])
 for(const [i,p] of [0,.30,.52,.68,1].entries())assert.equal(stageAt(p),i)
 assert.equal(stageAt(-2),0);assert.equal(stageAt(2),4)
})
test('automatic loop holds every stage, repeats and fades cleanly to the base plate',()=>{
 for(const [seconds,progress] of [[0,0],[2,0],[7,.30],[13,.52],[18,.68],[27,1]]){
  assert.equal(loopFrame(seconds*1000).progress,progress)
  assert.deepEqual(loopFrame(seconds*1000),loopFrame(seconds*1000+loopDuration))
 }
 assert.equal(loopFrame(-100).progress,0)
 assert.equal(loopFrame(29_000).opacity,1)
 assert.ok(loopFrame(29_999).opacity<.001)
 assert.deepEqual(loopFrame(loopDuration),{progress:0,opacity:1})
 let previous=0
 for(let t=0;t<loopDuration;t+=100){const p=loopFrame(t).progress;assert.ok(p>=previous&&p<=1);previous=p}
})
test('individual installation groups finish in order and fully reverse',()=>{
 for(const timing of Object.values(assembly))for(const count of [1,8,22]){
  for(let i=0;i<count;i++){
   assert.equal(pieceProgress(0,timing,i,count),0)
   assert.equal(pieceProgress(1,timing,i,count),1)
   let previous=0
   for(let j=0;j<=100;j++){const p=pieceProgress(j/100,timing,i,count);assert.ok(p>=previous&&p<=1);previous=p}
  }
 }
 assert.equal(pieceProgress(.30,assembly.clips,7,8),1)
 assert.equal(pieceProgress(.30,assembly.battens,0,8),0)
 assert.equal(pieceProgress(.68,assembly.trims,0,1),1)
 assert.equal(pieceProgress(.68,assembly.cladding,0,22),0)
})
test('cladding reveal polygons follow facade perspective and collapse at zero progress',()=>{
 const points=boardPolygon(10,22).split(' ').map(p=>p.split(',').map(Number))
 assert.ok(points[1][1]<points[0][1],'Board follows the upward-to-right course perspective')
 const zero=boardPolygon(10,22,0).split(' ')
 assert.equal(zero[0],zero[3]);assert.equal(zero[1],zero[2])
})
test('fixing tabs stay small and rectangular at every perspective position',()=>{
 assert.ok(fixingTabs.length>20&&fixingTabs.length<120)
 for(const tab of fixingTabs){assert.ok(tab.width>=3&&tab.width<=8);assert.equal(tab.height,tab.width/3);assert.ok(Number.isFinite(tab.angle))}
})
test('clips are fully hidden behind each installed batten and remain hidden at the finish',()=>{
 for(const [i,tab] of fixingTabs.entries()){
  assert.equal(clipOpacity(0,tab,i,fixingTabs.length),0)
  assert.equal(clipOpacity(.30,tab,i,fixingTabs.length),1)
  for(const progress of [.52,.68,1])assert.equal(clipOpacity(progress,tab,i,fixingTabs.length),0)
  let previous=1
  for(let p=.30;p<=.52;p+=.001){const opacity=clipOpacity(p,tab,i,fixingTabs.length);assert.ok(opacity<=previous);previous=opacity}
 }
})
