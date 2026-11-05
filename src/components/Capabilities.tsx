import { business } from '../config/business'
import { asset } from '../data/portfolio'
import { serviceGroups } from '../data/services'
import { claddingTransformation } from '../data/transformations'
import ImageComparison from './ImageComparison'
import { Arrow } from './Icons'

function ServicePhoto({name,alt}:{name:string;alt:string}) {
  const directory=['timber-framing','steel-framing'].includes(name)?'revision':'inspiration'
  return <img src={asset('images/'+directory+'/'+name+'-960.webp')} srcSet={[480,960,1440].map(width=>asset('images/'+directory+'/'+name+'-'+width+'.webp')+' '+width+'w').join(', ')} sizes="(max-width: 760px) 90vw, 45vw" alt={alt} width="1536" height="1024" loading="lazy" decoding="async"/>
}
function Items({items}:{items:readonly string[]}) {return <ul className="revision-services-list">{items.map(item=><li key={item}>{item}</li>)}</ul>}

export default function CladdingFeature() {
  return <section id="services" className="cladding-feature section-pad" aria-labelledby="cladding-title">
    <span className="section-alias" id="about" aria-hidden="true"/><span className="section-alias" id="inspiration" aria-hidden="true"/><span className="section-alias" id="cladding" aria-hidden="true"/>
    <div className="section-topline"><span className="eyebrow">01 / CLADDING &amp; EXTERIOR FINISHES</span><span className="eyebrow subtle">THE MAIN FOCUS</span></div>
    <div className="cladding-feature-grid"><div className="cladding-feature-copy"><h2 id="cladding-title">The finish makes<br/><span className="muted">the difference.</span></h2><p>Exterior cladding, considered from preparation to the final trim. Hands-on support with the surfaces and details that bring a facade together.</p><Items items={serviceGroups[0].items}/><p className="scope-caption">Working to supplied details and an agreed scope. Regulated building work requires appropriately qualified trades.</p><a className="revision-text-call" href={business.telephone}>Discuss your cladding work<Arrow diagonal/><small>{business.phone}</small></a><div className="service-jump-links"><a href="#construction">Construction &amp; framing</a><a href="#concept">Outdoor &amp; fit-outs</a><a href="#smart-home">Smart home</a><a href="#property-maintenance">Maintenance</a></div></div><ImageComparison comparison={claddingTransformation}/></div>
  </section>
}
export function ConstructionServices() {
  return <section id="construction" className="construction-services section-pad" aria-labelledby="construction-title">
    <div className="section-topline"><span className="eyebrow">02 / CONSTRUCTION &amp; FRAMING</span><span className="eyebrow subtle">PRACTICAL SUPPORT</span></div>
    <div className="revision-section-heading"><h2 id="construction-title">Good work starts<br/><span className="muted">behind the surface.</span></h2><p>Framing assistance, partitions and fit-out preparation. Practical help alongside the right trades, to supplied project details.</p></div>
    <div className="framing-grid"><figure><ServicePhoto name="timber-framing" alt="Illustrative timber-only residential stud partition with top and bottom plates, staggered noggins and natural timber grain"/><figcaption><span>01 / TIMBER</span><h3>Timber framing support.</h3><p>Stud walls, noggins and practical preparation.</p></figcaption></figure><figure><ServicePhoto name="steel-framing" alt="Illustrative steel-only stud partition with galvanised channels, floor and head tracks in an unfinished interior"/><figcaption><span>02 / STEEL</span><h3>Steel framing support.</h3><p>Light-gauge framing and installation assistance.</p></figcaption></figure></div>
    <Items items={serviceGroups[1].items}/>
  </section>
}
export function SupportingServices() {
  return <>
    <section id="smart-home" className="smart-services section-pad" aria-labelledby="smart-home-title"><div className="section-topline"><span className="eyebrow">05 / SMART HOME &amp; CUSTOM ELECTRONICS</span><span className="eyebrow subtle">USEFUL TECHNOLOGY</span></div><div className="support-service-grid"><div className="support-photo"><ServicePhoto name="smart-home" alt="Illustrative wireless smart-home devices, battery sensor, voice assistant and plug-in lamp on a sideboard"/></div><div><h2 id="smart-home-title">Smart solutions.<br/><span>Everyday benefits.</span></h2><p>Thoughtful device selection, wireless configuration and bespoke low-voltage features.</p><Items items={serviceGroups[4].items}/><p className="scope-caption">Design, device selection and wireless configuration. Fixed wiring, switchboards, hardwired lighting and regulated cabling require the appropriate licensed or registered practitioner.</p></div></div></section>
    <section id="property-maintenance" className="maintenance-services section-pad" aria-labelledby="maintenance-title"><div className="section-topline"><span className="eyebrow">06 / PROPERTY MAINTENANCE</span><span className="eyebrow subtle">THE DETAILS MATTER</span></div><div className="support-service-grid"><div><h2 id="maintenance-title">A better finish.<br/><span className="muted">A well-kept property.</span></h2><p>Careful preparation, small improvements and practical problem-solving.</p><Items items={serviceGroups[5].items}/></div><div className="support-photo"><ServicePhoto name="painting-maintenance" alt="Illustrative freshly painted room with protected flooring and finishing tools"/></div></div><p className="imagery-disclosure">Service and transformation imagery includes AI-generated illustrations. Genuine work uses original site photographs.</p></section>
  </>
}
