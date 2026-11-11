import { useEffect, useRef, useState } from 'react'
import { asset, portfolio } from '../data/portfolio'
import { Arrow } from './Icons'

const previews = [3, 2, 4]
const titles = ['On-site preparation', 'Fitting support', 'Finishing details']

export default function Portfolio() {
  const [selected, setSelected] = useState<number | null>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  const opener = useRef<HTMLAnchorElement | null>(null)
  const isOpen = selected !== null
  useEffect(() => {
    if (!isOpen) return
    const modal = dialog.current
    if (!modal) return
    modal.showModal()
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { modal.close(); document.body.style.overflow = previous; opener.current?.focus({ preventScroll: true }) }
  }, [isOpen])
  const photo = selected === null ? null : portfolio[selected]
  function move(direction: number) { setSelected(current => current === null ? null : (current + direction + portfolio.length) % portfolio.length) }
  return <section id="work" className="work-section" tabIndex={-1} aria-labelledby="work-title">
    <div className="section-heading work-heading"><h2 id="work-title">On the tools.</h2><p>Original site photographs from a residential construction-support project.</p></div>
    <div className="work-gallery">{previews.map((photoIndex, index) => {
      const item = portfolio[photoIndex]
      return <figure key={item.id}>
        <a className="photo-link" href={asset(`images/${item.id}-1600.webp`)} aria-label={`Enlarge photograph: ${titles[index]}`} onClick={event => { event.preventDefault(); opener.current = event.currentTarget; setSelected(photoIndex) }}>
          <img src={asset(`images/${item.id}-960.webp`)} srcSet={`${asset(`images/${item.id}-480.webp`)} 480w, ${asset(`images/${item.id}-960.webp`)} 960w, ${asset(`images/${item.id}-1600.webp`)} 1152w`} sizes="(max-width: 600px) 50vw, 33vw" alt={item.alt} width="1152" height="1536" loading="lazy" />
          <span className="photo-expand" aria-hidden="true"><Arrow diagonal /></span>
        </a>
        <figcaption>{titles[index]}</figcaption>
      </figure>
    })}</div>
    <dialog ref={dialog} className="lightbox" aria-label="Project photograph viewer" onCancel={() => setSelected(null)} onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) setSelected(null) }} onKeyDown={event => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1) } }}>
      <button className="lightbox-close" onClick={() => setSelected(null)} aria-label="Close photograph viewer" autoFocus>Close <span aria-hidden="true">×</span></button>
      {photo && <figure><img src={asset(`images/${photo.id}-1600.webp`)} alt={photo.alt} width="1152" height="1536" /><figcaption aria-live="polite"><span>{(selected ?? 0) + 1} / {portfolio.length} — {photo.title}</span><p>{photo.caption}</p></figcaption></figure>}
      <div className="lightbox-controls"><button aria-label="Previous photograph" onClick={() => move(-1)}><Arrow className="reverse" />Previous</button><button aria-label="Next photograph" onClick={() => move(1)}>Next<Arrow /></button></div>
    </dialog>
  </section>
}
