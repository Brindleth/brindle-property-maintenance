import { useRef, useState } from 'react'
import { asset } from '../data/portfolio'
import { framingDetail, projectStages } from '../data/projectStages'
import { nextProjectStage, swipeDirection } from '../lib/projectSlider'
import { Arrow } from './Icons'

export default function Portfolio() {
  const [stage, setStage] = useState(0)
  const pointer = useRef<{ x: number; y: number } | null>(null)
  const photo = projectStages[stage]
  function move(direction: number) { setStage(current => nextProjectStage(current, direction)) }
  return <section id="work" className="portfolio-section project-section section-pad" aria-labelledby="project-title">
    <div className="section-topline"><span className="eyebrow">01 / ACTUAL PROJECT</span><span className="eyebrow subtle">RESIDENTIAL CONSTRUCTION SUPPORT</span></div>
    <div className="project-heading"><h2 id="project-title">The work.<br /><span className="muted">Layer by layer.</span></h2><p>From the early exterior to cladding around the window. Actual photographs of hands-on work.</p></div>
    <div className="project-slider" role="region" aria-roledescription="carousel" aria-label="Genuine construction project progression">
      <div className="project-screen" tabIndex={0} aria-label="Construction photographs. Swipe horizontally or use left and right arrow keys."
        onKeyDown={event => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1) }; if (event.key === 'Home' || event.key === 'End') { event.preventDefault(); setStage(event.key === 'Home' ? 0 : 3) } }}
        onPointerDown={event => { if ((event.target as HTMLElement).closest('button') || !event.isPrimary || event.button !== 0) return; pointer.current = { x: event.clientX, y: event.clientY }; event.currentTarget.setPointerCapture(event.pointerId) }}
        onPointerCancel={() => { pointer.current = null }}
        onPointerUp={event => { if (!pointer.current) return; const direction = swipeDirection(event.clientX - pointer.current.x, event.clientY - pointer.current.y); pointer.current = null; if (direction) move(direction) }}>
        {projectStages.map((item, index) => <div className={`project-slide ${index === stage ? 'is-current' : ''}`} key={item.id} role="group" aria-roledescription="slide" aria-label={`${index + 1} of 4: ${item.name}`} aria-hidden={index !== stage}>
          <img className="project-ambient" src={asset(`images/${item.id}-960.webp`)} alt="" aria-hidden="true" draggable="false" loading="lazy" />
          <img className="project-original" src={asset(`images/${item.id}-960.webp`)} srcSet={`${asset(`images/${item.id}-480.webp`)} 480w, ${asset(`images/${item.id}-960.webp`)} 960w, ${asset(`images/${item.id}-1600.webp`)} 1600w`} sizes="(max-width: 760px) 90vw, 52vw" alt={item.alt} width="1200" height="1600" draggable="false" loading={index === 0 ? 'eager' : 'lazy'} />
        </div>)}
        <span className="project-image-tag">GENUINE PROJECT PHOTOGRAPH</span><span className="project-count" aria-hidden="true">0{stage + 1} / 04</span>
        <button className="project-arrow project-previous" aria-label="Previous construction stage" onClick={() => move(-1)}><Arrow className="reverse" /></button>
        <button className="project-arrow project-next" aria-label="Next construction stage" onClick={() => move(1)}><Arrow /></button>
      </div>
      <div className="project-caption" aria-live="polite" aria-atomic="true"><h3><span>0{stage + 1}</span>{photo.name}</h3><p>{photo.description}</p></div>
      <div className="project-stage-control">
        <label className="sr-only" htmlFor="project-stage">Construction photo stage</label>
        <input id="project-stage" type="range" min="0" max="3" step="1" value={stage} aria-valuetext={`Stage ${stage + 1} of 4: ${photo.name}`} onChange={event => setStage(Number(event.target.value))} />
        <div className="project-stage-labels">{projectStages.map((item, index) => <button key={item.id} onClick={() => setStage(index)} aria-label={`Show stage ${index + 1}: ${item.name}`} aria-current={stage === index ? 'step' : undefined}><span>0{index + 1}</span>{item.short}</button>)}</div>
      </div>
    </div>
    <p className="project-photo-note">Different viewpoints of the same project. Stage 3 is a window detail, not a separately verified finishing phase.</p>
    <details className="project-detail"><summary>Inside the frame <span aria-hidden="true">+</span></summary><figure><img src={asset(`images/${framingDetail.id}-960.webp`)} alt={framingDetail.alt} width="1200" height="1600" loading="lazy" /><figcaption>{framingDetail.caption}</figcaption></figure></details>
    <p className="project-credit">Construction support using customer-supplied materials and instructions. Photographs supplied with permission. Design and certification are not claimed.</p>
  </section>
}
