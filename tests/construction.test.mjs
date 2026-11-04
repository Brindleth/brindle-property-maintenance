import{test}from'node:test'
import assert from'node:assert/strict'
import{assembly,pieceProgress,scrollProgress,stageAt,stageProgress,constructionStages}from'../src/lib/construction.ts'
import{boardPolygon,fixingTabs}from'../src/data/photoAssembly.ts'

test('five photographic stages match the specified installation order',()=>{
 assert.deepEqual(constructionStages.map(s=>s.label),['Thermal wrap','Metal clips','Metal battens','Window surrounds & corners','Exterior cladding'])
 for(let i=0;i<5;i++)assert.equal(stageAt(stageProgress(i)),i)
 assert.equal(stageAt(-2),0);assert.equal(stageAt(2),4)
})
test('assembly progress is deterministic in forward and reverse scrolling',()=>{
 const positions=[0,200,500,1100,2000,3000,4400,9000]
 const map=y=>scrollProgress(y,0,5400,1000)
 assert.deepEqual(positions.map(map),[...positions].reverse().map(map).reverse())
 assert.equal(map(-100),0);assert.equal(map(4400),1)
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
