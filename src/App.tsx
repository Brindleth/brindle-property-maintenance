import { useEffect, useState } from 'react'
import Header from './components/Header'
import { navigation } from './data/navigation'
import PhotoHero from './components/PhotoHero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import PatioComparison from './components/PatioComparison'
import { Arrow, Brand, Phone } from './components/Icons'
import { business } from './config/business'

function openDetails(id: string) {
  const details = document.getElementById(id) as HTMLDetailsElement | null
  if (details) details.open = true
}

export default function App() {
  const [copied, setCopied] = useState(false)
  const [copyFailed, setCopyFailed] = useState(false)
  useEffect(() => {
    if (!copied) return
    const timer = window.setTimeout(() => setCopied(false), 3000)
    return () => clearTimeout(timer)
  }, [copied])
  useEffect(() => {
    const aliases: Record<string, string> = { '#construction': '#labouring', '#concept': '#patio', '#fitouts': '#installations', '#smart-home': '#installations', '#experience': '#about', '#featured': '#work', '#why': '#about' }
    const migrate = () => { const target = aliases[window.location.hash]; if (target) document.querySelector(target)?.scrollIntoView() }
    migrate()
    window.addEventListener('hashchange', migrate)
    return () => window.removeEventListener('hashchange', migrate)
  }, [])
  async function copyNumber() {
    try { await navigator.clipboard.writeText(business.phone); setCopied(true); setCopyFailed(false) }
    catch { setCopyFailed(true) }
  }

  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Header />
    <main id="main-content" tabIndex={-1}>
      <PhotoHero />
      <Services openImageInfo={() => openDetails('image-information')} />
      <PatioComparison />

      <section className="about-work section-pad" id="about" tabIndex={-1} aria-labelledby="about-title">
        <div className="about-intro">
          <div><span className="eyebrow">ABOUT BRINDLE</span><h2 id="about-title">Practical experience.<br />Straightforward service.</h2></div>
          <div><p>Independent and hands-on, with over 20 years of practical labouring experience. From a small repair to project support, you deal directly with the person doing the work.</p>
            <details className="training-details"><summary>Experience &amp; training<span aria-hidden="true">+</span></summary><p>Practical experience includes work alongside a carpenter father.</p><dl>{business.training.map(([code, text]) => <div key={code}><dt>{text}</dt><dd>{code}</dd></div>)}</dl><p>Owner-supplied training records; these are not trade licences.</p></details>
          </div>
        </div>
        <Portfolio />
      </section>

      <section className="process-section section-pad" id="process" tabIndex={-1} aria-labelledby="process-title">
        <h2 id="process-title">Simple from start to finish.</h2>
        <ol className="process-grid">
          <li><span>01</span><div><h3>Get in touch.</h3><p>Tell Brindle what needs doing.</p></div></li>
          <li><span>02</span><div><h3>Site visit &amp; quote.</h3><p>Inspect the job and agree the scope.</p></div></li>
          <li><span>03</span><div><h3>Get the job done.</h3><p>Agree a time and get to work.</p></div></li>
        </ol>
      </section>

      <section className="contact-section section-pad" id="contact" tabIndex={-1} aria-labelledby="contact-title">
        <div><span className="eyebrow">MELBOURNE &amp; SURROUNDING AREAS</span><h2 id="contact-title">Have a job in mind?<br />Let’s talk.</h2></div>
        <div className="contact-call">
          <a className="contact-number" href={business.telephone} aria-label={`Call Brindle on ${business.phone}`}>{business.phone}<Arrow diagonal /></a>
          <a className="button button-white" href={business.telephone}><Phone />CALL FOR A QUOTE<Arrow diagonal /></a>
          <div className="copy-row"><button onClick={copyNumber}>{copied ? 'Number copied ✓' : 'Copy number'}</button><span role="status">{copyFailed ? `Please select and copy ${business.phone}.` : copied ? 'Ready to paste.' : ''}</span></div>
        </div>
        <p className="contact-note">Quotes follow an in-person inspection. Rates, timing and any call-out or travel charges are discussed before acceptance. Suitable Adelaide enquiries considered, subject to permitted scope and travel arrangements.</p>
      </section>
    </main>

    <footer className="site-footer">
      <div className="footer-main"><a href="#top" aria-label={`${business.fullName} home`}><Brand /></a><nav aria-label="Footer navigation">{navigation.map(([href, text]) => <a key={href} href={href}>{text}</a>)}</nav><div className="footer-contact"><a href={business.telephone}>{business.phone}<Arrow diagonal /></a><p>{business.serviceArea}</p></div></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Brindle.</span><div><a href="#service-scope" onClick={() => openDetails('service-scope')}>Service scope &amp; terms</a><a href="#privacy" onClick={() => openDetails('privacy')}>Privacy</a><a href="#image-information" onClick={() => openDetails('image-information')}>Image details</a><a href="#top">Back to top ↑</a></div></div>
      <details className="legal-details" id="service-scope"><summary>Service scope &amp; terms<span aria-hidden="true">+</span></summary><p>Work is assessed for its task, location, total project value, required approvals and lawful working arrangement. Regulated electrical, plumbing, structural building, waterproofing and other work requiring licences or registrations Brindle does not hold are excluded. Labouring support does not remove licensing requirements. Adelaide work is subject to South Australian scope and licensing checks before acceptance.</p><p>A quotation follows an in-person inspection. Scope, price, timing and any applicable call-out or travel charges must be disclosed and agreed before acceptance. Rates are discussed by phone; this website does not accept bookings or payments.</p></details>
      <details className="legal-details" id="privacy"><summary>Privacy<span aria-hidden="true">+</span></summary><p>This website has no enquiry form, analytics, advertising trackers or application cookies. Fonts and photographs are served locally. GitHub Pages may process technical access information under its <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">privacy statement</a>. Information you provide by phone is used to discuss and arrange your requested work. For a privacy query, call {business.phone}.</p></details>
      <details className="legal-details" id="image-information"><summary>About the images<span aria-hidden="true">+</span></summary><p>The maintenance, joinery, interior-improvement and custom-installation service images are AI-created examples of work in progress. The hero, labouring and exterior service images, and site gallery use original Brindle construction-support photographs, including unfinished stages. Those photographs record hands-on assistance using supplied materials and instructions; whole-project delivery, design and certification are not claimed.</p><p>The patio comparison pairs a supplied reference with a rendering of an unbuilt enclosure. Neither the enclosure nor the existing patio and lighting are claimed as completed Brindle work.</p></details>
    </footer>
  </>
}
