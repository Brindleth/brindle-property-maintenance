import { asset } from '../data/portfolio'
import { serviceGroups } from '../data/services'

export default function ServicesShowcase() {
  return <section className="service-showcase service-revision section-pad" id="services" aria-labelledby="services-title">
    <span className="section-alias" id="about" aria-hidden="true" /><span className="section-alias" id="inspiration" aria-hidden="true" />
    <div className="section-topline"><span className="eyebrow">01 / PRACTICAL WORK. SMARTER POSSIBILITIES.</span><span className="eyebrow subtle">MAINTENANCE / CONSTRUCTION / TECHNOLOGY</span></div>
    <div className="service-showcase-heading"><h2 id="services-title">Skilled hands.<br /><span className="muted">An open mind.</span></h2><p>Property care, construction support and smart-home solutions. Practical experience and technical thinking, brought together.</p></div>
    <div className="service-category-grid">{serviceGroups.map((group, index) => <article id={group.id} className={'service-category category-'+(index+1)} key={group.id} aria-labelledby={group.id+'-title'}>
      <div className="service-category-photo"><img src={asset('images/inspiration/'+group.image+'-960.webp')} srcSet={[480,960,1440].map(width => asset('images/inspiration/'+group.image+'-'+width+'.webp')+' '+width+'w').join(', ')} sizes="(max-width: 760px) 90vw, 45vw" alt={group.alt} width="1536" height="1024" loading="lazy" decoding="async" /></div>
      <div className="service-category-copy"><span className="service-category-number">0{index+1}</span><h3 id={group.id+'-title'}>{group.title}</h3><p>{group.line}</p><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul>
      {group.id==='smart-home' && <p className="smart-scope">Design, device selection and wireless configuration. Fixed wiring, switchboards, hardwired lighting and regulated cabling require the appropriate licensed or registered practitioner.</p>}
      </div>
    </article>)}</div>
    <div className="service-showcase-notes"><p>Practical assistance within an agreed scope. Regulated building work and installations require appropriately qualified trades.</p><p className="imagery-disclosure">Service imagery is illustrative, including AI-generated examples. Original site photographs appear in Actual work.</p></div>
  </section>
}
