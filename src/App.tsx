import { useEffect, useState } from 'react'
import Header from './components/Header'
import ConstructionExperience from './components/ConstructionExperience'
import Portfolio from './components/Portfolio'
import PatioConcept from './components/PatioConcept'
import Capabilities from './components/Capabilities'
import { Arrow, Brand, Phone } from './components/Icons'
import { business } from './config/business'
import { asset } from './data/portfolio'

export default function App() {
  const [copied, setCopied] = useState(false)
  const [copyFailed, setCopyFailed] = useState(false)
  useEffect(() => { if (copied) { const timer = window.setTimeout(() => setCopied(false), 3000); return () => clearTimeout(timer) } }, [copied])
  async function copyNumber() {
    try { await navigator.clipboard.writeText(business.phone); setCopied(true); setCopyFailed(false) } catch { setCopyFailed(true) }
  }
  return <>
    <a className="skip-link" href="#work">Skip to portfolio</a>
    <Header />
    <main>
      <ConstructionExperience />
      <Portfolio />
      <section className="about-section section-pad" id="about">
        <div className="section-topline reveal"><span className="eyebrow">02 / SERVICES &amp; APPROACH</span><span className="eyebrow subtle">INDEPENDENT. HANDS-ON. BRINDLE.</span></div>
        <div className="about-intro reveal"><h2>Experience you can<br /><span className="muted">build on.</span></h2><div><p className="lead">Over 20 years on the tools. Practical support and care for the details.</p><p>Independent construction labour and property maintenance, with experience working alongside a carpenter father.</p></div></div>
        <div className="services">{business.services.map(service => <article className="service-row reveal" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><div><p>{service.text}</p><span className="service-tags">{service.tags}</span></div><Arrow diagonal /></article>)}</div>
        <p className="scope-note reveal">Project support within the agreed scope. Structural, fire-rated, electrical and other regulated work requires the appropriate qualified or registered trades and project oversight.</p>
      </section>
      <PatioConcept />
      <Capabilities />
      <section className="experience-section section-pad" id="experience">
        <div className="section-topline reveal"><span className="eyebrow">05 / EXPERIENCE &amp; TRAINING</span><span className="eyebrow subtle">PRACTICAL KNOWLEDGE. ON-SITE AWARENESS.</span></div>
        <div className="experience-layout"><div className="experience-image reveal"><img src={asset('images/1000020943-960.webp')} alt="Owner-supplied photograph showing steel studs and timber noggins from Brindle’s genuine construction support project" width="1200" height="1600" loading="lazy" decoding="async" /><span className="image-label">THE KNOW-HOW BEHIND THE WORK.</span></div><div className="experience-copy reveal"><h2>Built through<br /><span className="muted">doing.</span></h2><p>Two decades of practical experience, backed by construction and workplace safety training.</p><dl className="training-list">{business.training.map(([code, text]) => <div key={code}><dt>{text}</dt><dd>{code}</dd></div>)}</dl><p className="training-note">Owner-supplied training records. Training does not confer a trade licence or independent authority to certify regulated work.</p><details><summary>Engineering education &amp; future ideas<span>+</span></summary><p>Electrical/electronic engineering education informs an interest in outdoor AV, LED and electronics concepts. Electrical licensing is not claimed. Any regulated installation would require an appropriately licensed trade.</p></details></div></div>
      </section>
      <section className="contact-section section-pad" id="contact">
        <div className="section-topline reveal"><span className="eyebrow">06 / LET’S GET TO WORK</span><span className="eyebrow"><i className="status-dot" />{business.serviceArea}</span></div>
        <div className="contact-heading reveal"><h2>Your next project.<br /><span>A good conversation.</span></h2><Arrow diagonal /></div>
        <div className="contact-bottom reveal"><div><p>Tell me what you’re working on.<br />We’ll talk through the scope, timing and fit.</p><a className="contact-number" href={business.telephone} aria-label={`Call Brindle on ${business.phone}`}>{business.phone}<Arrow diagonal /></a><div className="copy-row"><button onClick={copyNumber}>{copied ? 'Number copied ✓' : 'Copy phone number'}</button><span role="status">{copyFailed ? `Please select and copy ${business.phone}.` : copied ? 'Ready to paste.' : ''}</span></div></div><div className="availability"><span className="eyebrow">RATES &amp; AVAILABILITY</span><h3>{business.rate}</h3><p>{business.availability} Independent contracting arrangements are agreed for each scope. Employment or labour-hire arrangements are discussed separately.</p><a href={business.telephone}>Call {business.phone}<Arrow /></a></div></div>
      </section>
    </main>
    <footer className="site-footer"><a href="#top" aria-label="Brindle home"><Brand /></a><p>Practical experience.<br />Considered work.</p><div><span>© {new Date().getFullYear()} Brindle Property Maintenance</span><a href="#top">Back to the top ↑</a></div></footer>
    <a className="mobile-call-bar" href={business.telephone}><Phone /><span>LET’S TALK<strong>{business.phone}</strong></span><Arrow diagonal /></a>
  </>
}
