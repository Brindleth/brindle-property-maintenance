import { Arrow } from './Icons'
import { business } from '../config/business'
import { asset } from '../data/portfolio'
import { patioConcept } from '../data/patio'

export default function PatioConcept() {
  return <section className="patio-section section-pad" id="concept" aria-labelledby="patio-title">
    <div className="section-topline"><span className="eyebrow">03 / A VISION FOR THE PATIO</span><span className="patio-badge">UNBUILT CONCEPT</span></div>
    <div className="single-patio-layout"><div className="single-patio-copy"><p className="eyebrow red">PROPOSED PERTH PATIO ENCLOSURE</p><h2 id="patio-title">Enclosed patio.<br /><span>Outdoor living.</span></h2><p>Stud-wall infill, pale cladding and a considered entertainment feature. One vision for the real space.</p><a className="text-call" href={business.telephone}><span>Talk through an idea<strong>{business.phone}</strong></span><Arrow diagonal /></a></div>
      <figure className="single-patio-image"><img src={asset('images/concept/patio-proposed-800.webp')} srcSet={[480, 800, 1080].map(width => `${asset(`images/concept/patio-proposed-${width}.webp`)} ${width}w`).join(', ')} sizes="(max-width: 760px) 90vw, 52vw" width="1086" height="1448" alt={patioConcept.alt} loading="lazy" /><figcaption>{patioConcept.label}</figcaption></figure>
    </div>
    <p className="single-patio-note">AI-generated from supplied patio references. Existing patio and lighting are not Brindle’s completed work. Proposed lighting and AV are concepts; regulated installation requires appropriate trades.</p>
  </section>
}
