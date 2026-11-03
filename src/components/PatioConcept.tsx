import { useEffect, useRef, useState } from 'react'
import { Arrow } from './Icons'
import { business } from '../config/business'
import { asset } from '../data/portfolio'
import { patioImages, patioSourceIndex } from '../data/patio'

type View = 'existing' | 'proposed' | 'compare'

function sources(name: string) {
  return [480, 800, 1080].map(width => `${asset(`images/concept/${name}-${width}.webp`)} ${width}w`).join(', ')
}

export default function PatioConcept() {
  const [view, setView] = useState<View>('proposed')
  const [reveal, setReveal] = useState(50)
  const [selected, setSelected] = useState<number | null>(null)
  const proposed = patioImages[0]
  const existing = patioImages[patioSourceIndex]
  const modes = [['existing', 'Existing photo'], ['proposed', 'Proposed concept'], ['compare', 'Compare']] as const
  return <section className="patio-section section-pad" id="concept" aria-labelledby="patio-title">
    <div className="section-topline"><span className="eyebrow">03 / A VISION FOR THE PATIO</span><span className="patio-badge">UNBUILT CONCEPT</span></div>
    <div className="patio-hero">
      <div className="patio-copy">
        <p className="eyebrow">PROPOSED PERTH PATIO ENCLOSURE — CONCEPT ONLY</p>
        <h2 id="patio-title">Enclosed patio.<br /><span>Outdoor living.</span></h2>
        <p className="patio-intro">A new possibility for the real space. Pale horizontal cladding, a charcoal feature wall and a warm outdoor entertainment setting.</p>
        <p>This photo-based visualisation uses the supplied patio as its starting point: the existing roof, posts, concrete slab and dining area.</p>
        <div className="patio-materials"><span>STUD WALLS &amp; CLADDING</span><span>FEATURE WALL</span><span>AV &amp; LIGHTING IDEAS</span></div>
        <a className="text-call" href={business.telephone}><span>Talk through a concept<strong>{business.phone}</strong></span><Arrow diagonal /></a>
        <p className="patio-truth">CONCEPT VISUALISATION — NOT CONSTRUCTED</p>
        <p className="patio-existing-note">Existing patio and lighting are not Brindle’s completed work. New walls, finishes, AV and accent lighting shown in the concept are proposed only.</p>
      </div>
      <figure className="patio-viewer">
        <div className="patio-view-controls" role="group" aria-label="Patio photo and concept views">{modes.map(([mode, label]) => <button key={mode} aria-pressed={view === mode} onClick={() => setView(mode)}>{label}</button>)}</div>
        <div className={`patio-image-stage patio-view-${view}`}>
          {view !== 'proposed' && <img className="patio-source-image" src={asset(`images/concept/${existing.name}-800.webp`)} srcSet={sources(existing.name)} sizes="(max-width: 760px) 100vw, 55vw" alt={existing.alt} width="1080" height="1440" loading="lazy" />}
          {view !== 'existing' && <img className="patio-proposed-image" src={asset(`images/concept/${proposed.name}-800.webp`)} srcSet={sources(proposed.name)} sizes="(max-width: 760px) 100vw, 55vw" alt={proposed.alt} width="1080" height="1440" loading="lazy" style={view === 'compare' ? { clipPath: `inset(0 0 0 ${100 - reveal}%)` } : undefined} />}
          {view === 'compare' && <div className="patio-divider" style={{ left: `${100 - reveal}%` }} aria-hidden="true"><span>↔</span></div>}
          <span className="patio-image-label">{view === 'existing' ? 'EXISTING PATIO — REFERENCE PHOTO' : view === 'compare' ? 'EXISTING PHOTO / AI CONCEPT' : 'AI CONCEPT — NOT CONSTRUCTED'}</span>
          <button className="patio-enlarge" onClick={() => setSelected(view === 'existing' ? patioSourceIndex : 0)} aria-label={view === 'existing' ? 'Enlarge the existing patio photograph' : 'Enlarge the proposed patio concept'}>View full image<Arrow diagonal /></button>
        </div>
        {view === 'compare' && <div className="patio-slider"><div><span>EXISTING PHOTO</span><span>PROPOSED CONCEPT</span></div><input aria-label="Amount of proposed patio concept shown" aria-valuetext={`${reveal}% of the proposed concept shown`} type="range" min="0" max="100" value={reveal} onChange={event => setReveal(Number(event.target.value))} /><p>Move the slider to compare the real patio with the proposed finish. The visualisation is indicative.</p></div>}
        <figcaption aria-live="polite">{view === 'existing' ? 'The actual source photograph. The patio is open to the garden; the existing festoon lights are already present.' : view === 'compare' ? 'Same patio, two views: the actual photograph and an AI impression of the unbuilt enclosure.' : 'AI photo-based impression of the proposal, guided by the real patio photos and your supplied design reference.'}</figcaption>
      </figure>
    </div>
    <div className="patio-reference-heading"><div><p className="eyebrow">THE REAL STARTING POINT</p><h3>Five views of the existing patio.</h3></div><p>Actual supplied photographs. Reference only — separate from the completed construction portfolio above.</p></div>
    <div className="patio-reference-grid">{patioImages.slice(1).map((photo, i) => <figure key={photo.name}><button onClick={() => setSelected(i + 1)} aria-label={`Open existing patio reference photograph ${i + 1} of 5`}><img src={asset(`images/concept/${photo.name}-480.webp`)} srcSet={sources(photo.name)} sizes="(max-width: 599px) 50vw, (max-width: 1000px) 33vw, 20vw" alt={photo.alt} width="1080" height="1440" loading="lazy" /><span>0{i + 1} / REFERENCE PHOTO</span><span className="patio-reference-plus" aria-hidden="true">+</span></button><figcaption>{photo.title.replace('Existing patio / ', '')}</figcaption></figure>)}</div>
    <div className="patio-scope"><div><span>01 / PROPOSED ENCLOSURE</span><h3>Framing, cladding &amp; trim</h3><p>Explore stud-wall infill between the existing posts, with traditional cladding and neat trims.</p></div><div><span>02 / PROPOSED FEATURE</span><h3>An entertainment wall</h3><p>A charcoal slatted feature with possible TV, soundbar and cable-management options.</p></div><div><span>03 / PROPOSED ATMOSPHERE</span><h3>Warm lighting ideas</h3><p>Potential accent lighting around the feature wall, with the existing festoons retained in the visual.</p></div></div>
    <p className="patio-scope-note">This is a design exploration, not a record of completed work or a construction plan. Site-specific details, permissions and appropriate qualified trades would be needed. Electrical licensing is not claimed; regulated electrical work would require a licensed trade.</p>
    {selected !== null && <PatioLightbox initial={selected} onClose={() => setSelected(null)} />}
  </section>
}

