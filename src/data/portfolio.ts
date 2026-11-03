export const portfolio = [
  { id: '1000020958', title: 'The exterior, coming together.', caption: 'Cladding around the large window. Hands-on installation support using supplied materials and instructions.', alt: 'Supplied project photograph of external cladding installed around a large residential window', category: 'CLADDING & WINDOW SURROUNDS' },
  { id: '1000020943', title: 'Behind the finished surface.', caption: 'Interior steel studs with timber noggins. Construction support on the residential project.', alt: 'Interior steel stud framing with horizontal timber noggins at the supplied residential construction project', category: 'STEEL FRAMING & TIMBER NOGGINS' },
  { id: '1000020945', title: 'Every layer has a purpose.', caption: 'Reflective building wrap and battens around the wide window opening.', alt: 'Reflective building wrap and battens around a wide window on the genuine construction project', category: 'BUILDING WRAP & BATTENS' },
  { id: '1000020847', title: 'On site. On the tools.', caption: 'Exterior cladding installation in progress at the residential worksite.', alt: 'Exterior worksite showing residential cladding installation in progress', category: 'EXTERNAL CLADDING SUPPORT' },
  { id: '1000020946', title: 'The work beneath.', caption: 'Reflective wrap, clips and battens around a smaller window.', alt: 'Small window surrounded by reflective building wrap and battens during construction', category: 'WRAP, CLIPS & BATTENS' },
  { id: '1000020954', title: 'A closer look.', caption: 'An alternate view of the wrap and batten installation around the small window.', alt: 'Alternate supplied photograph of reflective wrap and battens around a small residential window', category: 'CONSTRUCTION DETAIL' },
] as const

export function asset(path: string) { return `${import.meta.env.BASE_URL}${path}` }
