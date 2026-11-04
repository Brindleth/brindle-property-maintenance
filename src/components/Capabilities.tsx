import { asset } from '../data/portfolio'
import { capabilityImages } from '../data/capabilities'

export default function ServicesShowcase() {
  return <section className="service-showcase section-pad" id="services" aria-labelledby="services-title">
    <span className="section-alias" id="about" aria-hidden="true" /><span className="section-alias" id="inspiration" aria-hidden="true" />
    <div className="section-topline"><span className="eyebrow">01 / SERVICES &amp; BESPOKE WORK</span><span className="eyebrow subtle">CONSTRUCTION. MAINTENANCE. THE DETAILS.</span></div>
    <div className="service-showcase-heading"><h2 id="services-title">Practical skills.<br /><span className="muted">Considered spaces.</span></h2><p>Construction and carpentry support, property maintenance and bespoke nonregulated details. Experienced hands across the job.</p></div>
    <div className="service-image-grid">{capabilityImages.map((image, index) => <figure className={`service-tile service-tile-${index + 1}`} key={image.id}><div className="service-tile-image"><img src={asset(`images/inspiration/${image.id}-960.webp`)} srcSet={[480, 960, 1440].map(width => `${asset(`images/inspiration/${image.id}-${width}.webp`)} ${width}w`).join(', ')} sizes={index === 0 ? '(max-width: 760px) 90vw, 60vw' : '(max-width: 760px) 90vw, 45vw'} alt={image.alt} width="1536" height="1024" loading="lazy" /></div><figcaption><span>0{index + 1}</span><div><h3>{image.title}</h3><p>{image.caption}</p></div></figcaption></figure>)}</div>
    <div className="service-showcase-notes"><p>Hands-on assistance within an agreed scope. Regulated building and fixed electrical work require appropriately qualified trades and oversight.</p><p className="imagery-disclosure">Service imagery is illustrative, including AI-generated examples. Actual work is shown separately below.</p></div>
  </section>
}
