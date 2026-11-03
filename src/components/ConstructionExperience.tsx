import { Component, lazy, Suspense, useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'
import type { ReactNode } from 'react'
import { business } from '../config/business'
import { constructionStages, scrollProgress, stageAt, stageProgress } from '../lib/construction'
import { useMedia } from '../hooks/useMedia'
import { Arrow } from './Icons'
import StaticConstruction from './StaticConstruction'

const ConstructionScene = lazy(() => import('./ConstructionScene'))

class SceneBoundary extends Component<{ children: ReactNode; onError: () => void }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  componentDidCatch() { this.props.onError() }
  render() { return this.state.failed ? <StaticConstruction /> : this.props.children }
}

let webglSupport: boolean | undefined
const subscribeSupport = () => () => {}
function supportsWebGL() {
  if (webglSupport !== undefined) return webglSupport
  try { const canvas = document.createElement('canvas'); const gl = canvas.getContext('webgl2'); webglSupport = !!gl; gl?.getExtension('WEBGL_lose_context')?.loseContext() } catch { webglSupport = false }
  return webglSupport
}

export default function ConstructionExperience({ onExit }: { onExit?: () => void }) {
  const section = useRef<HTMLElement>(null)
  const reducedMotion = useMedia('(prefers-reduced-motion: reduce)')
  const mobile = useMedia('(max-width: 760px)')
  // Match the prerendered fallback, then activate WebGL after hydration.
  const webgl = useSyncExternalStore<boolean | undefined>(subscribeSupport, supportsWebGL, () => undefined)
  const [staticMode, setStaticMode] = useState(false)
  const [failed, setFailed] = useState(false)
  const [progress, setProgress] = useState(0)
  const [angle, setAngle] = useState(0)
  const [sceneLoaded, setSceneLoaded] = useState(false)
  const simple = reducedMotion || !webgl || staticMode || failed
  const index = stageAt(progress)
  const stage = constructionStages[index]
  const Heading = onExit ? 'h2' : 'h1'
  const reportFailure = useCallback(() => setFailed(true), [])
  const ready = useCallback(() => setSceneLoaded(true), [])

  useEffect(() => {
    if (onExit && section.current) window.scrollTo({ top: section.current.offsetTop, behavior: 'instant' })
  }, [onExit])

  useEffect(() => {
    if (onExit || webgl === undefined || !window.location.hash || window.location.hash === '#top') return
    // Browser hash scrolling can precede hydration and the WebGL/fallback layout.
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(window.location.hash.slice(1))
      if (target) {
        const header = document.querySelector('header')?.getBoundingClientRect().height ?? 100
        window.scrollTo({ top: window.scrollY + target.getBoundingClientRect().top - header - 14, behavior: 'instant' })
      }
    })
    return () => cancelAnimationFrame(frame)
  }, [webgl, reducedMotion, onExit])

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      if (!section.current) return
      setProgress(scrollProgress(window.scrollY, section.current.offsetTop, section.current.offsetHeight, window.innerHeight))
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    window.addEventListener('scroll', onScroll, { passive: true }); window.addEventListener('resize', onScroll)
    update()
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(frame) }
  }, [simple])

  function goToStage(next: number) {
    if (!section.current) return
    const runway = section.current.offsetHeight - window.innerHeight
    window.scrollTo({ top: section.current.offsetTop + runway * stageProgress(next), behavior: reducedMotion ? 'instant' : 'smooth' })
  }
  function toggleStaticView() {
    setStaticMode(value => !value)
    // Keep the visitor at the scene when its long scroll runway is removed/restored.
    requestAnimationFrame(() => window.scrollTo({ top: section.current?.offsetTop ?? 0, behavior: 'instant' }))
  }

  return <section ref={section} className={`construction-experience ${simple ? 'simple-experience' : ''} ${onExit ? '' : 'construction-home'} ${webgl === undefined ? 'scene-pending' : ''}`} id={onExit ? 'construction-story' : 'top'} aria-label="Interactive construction story">
    <div className="construction-sticky">
      <div className="hero-meta"><span><i className="status-dot" />INDEPENDENT CONSTRUCTION SUPPORT</span><span>{business.serviceArea}</span></div>
      <div className="scene-stage" aria-label={simple ? 'Static architectural illustration' : 'Interactive 3D construction assembly'}>
        {simple ? <StaticConstruction /> : <SceneBoundary onError={reportFailure}><Suspense fallback={<StaticConstruction />}><ConstructionScene progress={progress} mobile={mobile} angle={angle} onReady={ready} onFailure={reportFailure} /></Suspense></SceneBoundary>}
        <div className="model-coordinate" aria-hidden="true"><span>BR / 001</span><span>RESIDENTIAL WALL STUDY</span></div>
        <div className="model-note">{simple ? 'ARCHITECTURAL ILLUSTRATION' : sceneLoaded ? 'LIVE 3D / SCROLL TO ASSEMBLE' : 'PREPARING 3D ASSEMBLY'}<span>Illustrative sequence. Not a construction plan.</span></div>
      </div>
      <div className="hero-copy" key={simple ? 'static' : index}>
        <p className="eyebrow red"><span className="tiny-line" />{simple ? constructionStages[0].eyebrow : stage.eyebrow}</p>
        <Heading className="construction-title" id={onExit ? undefined : 'home-title'}>{(simple ? constructionStages[0].title : stage.title).split('\n').map((line, i) => <span key={i}>{line}</span>)}</Heading>
        <p className="hero-description">{simple ? constructionStages[0].description : stage.description}</p>
        <a className="text-call" href={business.telephone}><span>Let’s talk about your project<strong>{business.phone}</strong></span><Arrow diagonal /></a>
      </div>
      <div className="hero-bottom">
        <a className="scroll-cue" href="#work"><span className="scroll-circle"><Arrow /></span><span>SEE THE REAL WORK<small>Explore the construction photographs.</small></span></a>
        <div className="scene-controls">{!simple && <button onClick={() => setAngle((a) => (a + 1) % 3)} aria-label="Rotate the 3D construction model to the next viewpoint">↻ <span>Rotate view</span></button>}{webgl && !reducedMotion && !failed && <button aria-pressed={staticMode} onClick={toggleStaticView}>{staticMode ? 'Enable 3D' : 'Static view'}</button>}</div>
        <span className="hero-experience"><strong>20<span>+</span></strong><span>YEARS OF PRACTICAL<br />LABOURING EXPERIENCE</span></span>
      </div>
      {onExit && <button className="study-close" onClick={onExit}>Close 3D study <span aria-hidden="true">×</span></button>}
      {!simple && <nav className="build-timeline" aria-label="Construction stages">{constructionStages.map((s, i) => <button key={s.label} onClick={() => goToStage(i)} aria-label={`Stage ${i + 1}: ${s.label}`} aria-current={index === i ? 'step' : undefined} className={index === i ? 'active' : index > i ? 'complete' : ''}><span className="timeline-number">0{i + 1}</span><span className="timeline-line" /><span className="timeline-label">{s.label}</span></button>)}</nav>}
      <div className="build-progress" style={{ transform: `scaleX(${simple ? 1 : progress})` }} aria-hidden="true" />
    </div>
  </section>
}
