/** Public business details. Change here; never publish an unapproved rate or home address. */
export const business = {
  name: 'Brindle Property Maintenance',
  phone: '0451 743 037',
  telephone: 'tel:+61451743037',
  serviceArea: 'Melbourne & surrounding areas',
  availability: 'Call to discuss your project and current availability.',
  rate: 'Rates discussed by phone',
  experience: '20+',
  services: [
    { number: '01', title: 'Framing & structure support', text: 'Hands-on support with steel framing, timber noggins, clips and battens, working to the project’s supplied details and instructions.', tags: 'STEEL FRAMING / TIMBER NOGGINS / SITE SUPPORT' },
    { number: '02', title: 'Wrap, cladding & finishing', text: 'Practical assistance with building wrap, fibre-cement and traditional cladding, plasterboard, painting and the details that bring a job together.', tags: 'WRAP / CLADDING / PAINTING / FIT-OUT' },
    { number: '03', title: 'Property & project support', text: 'Site preparation, material handling, doors and windows, and assistance with fascia, soffits and downpipes. A useful pair of hands across the job.', tags: 'PREPARATION / MATERIALS / GENERAL MAINTENANCE' },
  ],
  training: [
    ['CPCWHS1001', 'Construction induction'],
    ['RIIWHS204E', 'Working safely at heights'],
    ['RIIWHS202E / MSMPER205', 'Confined spaces'],
    ['MSMWHS217', 'Gas testing'],
    ['MSMPER200 / MSMPER202', 'Permit work'],
  ],
} as const
