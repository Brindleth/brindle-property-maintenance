import { Component, lazy, Suspense, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import StaticConstruction from './StaticConstruction'
import { Arrow } from './Icons'

const ConstructionExperience = lazy(() => import('./ConstructionExperience'))

class StudyBoundary extends Component<{ children: ReactNode; onClose: () => void }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  render() {
    return this.state.failed ? <div className="study-loading"><StaticConstruction /><p>The interactive study couldn’t load. Your project photographs are still available above.</p><button onClick={this.props.onClose}>Close study</button></div> : this.props.children
  }
}

export default function BuildStudy() {
  const [open, setOpen] = useState(false)
  const section = useRef<HTMLElement>(null)
  function changeStudy(next: boolean) {
    setOpen(next)
    requestAnimationFrame(() => {
      const target = next ? document.getElementById('construction-story') : section.current
      if (target) window.scrollTo({ top: window.scrollY + target.getBoundingClientRect().top - (next ? 0 : 110), behavior: 'instant' })
      if (!next) section.current?.querySelector<HTMLButtonElement>('.study-open')?.focus({ preventScroll: true })
    })
  }
  return <section className={`build-study ${open ? 'study-opened' : ''}`} id="construction" ref={section} aria-labelledby="study-title">
    <div className="study-intro"><div><p className="eyebrow red">AN OPTIONAL CLOSER LOOK</p><h2 id="study-title">The layers behind<br />the finish.</h2><p>A 3D study of framing, noggins, wrap, battens and cladding. Explore the assembly at your own pace.</p><span className="study-disclaimer">Illustrative model, not a completed project or construction plan.</span></div>{!open && <div className="study-teaser"><StaticConstruction /><button className="study-open" onClick={() => changeStudy(true)} aria-expanded={open}>Open interactive 3D study<Arrow diagonal /></button></div>}</div>
    {open && <StudyBoundary onClose={() => changeStudy(false)}><Suspense fallback={<div className="study-loading"><StaticConstruction /><p>Preparing the construction study…</p><button onClick={() => changeStudy(false)}>Close study</button></div>}><ConstructionExperience onExit={() => changeStudy(false)} /></Suspense></StudyBoundary>}
  </section>
}
