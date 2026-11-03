import { asset } from '../data/portfolio'
import { capabilityImages } from '../data/capabilities'

export default function Capabilities() {
  return <section className="capabilities-section section-pad" id="inspiration" aria-labelledby="capabilities-title">
    <div className="section-topline"><span className="eyebrow">04 / IDEAS &amp; POSSIBILITIES</span><span className="eyebrow subtle">ILLUSTRATIVE EXAMPLES</span></div>
    <div className="capabilities-heading"><h2 id="capabilities-title">Design Inspiration<br />&amp; Capabilities</h2><div><p>Ideas for feature walls, finishes, concealed AV and plug-in low-voltage lighting.</p><p className="ai-disclosure">AI-generated illustrative examples — not completed Brindle projects.</p></div></div>
    <div className="capabilities-grid">{capabilityImages.map(image => <figure key={image.id}><div className="capability-image"><img src={asset(`images/inspiration/${image.id}-960.webp`)} srcSet={[480, 960, 1440].map(width => `${asset(`images/inspiration/${image.id}-${width}.webp`)} ${width}w`).join(', ')} sizes="(max-width: 760px) 90vw, 32vw" alt={image.alt} width="1536" height="1024" loading="lazy" /><span>AI-GENERATED / INSPIRATION</span></div><figcaption><h3>{image.title}</h3><p>{image.caption}</p></figcaption></figure>)}</div>
    <p className="capabilities-note">Design thinking and hands-on assistance within an agreed scope. Fixed electrical and regulated building work require appropriately qualified trades.</p>
  </section>
}
