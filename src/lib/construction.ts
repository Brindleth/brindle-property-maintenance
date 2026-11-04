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
export function scrollProgress(scrollY: number, sectionTop: number, sectionHeight: number, viewportHeight: number) { return clamp((scrollY-sectionTop)/Math.max(1,sectionHeight-viewportHeight)) }
export function stageAt(progress: number) { const p=clamp(progress); return p<0.12?0:p<0.30?1:p<0.52?2:p<0.68?3:4 }
export function stageProgress(index: number) { return [0,0.299,0.519,0.679,1][Math.max(0,Math.min(4,index))] }
export function pieceProgress(progress: number, timing: readonly [number,number], index: number, count: number) { const p=clamp((progress-timing[0])/(timing[1]-timing[0])); return smooth((p-index/count)*count) }
