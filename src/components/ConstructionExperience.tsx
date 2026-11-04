import { useEffect, useRef, useState } from 'react'
import { business } from '../config/business'
import { asset } from '../data/portfolio'
import { boardPolygon, fixingTabs, photoAssembly } from '../data/photoAssembly'
import { assembly, constructionStages, pieceProgress, scrollProgress, stageAt, stageProgress } from '../lib/construction'
import { useMedia } from '../hooks/useMedia'
import { Arrow } from './Icons'

const imagePath = (name: string) => asset('images/assembly/'+name+'-1080.webp')

export default function ConstructionExperience() {
  const section = useRef<HTMLElement>(null)
  const frame = useRef(0)
  const reducedMotion = useMedia('(prefers-reduced-motion: reduce)')
  const mobile = useMedia('(max-width: 760px)')
  const [progress,setProgress] = useState(0)
  const [still,setStill] = useState(false)
  const [failed,setFailed] = useState(false)
  const simple = reducedMotion || still || failed
  const actualProgress = simple ? 1 : progress
  const index = stageAt(actualProgress)
  const stage = constructionStages[index]
  useEffect(() => {
    const update = () => { frame.current=0; const node=section.current; if(node) setProgress(scrollProgress(window.scrollY,node.offsetTop,node.offsetHeight,window.innerHeight)) }
    const onScroll = () => { if(!frame.current) frame.current=requestAnimationFrame(update) }
    window.addEventListener('scroll',onScroll,{passive:true}); window.addEventListener('resize',onScroll); update()
    return () => { window.removeEventListener('scroll',onScroll); window.removeEventListener('resize',onScroll); cancelAnimationFrame(frame.current) }
  },[simple])
  useEffect(() => {
    const id=window.location.hash.slice(1); if(!id||id==='top') return
    const raf=requestAnimationFrame(()=>document.getElementById(id)?.scrollIntoView({behavior:'instant',block:'start'}))
    return ()=>cancelAnimationFrame(raf)
  },[simple])
  function goToStage(next: number) { const node=section.current;if(node) window.scrollTo({top:node.offsetTop+(node.offsetHeight-window.innerHeight)*stageProgress(next),behavior:'instant'}) }
  function toggleStill(){setStill(value=>!value);requestAnimationFrame(()=>window.scrollTo({top:section.current?.offsetTop??0,behavior:'instant'}))}
  const layerImage=(name:string)=><image href={imagePath(name)} width="1152" height="1536" preserveAspectRatio="none" onError={()=>setFailed(true)} />
  return <section ref={section} id="top" className={'photo-story '+(simple?'is-still':'')} aria-label="Photographic construction assembly">
    <div className="photo-story-stage">
      <div className="photo-story-visual">
        {failed ? <img className="photo-error-fallback" src={asset('images/1000020958-1600.webp')} alt="Original site photograph of installed horizontal cladding and white window surrounds" width="1152" height="1536" /> : <svg className="photo-assembly" viewBox="0 0 1152 1536" preserveAspectRatio="xMidYMid slice" role="img" aria-labelledby="assembly-image-title assembly-image-description">
          <title id="assembly-image-title">A real wall, assembled layer by layer</title><desc id="assembly-image-description">Photo-based reconstruction using the owner's exterior-wall references. Thermal wrap, small fixing clips, complete vertical battens, white surrounds and horizontal cladding. The camera and surroundings stay fixed.</desc>
          <defs>
            <clipPath id="assembly-wall"><polygon points={photoAssembly.wall}/></clipPath>
            <mask id="assembly-openings" maskUnits="userSpaceOnUse" x="0" y="0" width="1152" height="1536"><rect width="1152" height="1536" fill="white"/><polygon points={photoAssembly.largeWindow} fill="black"/><polygon points={photoAssembly.smallWindow} fill="black"/></mask>
            {Array.from({length:8},(_,i)=><clipPath key={'battens-'+i} id={'assembly-battens-'+i}><rect x={320+i*104} y="0" width="104" height={1536*pieceProgress(actualProgress,assembly.battens,i,8)}/></clipPath>)}
            {Array.from({length:22},(_,i)=><clipPath key={'board-'+i} id={'assembly-board-'+i}><polygon points={boardPolygon(i,22,pieceProgress(actualProgress,assembly.cladding,i,22))}/></clipPath>)}
            <clipPath id="assembly-surrounds"><polygon points="482,575 1152,350 1152,1335 482,995"/><polygon points="407,630 473,613 473,833 407,819"/><polygon points="337,527 359,518 359,859 337,843"/></clipPath>
            <clipPath id="assembly-trim-reveal"><rect x="320" y="0" width="832" height={1536*pieceProgress(actualProgress,assembly.trims,0,1)}/></clipPath>
          </defs>
          {layerImage('thermal-wrap')}
          <g clipPath="url(#assembly-wall)" mask="url(#assembly-openings)">
            <g className="photo-layer" data-layer="clips">{fixingTabs.map((tab,i)=><image key={i} href={asset('images/assembly/fixing-tab.webp')} x={tab.x-tab.width/2} y={tab.y-tab.height/2} width={tab.width} height={tab.height} transform={'rotate('+tab.angle+' '+tab.x+' '+tab.y+')'} opacity={pieceProgress(actualProgress,assembly.clips,i,fixingTabs.length)} onError={()=>setFailed(true)}/>)}</g>
            <g className="photo-layer" data-layer="battens">{Array.from({length:8},(_,i)=><g key={i} clipPath={'url(#assembly-battens-'+i+')'}>{layerImage('metal-battens')}</g>)}</g>
            <g className="photo-layer" data-layer="trims" clipPath="url(#assembly-trim-reveal)"><g clipPath="url(#assembly-surrounds)">{layerImage('window-trims')}</g></g>
            <g className="photo-layer" data-layer="cladding">{Array.from({length:22},(_,i)=><g key={i} clipPath={'url(#assembly-board-'+i+')'}>{layerImage('exterior-cladding')}</g>)}</g>
          </g>
        </svg>}
      </div>
      <div className="photo-story-shade" aria-hidden="true" />
      <div className="photo-story-meta"><span><i className="status-dot"/>EXPERIENCED HANDS. SMARTER POSSIBILITIES.</span><span>{business.serviceArea}</span></div>
      <div className="photo-story-copy" style={{opacity:simple||!mobile?1:Math.max(0,1-progress*7)}}><p className="eyebrow">BRINDLE / BUILT ON PRACTICAL EXPERIENCE</p><h1 id="home-title">Good work.<br/>Smarter<br/><span>possibilities.</span></h1><p>Construction support, property care and smart-home solutions. Practical skills. Technical thinking.</p><a href={business.telephone} className="photo-story-call" tabIndex={!simple&&mobile&&progress>=1/7?-1:undefined}>{business.phone}<Arrow diagonal/></a></div>
      <div className="photo-story-caption"><span>0{index+1} / 05</span><div><h2>{stage.label}</h2><p>{stage.description}</p></div><span className="photo-story-state">{simple?'STILL VIEW':'SCROLL TO ASSEMBLE'}<small>Photo-based reconstruction</small></span></div>
      <div className="photo-story-actions"><a href="#services">Explore the services <Arrow/></a>{!reducedMotion&&!failed&&<button onClick={toggleStill} aria-pressed={still}>{still?'Enable scroll assembly':'Still view'}</button>}</div>
      {!simple&&<nav className="photo-stage-nav" aria-label="Construction stages">{constructionStages.map((item,i)=><button key={item.label} onClick={()=>goToStage(i)} aria-label={'Stage '+(i+1)+': '+item.label} aria-current={index===i?'step':undefined}><span>0{i+1}</span><span>{item.label}</span></button>)}</nav>}
      <div className="photo-story-progress" role="progressbar" aria-label="Construction assembly progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(actualProgress*100)}><span style={{transform:'scaleX('+actualProgress+')'}}/></div>
      {reducedMotion&&<p className="photo-reduced-note">Still view respects your reduced-motion preference.</p>}
    </div>
  </section>
}
