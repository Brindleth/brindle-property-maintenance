/** Public business details. Change here; never publish an unapproved rate or home address. */
export const business = {
  name: 'BRINDLE',
  tagline: 'Property Maintenance & Smart Home Solutions',
  fullName: 'BRINDLE — Property Maintenance & Smart Home Solutions',
  phone: '0451 743 037',
  telephone: 'tel:+61451743037',
  serviceArea: 'Melbourne & surrounding areas',
  availability: 'Call to discuss your project and current availability.',
  rate: 'Rates discussed by phone',
  experience: '20+',
  services: [
    { number: '01', title: 'Framing & structure support', text: 'Steel framing, timber noggins, clips and battens, working to supplied project instructions.', tags: 'STEEL FRAMING / TIMBER NOGGINS / SITE SUPPORT' },
    { number: '02', title: 'Wrap, cladding & finishing', text: 'Hands-on assistance with wrap, cladding, plasterboard, painting and nonregulated fit-out details.', tags: 'WRAP / CLADDING / PAINTING / FIT-OUT' },
    { number: '03', title: 'Property & project support', text: 'Site preparation, materials, general maintenance and door, window, fascia and soffit assistance.', tags: 'PREPARATION / MATERIALS / GENERAL MAINTENANCE' },
  ],
  training: [
    ['CPCWHS1001', 'Construction induction'],
    ['RIIWHS204E', 'Working safely at heights'],
    ['RIIWHS202E / MSMPER205', 'Confined spaces'],
    ['MSMWHS217', 'Gas testing'],
    ['MSMPER200 / MSMPER202', 'Permit work'],
  ],
} as const