function PatioLightbox({ initial, onClose }: { initial: number; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const [index, setIndex] = useState(initial)
  const [zoom, setZoom] = useState(false)
  const photo = patioImages[index]
  useEffect(() => {
    const element = dialog.current
    const opener = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    element?.showModal()
    return () => { element?.close(); document.body.style.overflow = previousOverflow; if (opener?.isConnected) opener.focus({ preventScroll: true }) }
  }, [])
  function move(direction: number) { setIndex(value => (value + direction + patioImages.length) % patioImages.length); setZoom(false) }
  return <dialog ref={dialog} className="lightbox patio-lightbox" aria-labelledby="patio-photo-title" aria-describedby="patio-photo-caption" onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) onClose() }} onKeyDown={event => { if (event.key === 'ArrowRight') { event.preventDefault(); move(1) }; if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1) } }}>
    <div className="lightbox-shell"><div className="lightbox-top"><span className="eyebrow">{photo.label}</span><button className="close-button" aria-label="Close patio image" onClick={onClose}>Close <span>×</span></button></div><div className={`lightbox-image ${zoom ? 'is-zoomed' : ''}`}><img src={asset(`images/concept/${photo.name}-1080.webp`)} alt={photo.alt} width="1080" height="1440" /></div><div className="lightbox-bottom"><div><span className="eyebrow red">{photo.kind === 'concept' ? 'AI CONCEPT / NOT CONSTRUCTED' : 'ACTUAL EXISTING PATIO / REFERENCE ONLY'}</span><h3 id="patio-photo-title">{photo.title}</h3><p id="patio-photo-caption">{photo.caption}</p></div><div className="lightbox-controls"><button aria-pressed={zoom} onClick={() => setZoom(!zoom)}>{zoom ? 'Fit patio image' : 'Zoom patio image'}</button><button aria-label="Previous patio image" onClick={() => move(-1)}><Arrow className="reverse" /></button><button aria-label="Next patio image" onClick={() => move(1)}><Arrow /></button></div></div></div>
  </dialog>
}
