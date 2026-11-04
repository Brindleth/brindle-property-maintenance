export const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value))
export const smooth = (value: number) => { const p = clamp(value); return p * p * (3 - 2 * p) }
export const phase = (progress: number, start: number, end: number) => smooth((progress - start) / (end - start))
export const constructionStages = [
  { title: 'Good work.\nFrom the\nground up.', label: 'Ground layout', eyebrow: 'EXPERIENCED HANDS. CONSIDERED WORK.', description: 'Construction support, property maintenance and bespoke finishes. Over 20 years of practical experience, from framing to fit-out.' },
  { title: 'A solid\nframework.', label: 'Steel framing', eyebrow: '01 / THE FRAMEWORK', description: 'Steel framing support. A clear plan, careful handling and hands-on experience where it counts.' },
  { title: 'Strength in\nthe details.', label: 'Timber noggins', eyebrow: '02 / THE CONNECTIONS', description: 'Timber noggins, clips and the connections that bring the frame together. Working to supplied project instructions.' },
  { title: 'Layer by\nlayer.', label: 'Wrap & battens', eyebrow: '03 / THE ENVELOPE', description: 'Building wrap, clips and battens. Practical construction support through each layer of the build.' },
  { title: 'Taking\nshape.', label: 'External cladding', eyebrow: '04 / THE EXTERIOR', description: 'Fibre-cement and traditional cladding support. Considered placement, clean lines and attention to the finish.' },
  { title: 'The finish\nmatters.', label: 'Finishing details', eyebrow: '05 / THE FINAL DETAILS', description: 'Window surrounds, trim and finishing assistance. Experienced hands to help bring your project together.' },
] as const

export function stageAt(progress: number) { return Math.min(5, Math.floor(clamp(progress) * 6)) }
export function scrollProgress(scrollY: number, sectionTop: number, sectionHeight: number, viewportHeight: number) {
  return clamp((scrollY - sectionTop) / Math.max(1, sectionHeight - viewportHeight))
}
export function stageProgress(index: number) { return index <= 0 ? 0 : clamp((index + 1) / 6 - 0.01) }

export const assembly = {
  frame: [0.10, 0.30], timber: [0.30, 0.45], wrap: [0.46, 0.57],
  battens: [0.53, 0.66], cladding: [0.65, 0.83], trim: [0.83, 0.96],
} as const
