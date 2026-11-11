import { useRef, useState } from 'react'
import type { PointerEvent } from 'react'
import { asset } from '../data/portfolio'
import { comparisonAt, comparisonClip } from '../lib/patioComparison'

export default function PatioComparison() {
  const [split, setSplit] = useState(50)
  const pointer = useRef<number | null>(null)
  const range = useRef<HTMLInputElement>(null)
  function update(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    setSplit(comparisonAt(event.clientX, rect.left, rect.width))
  }
  function release(event: PointerEvent<HTMLDivElement>) {
    pointer.current = null
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId)
  }
  return <section className="patio-section section-pad" id="patio" tabIndex={-1} aria-labelledby="patio-title">
    <div className="patio-copy">
      <span className="eyebrow">OUTDOOR POSSIBILITIES</span>
      <h2 id="patio-title">A fresh take<br />on outdoor living.</h2>
      <p>See how an enclosure and entertainment layout could change this patio.</p>
      <p className="patio-instruction">Move the handle to take a look.</p>
    </div>
    <figure className="patio-comparison" aria-label="Patio enclosure comparison">
      <div className="comparison-stage"
        onPointerDown={event => { if (!event.isPrimary || event.button !== 0) return; pointer.current = event.pointerId; range.current?.focus({ preventScroll: true }); event.currentTarget.setPointerCapture(event.pointerId); update(event) }}
        onPointerMove={event => { if (pointer.current === event.pointerId) update(event) }}
        onPointerUp={release} onPointerCancel={release} onLostPointerCapture={() => { pointer.current = null }}>
        <img src={asset('images/concept/patio-existing-800.webp')} srcSet={`${asset('images/concept/patio-existing-480.webp')} 480w, ${asset('images/concept/patio-existing-800.webp')} 800w, ${asset('images/concept/patio-existing-1080.webp')} 1080w`} sizes="(max-width: 760px) 100vw, 63vw" alt="Supplied reference photograph of the existing open patio, roof, table and garden" width="1080" height="1440" loading="lazy" draggable="false" />
        <img className="comparison-after" src={asset('images/concept/patio-proposed-v2-800.webp')} srcSet={`${asset('images/concept/patio-proposed-v2-480.webp')} 480w, ${asset('images/concept/patio-proposed-v2-800.webp')} 800w, ${asset('images/concept/patio-proposed-v2-1080.webp')} 1080w`} sizes="(max-width: 760px) 100vw, 63vw" alt="Rendering of the same patio with an enclosure and entertainment wall" width="1080" height="1440" loading="lazy" draggable="false" style={{ clipPath: comparisonClip(split) }} />
        <span className="comparison-divider" style={{ left: split + '%' }} aria-hidden="true"><span>↔</span></span>
        <label className="sr-only" htmlFor="patio-comparison">Compare existing patio and enclosure option</label>
        <input className="sr-only" ref={range} id="patio-comparison" type="range" min="0" max="100" step="1" value={split} aria-describedby="patio-disclosure" aria-valuetext={`${split}% existing patio, ${100 - split}% enclosure option`} onChange={event => setSplit(Number(event.target.value))} />
      </div>
      <div className="comparison-labels" aria-hidden="true"><span>Existing patio</span><span>Enclosure option</span></div>
      <figcaption id="patio-disclosure">Patio rendering based on a supplied reference. The enclosure has not been built by Brindle.</figcaption>
    </figure>
  </section>
}
