import { business } from '../config/business'
import { asset } from '../data/portfolio'
import { Arrow } from './Icons'

export default function PhotoHero() {
  return <section className="hero" id="top" tabIndex={-1} aria-labelledby="home-title">
    <div className="hero-copy">
      <p className="eyebrow"><span className="red-line" />MELBOURNE &amp; SURROUNDING AREAS</p>
      <h1 id="home-title"><span>Property maintenance.</span>{' '}<span>Skilled hands.</span>{' '}<span className="hero-last">Quality results.</span></h1>
      <p className="hero-description">Repairs, timberwork, installations and skilled labouring. Practical help for your home, property or next project.</p>
      <div className="hero-actions"><a className="button button-red" href={business.telephone}>GET A QUOTE<Arrow diagonal /></a><a className="button button-outline" href="#services">VIEW SERVICES<Arrow /></a></div>
      <span className="hero-note">Independent. Hands-on. Straightforward.</span>
    </div>
    <figure className="hero-figure">
      <img className="hero-photo" src={asset('images/1000020958-960.webp')} srcSet={`${asset('images/1000020958-480.webp')} 480w, ${asset('images/1000020958-960.webp')} 960w, ${asset('images/1000020958-1600.webp')} 1152w`} sizes="(max-width: 760px) 100vw, 45vw" alt="Brindle site photograph of cladding and white window trim, with upper wall preparation still visible" width="1152" height="1536" fetchPriority="high" />
    </figure>
  </section>
}
