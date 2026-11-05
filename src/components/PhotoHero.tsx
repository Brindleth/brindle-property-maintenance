import { business } from '../config/business'
import { asset } from '../data/portfolio'
import { Arrow } from './Icons'

export default function PhotoHero() {
  return <section id="top" className="cladding-hero" aria-labelledby="home-title">
    <img className="cladding-hero-photo" src={asset('images/revision/cladding-finished-1440.webp')} srcSet={[480,960,1440].map(width=>asset('images/revision/cladding-finished-'+width+'.webp')+' '+width+'w').join(', ')} sizes="100vw" alt="The owner’s actual exterior cladding photograph, with the exposed upper section digitally visualised to match the existing finish" width="1152" height="1536" fetchPriority="high" decoding="async"/>
    <div className="cladding-hero-shade" aria-hidden="true"/>
    <div className="cladding-hero-meta"><span><i className="status-dot"/>EXTERIOR FINISHING / PRACTICAL EXPERIENCE</span><span>{business.serviceArea}</span></div>
    <div className="cladding-hero-copy"><p className="eyebrow">BRINDLE</p><h1 id="home-title">Cladding.<br/>Construction.<br/><span>Smart Solutions.</span></h1><p>Practical construction experience, exterior finishing and bespoke property improvements.</p><div className="cladding-hero-actions"><a className="primary-call" href={business.telephone}><span>Call to discuss work<small>{business.phone}</small></span><Arrow diagonal/></a><a href="#services">Explore services<Arrow/></a></div></div>
    <div className="cladding-hero-bottom"><span>THE EXTERIOR, CONSIDERED.</span><p>Upper wall digitally visualised.<br/>Based on an original site photograph.</p></div>
  </section>
}
