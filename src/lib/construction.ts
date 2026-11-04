export const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value))
export const smooth = (value: number) => { const p = clamp(value); return p * p * (3 - 2 * p) }
export const phase = (progress: number, start: number, end: number) => smooth((progress - start) / (end - start))
export const constructionStages = [
  { label: 'Thermal wrap', description: 'The reflective envelope beneath the finish.' },
  { label: 'Metal clips', description: 'Small rectangular fixing tabs sit against the wrap.' },
  { label: 'Metal battens', description: 'Vertical channels complete the fixing arrangement.' },
  { label: 'Window surrounds & corners', description: 'White surrounds fit around the existing openings.' },
  { label: 'Exterior cladding', description: 'Horizontal courses bring the facade together.' },
] as const
export const assembly = { clips: [0.12,0.30], battens: [0.30,0.52], trims: [0.52,0.68], cladding: [0.68,0.96] } as const
export function stageAt(progress: number) { const p=clamp(progress); return p<=0.12?0:p<=0.30?1:p<=0.52?2:p<=0.68?3:4 }
export function pieceProgress(progress: number, timing: readonly [number,number], index: number, count: number) { const p=clamp((progress-timing[0])/(timing[1]-timing[0])); return smooth((p-index/count)*count) }

export const loopDuration = 30_000
// Each installation has a short settled hold. Fade back to the same wrap plate to restart.
export function loopFrame(elapsed: number) {
  const seconds=((Math.max(0,elapsed)%loopDuration)/1000)
  const stops=[[0,0],[3,0],[6,.30],[8,.30],[12,.52],[14,.52],[17,.68],[19,.68],[25,1],[30,1]]
  let progress=0
  for(let i=1;i<stops.length;i++) {
    const [end,value]=stops[i], [start,previous]=stops[i-1]
    if(seconds<=end){progress=previous+(value-previous)*clamp((seconds-start)/(end-start));break}
  }
  return {progress,opacity:1-phase(seconds,29,30)}
}

// The same column mask that installs a batten also hides the fixing tabs beneath it.
export function clipOpacity(progress: number, tab: {x:number;y:number;height:number}, index: number, count: number) {
  const column=Math.max(0,Math.min(7,Math.floor((tab.x-320)/104)))
  const coveredTo=1536*pieceProgress(progress,assembly.battens,column,8)
  const uncovered=1-smooth((coveredTo-(tab.y-tab.height/2))/tab.height)
  return pieceProgress(progress,assembly.clips,index,count)*uncovered
}
