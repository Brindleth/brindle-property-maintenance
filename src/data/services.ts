/** Check docs/SERVICE_SCOPE_REVIEW.md before broadening service claims. */
export const serviceGroups = [
  {
    id: 'property-maintenance', icon: 'maintenance', title: 'Property maintenance & repairs',
    description: 'Practical maintenance, minor repairs and property improvements to help keep homes and commercial spaces looking their best and functioning properly.',
    items: ['General upkeep and property preparation', 'Minor cosmetic, nonregulated repairs', 'Door handles, cabinet hardware and fittings', 'Freestanding shelving and furniture assembly'],
    scope: 'Maintenance tasks are assessed individually. Work requiring a permit, trade licence or building registration is excluded.',
  },
  {
    id: 'carpentry', icon: 'timber', title: 'Carpentry & joinery support',
    description: 'Careful timberwork, fitting, assembly and joinery assistance, with attention to accurate measurements and quality finishing.',
    items: ['Flat-pack cabinets and furniture assembly', 'Cabinet hardware adjustments', 'Minor decorative trim and nonstructural timber repairs', 'Measuring, fitting and joinery assistance within permitted scope'],
    scope: 'Nonstructural work only where permitted. Built-in joinery, building alterations and larger projects require scope and registration checks before acceptance.',
  },
  {
    id: 'labouring', icon: 'labour', title: 'General & skilled labouring',
    description: 'Reliable hands-on assistance for maintenance, construction, renovation and installation projects.',
    items: ['Material handling and site organisation', 'Site clean-up and preparation assistance', 'Measuring and installation support', 'Practical project assistance for builders and trades'],
    scope: 'Support is agreed to suit the job and lawful working arrangement. Working alongside a licensed trade does not itself authorise restricted work or unlicensed subcontracting.',
    featured: true,
  },
  {
    id: 'interiors', icon: 'interior', title: 'Renovations & interior improvements',
    description: 'Practical improvements, finishing details and installation work that help refresh and improve interior spaces.',
    items: ['Painting preparation and cosmetic finishing', 'Painting where permitted', 'Furniture assembly and storage improvements', 'Decorative fitting and interior finishing assistance'],
    scope: 'Small, nonstructural tasks within permitted scope. No structural alterations, waterproofing or regulated building work.',
  },
  {
    id: 'exteriors', icon: 'exterior', title: 'Exterior maintenance & improvements',
    description: 'Exterior maintenance, preparation, repairs and finishing assistance to help improve and maintain the appearance of a property.',
    items: ['Property presentation and surface preparation', 'Outdoor furniture and equipment assembly', 'Minor nonstructural cosmetic repairs', 'Exterior finishing assistance within permitted scope'],
    scope: 'Cladding shown in the portfolio records past construction-support experience. Independent cladding, façade-system and structural work are not offered.',
  },
  {
    id: 'installations', icon: 'install', title: 'Custom installations & practical solutions',
    description: 'Thoughtful, practical installation and customisation solutions for spaces that need something beyond standard off-the-shelf fittings.',
    items: ['Freestanding storage and furniture installations', 'Equipment and display assembly', 'Decorative fittings where permitted', 'Plug-in smart-home products and permitted AV configuration'],
    scope: 'Mounting is assessed for the surface, load and approvals required. No fixed electrical work, plumbing, regulated cabling or in-wall wiring.',
  },
] as const
