import { useRef, useState } from 'react'
import type { PointerEvent } from 'react'
import { asset } from '../data/portfolio'
import { patioComparison } from '../data/patio'
import { comparisonAt, comparisonClip } from '../lib/patioComparison'

function sources(name: string) { return [480, 800, 1080].map(width => `${asset(`images/concept/${name}-${width}.webp`)} ${width}w`).join(', ') }

export default function PatioComparison() {
  const [split, setSplit] = useState(50)
  const dragging = useRef(false)
  function update(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    setSplit(comparisonAt(event.clientX, rect.left, rect.width))
  }
  return <section className="outdoor-section section-pad" id="concept" aria-labelledby="outdoor-title">
    <div className="section-topline"><span className="eyebrow">03 / OUTDOOR TRANSFORMATION</span><span className="outdoor-identifier">Design Visualisation</span></div>
    <div className="outdoor-heading"><h2 id="outdoor-title">More from<br /><span>your outdoor space.</span></h2><p>Compare the existing patio with a proposed enclosure and entertainment finish.</p></div>
    <figure className="outdoor-comparison" aria-label={patioComparison.label}>
      <div className="outdoor-image-stage" onPointerDown={event => { if (!event.isPrimary || event.button !== 0) return; dragging.current = true; event.currentTarget.setPointerCapture(event.pointerId); update(event) }} onPointerMove={event => { if (dragging.current) update(event) }} onPointerUp={() => { dragging.current = false }} onPointerCancel={() => { dragging.current = false }}>
        <img src={asset('images/concept/patio-existing-800.webp')} srcSet={sources(patioComparison.before.name)} sizes="(max-width: 760px) 90vw, 80vw" alt={patioComparison.before.alt} width="1080" height="1440" loading="lazy" draggable="false" />
        <img className="outdoor-proposed" src={asset(`images/concept/${patioComparison.after.name}-800.webp`)} srcSet={sources(patioComparison.after.name)} sizes="(max-width: 760px) 90vw, 80vw" alt={patioComparison.after.alt} width="1080" height="1440" loading="lazy" draggable="false" style={{ clipPath: comparisonClip(split) }} />
        <span className="outdoor-photo-label before-label" style={{ opacity: split < 12 ? 0 : 1 }}>Existing patio</span><span className="outdoor-photo-label after-label" style={{ opacity: split > 88 ? 0 : 1 }}>Proposed finish</span>
        <span className="outdoor-divider" style={{ left: `${split}%` }} aria-hidden="true"><span>↔</span></span>
      </div>
      <div className="outdoor-range"><label className="sr-only" htmlFor="patio-comparison">Compare existing patio and proposed design</label><input id="patio-comparison" type="range" min="0" max="100" value={split} aria-valuetext={`${split}% existing patio, ${100 - split}% proposed design`} onChange={event => setSplit(Number(event.target.value))} /><div aria-hidden="true"><span>Show proposed</span><span>Drag to compare</span><span>Show existing</span></div></div>
      <figcaption>{patioComparison.label}. Unbuilt proposal; the existing patio and lighting are not Brindle’s completed work.</figcaption>
    </figure>
  </section>
}
