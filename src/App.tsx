import { useEffect, useState } from 'react'
import Header from './components/Header'
import ConstructionExperience from './components/ConstructionExperience'
import Portfolio from './components/Portfolio'
import PatioComparison from './components/PatioConcept'
import ServicesShowcase from './components/Capabilities'
import { Arrow, Brand, Phone } from './components/Icons'
import { business } from './config/business'

export default function App() {
  const [copied, setCopied] = useState(false)
  const [copyFailed, setCopyFailed] = useState(false)
  useEffect(() => { if (copied) { const timer = window.setTimeout(() => setCopied(false), 3000); return () => clearTimeout(timer) } }, [copied])
  async function copyNumber() {
    try { await navigator.clipboard.writeText(business.phone); setCopied(true); setCopyFailed(false) } catch { setCopyFailed(true) }
  }
  return <>
    <a className="skip-link" href="#services">Skip to services</a>
    <Header />
    <main>
      <ConstructionExperience />
      <ServicesShowcase />
      <Portfolio />
      <PatioComparison />
      <section className="experience-section experience-balanced section-pad" id="experience">
        <div className="section-topline"><span className="eyebrow">04 / EXPERIENCE &amp; TRAINING</span><span className="eyebrow subtle">PRACTICAL KNOWLEDGE. ON-SITE AWARENESS.</span></div>
        <div className="experience-layout"><div className="experience-intro"><span className="experience-years">20<span>+</span></span><h2>Experienced<br /><span className="muted">across the job.</span></h2><p>Over 20 years of practical labouring experience, including work alongside a carpenter father. From preparation and framing support to maintenance and finishing details.</p></div><div className="experience-copy"><dl className="training-list">{business.training.map(([code, text]) => <div key={code}><dt>{text}</dt><dd>{code}</dd></div>)}</dl><p className="training-note">Owner-supplied training records. Training is not a trade licence or certification authority.</p><details><summary>Engineering background<span>+</span></summary><p>Electrical/electronic engineering education informs practical AV layouts and plug-in low-voltage features. Fixed electrical work requires a licensed trade.</p></details></div></div>
      </section>
      <section className="contact-section section-pad" id="contact">
        <div className="section-topline"><span className="eyebrow">05 / LET’S GET TO WORK</span><span className="eyebrow"><i className="status-dot" />{business.serviceArea}</span></div>
        <div className="contact-heading"><h2>Your next project.<br /><span>A good conversation.</span></h2><Arrow diagonal /></div>
        <div className="contact-bottom"><div><p>Tell me what you’re working on.<br />We’ll talk through the scope and timing.</p><a className="contact-number" href={business.telephone} aria-label={`Call Brindle on ${business.phone}`}>{business.phone}<Arrow diagonal /></a><div className="copy-row"><button onClick={copyNumber}>{copied ? 'Number copied ✓' : 'Copy phone number'}</button><span role="status">{copyFailed ? `Please select and copy ${business.phone}.` : copied ? 'Ready to paste.' : ''}</span></div></div><div className="availability"><span className="eyebrow">RATES &amp; AVAILABILITY</span><h3>{business.rate}</h3><p>{business.availability}</p><a href={business.telephone}>Call {business.phone}<Arrow /></a></div></div>
      </section>
    </main>
    <footer className="site-footer"><a href="#top" aria-label="Brindle home"><Brand /></a><p>Practical experience.<br />Considered work.</p><div><span>© {new Date().getFullYear()} Brindle Property Maintenance</span><a href="#top">Back to the top ↑</a></div></footer>
    <a className="mobile-call-bar" href={business.telephone}><Phone /><span>LET’S TALK<strong>{business.phone}</strong></span><Arrow diagonal /></a>
  </>
}
