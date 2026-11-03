import { useEffect, useRef, useState } from 'react'
import { asset, portfolio } from '../data/portfolio'
import { Arrow } from './Icons'

export default function Portfolio() {
  const [selected, setSelected] = useState<number | null>(null)
  return <section id="work" className="portfolio-section section-pad">
    <div className="section-topline"><span className="eyebrow">01 / MY PORTFOLIO</span><span className="eyebrow subtle">ONE PROJECT. SIX GENUINE PHOTOGRAPHS.</span></div>
    <div className="portfolio-heading"><div><span className="project-type">RESIDENTIAL CONSTRUCTION SUPPORT</span><h2>Framing. Cladding.<br /><span className="muted">The details in between.</span></h2></div><p>Steel framing, timber noggins, wrap, clips, battens and external cladding. These are photographs of actual hands-on work on a residential project.</p></div>
    <div className="photo-grid">{portfolio.map((photo, i) => <figure className={`project-photo photo-${i}`} key={photo.id}>
      <button className="photo-button" onClick={() => setSelected(i)} aria-label={`Open photograph ${i + 1} of 6: ${photo.category.toLowerCase()}`}>
        <img src={asset(`images/${photo.id}-960.webp`)} srcSet={`${asset(`images/${photo.id}-480.webp`)} 480w, ${asset(`images/${photo.id}-960.webp`)} 960w, ${asset(`images/${photo.id}-1600.webp`)} 1600w`} sizes="(max-width: 599px) 100vw, (max-width: 1000px) 50vw, 33vw" alt={photo.alt} loading={i < 3 ? 'eager' : 'lazy'} decoding="async" width="1200" height="1600" />
        <span className="photo-overlay"><span>VIEW PHOTOGRAPH</span><span className="photo-plus">+</span></span>
        <span className="photo-index">0{i + 1} / 06</span>
      </button>
      <figcaption><span>{photo.category}</span><h3>{photo.title}</h3><p>{photo.caption}</p></figcaption>
    </figure>)}</div>
    <div className="portfolio-footnote"><div><p className="eyebrow">RESIDENTIAL FRAMING &amp; EXTERNAL CLADDING — CONSTRUCTION SUPPORT</p><p>Hands-on work on a fire-rated residential building using customer-supplied materials and instructions. Design, certification and project management are not claimed.</p></div><p>All six photographs supplied by the owner, with customer permission for portfolio use.</p></div>
    {selected !== null && <Lightbox initial={selected} onClose={() => setSelected(null)} />}
  </section>
}

function Lightbox({ initial, onClose }: { initial: number; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const [index, setIndex] = useState(initial)
  const [zoom, setZoom] = useState(false)
  const photo = portfolio[index]
  useEffect(() => {
    const el = dialog.current
    const opener = document.activeElement as HTMLElement | null
    const oldOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    el?.showModal()
    return () => { el?.close(); document.body.style.overflow = oldOverflow; if (opener?.isConnected) opener.focus({ preventScroll: true }) }
  }, [])
  function move(direction: number) { setIndex(i => (i + direction + portfolio.length) % portfolio.length); setZoom(false) }
  return <dialog ref={dialog} className="lightbox" aria-labelledby="photo-title" aria-describedby="photo-caption" onCancel={onClose} onClick={e => { if (e.target === e.currentTarget) onClose() }} onKeyDown={e => { if (e.key === 'ArrowRight') { e.preventDefault(); move(1) }; if (e.key === 'ArrowLeft') { e.preventDefault(); move(-1) } }}>
    <div className="lightbox-shell">
      <div className="lightbox-top"><span className="eyebrow">BRINDLE / GENUINE PROJECT PHOTOGRAPH</span><button className="close-button" onClick={onClose} aria-label="Close photograph">Close <span>×</span></button></div>
      <div className={`lightbox-image ${zoom ? 'is-zoomed' : ''}`}><img src={asset(`images/${photo.id}-1600.webp`)} alt={photo.alt} width="1200" height="1600" /></div>
      <div className="lightbox-bottom"><div><span className="eyebrow red">0{index + 1} / 06 — {photo.category}</span><h3 id="photo-title">{photo.title}</h3><p id="photo-caption">{photo.caption}</p></div><div className="lightbox-controls"><button onClick={() => setZoom(!zoom)} aria-pressed={zoom}>{zoom ? 'Fit image' : 'Zoom image'}</button><button aria-label="Previous photograph" onClick={() => move(-1)}><Arrow className="reverse" /></button><button aria-label="Next photograph" onClick={() => move(1)}><Arrow /></button></div></div>
    </div>
  </dialog>
}
