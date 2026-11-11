type ServiceImage = { name: string; original?: boolean; title: string; caption: string; alt: string }

export const serviceImages: Record<string, ServiceImage> = {
  'property-maintenance': { name: 'property-maintenance-work', title: 'Property maintenance', caption: 'Repairs, fittings & everyday upkeep.', alt: 'An interior door-hardware repair in progress with the handle removed and tools near the jamb' },
  carpentry: { name: 'joinery-assembly-work', title: 'Carpentry & joinery', caption: 'Assembly, timberwork & fitting support.', alt: 'Partly assembled storage cabinet clamped on a used garage workbench with boards and packaging nearby' },
  labouring: { name: '1000020943', original: true, title: 'General & skilled labouring', caption: 'Extra hands for your next project.', alt: 'Original Brindle site photograph showing steel studs and timber noggins during construction support' },
  interiors: { name: 'interior-improvements-work', title: 'Interior improvements', caption: 'Painting, trims & finishing touches.', alt: 'Painting preparation in progress with filler patches, masking tape and a used drop cloth' },
  exteriors: { name: '1000020954', original: true, title: 'Exterior maintenance', caption: 'Preparation, upkeep & presentation.', alt: 'Original site photograph showing external wall preparation and battens around a window' },
  installations: { name: 'custom-installations-work', title: 'Custom installations', caption: 'Storage, fittings & practical solutions.', alt: 'Freestanding storage shelving being assembled in an ordinary garage with parts and packaging nearby' },
}
