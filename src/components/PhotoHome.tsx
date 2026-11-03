import { business } from '../config/business'
import { asset, portfolio } from '../data/portfolio'
import { Arrow } from './Icons'

export default function PhotoHome() {
  const photo = portfolio[0]
  return <section className="photo-home" id="top" aria-labelledby="home-title">
    <div className="photo-home-copy">
      <p className="eyebrow red"><span className="status-dot" />{business.serviceArea}</p>
      <h1 id="home-title">Experienced<br className="desktop-break" /> hands.<br /><span>Real work.</span></h1>
      <p className="home-intro">Independent construction labour and property maintenance. Over 20 years of practical experience, with the work to show for it.</p>
      <div className="home-actions"><a className="work-link" href="#work">View my portfolio<Arrow diagonal /></a><a className="home-call" href={business.telephone}><span>Let’s talk about your project</span><strong>{business.phone}</strong></a></div>
      <div className="home-proof"><span>FRAMING</span><span>CLADDING</span><span>PROJECT SUPPORT</span></div>
    </div>
    <a className="home-project" href="#work" aria-label="View the genuine residential construction support portfolio">
      <img src={asset(`images/${photo.id}-960.webp`)} srcSet={`${asset(`images/${photo.id}-480.webp`)} 480w, ${asset(`images/${photo.id}-960.webp`)} 960w, ${asset(`images/${photo.id}-1600.webp`)} 1600w`} sizes="(max-width: 760px) 100vw, 54vw" alt={photo.alt} width="1200" height="1600" fetchPriority="high" loading="eager" />
      <span className="home-photo-label">GENUINE PROJECT PHOTOGRAPH</span>
      <span className="home-photo-caption"><span><small>RESIDENTIAL CONSTRUCTION SUPPORT</small><strong>From frame to finish.</strong><span>Explore all six photographs</span></span><Arrow diagonal /></span>
    </a>
    <div className="home-bottom"><span>BRINDLE PROPERTY MAINTENANCE</span><a href="#work">THE WORK, UP CLOSE<Arrow /></a></div>
  </section>
}
