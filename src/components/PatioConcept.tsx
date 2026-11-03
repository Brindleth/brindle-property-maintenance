import { useState } from 'react'
import { Arrow } from './Icons'
import { business } from '../config/business'

export default function PatioConcept() {
  const [view, setView] = useState<'structure' | 'finish'>('finish')
  return <section className="concept-section section-pad" id="concept">
    <div className="section-topline reveal"><span className="eyebrow">03 / THE POSSIBILITIES</span><span className="concept-badge">UNBUILT CONCEPT</span></div>
    <div className="concept-layout">
      <div className="concept-copy reveal"><h2>A little vision.<br /><span className="muted">A new perspective.</span></h2><p className="lead">Proposed Perth Patio Enclosure<br />— Concept Only</p><p>An exploration of how stud walls, traditional cladding and a considered feature wall could give an existing patio a different feel.</p><p>Optional outdoor entertainment and low-voltage lighting ideas could be explored with appropriate qualified trades. This proposal has not been constructed.</p><a className="text-call" href={business.telephone}><span>Have a possibility in mind?<strong>{business.phone}</strong></span><Arrow diagonal /></a></div>
      <div className="concept-drawing reveal">
        <div className="drawing-toolbar"><span className="eyebrow">PATIO / SPATIAL STUDY 01</span><div role="group" aria-label="Patio concept view"><button onClick={() => setView('structure')} aria-pressed={view === 'structure'}>Structure</button><button onClick={() => setView('finish')} aria-pressed={view === 'finish'}>Finish</button></div></div>
        <svg viewBox="0 0 720 550" role="img" aria-label={`Unbuilt patio enclosure concept, ${view === 'finish' ? 'cladded finish' : 'exposed stud structure'} architectural diagram`}>
          <defs><pattern id="patio-grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0v32" fill="none" stroke="#d7d5ce" strokeWidth=".6" /></pattern><pattern id="patio-cladding" width="12" height="18" patternUnits="userSpaceOnUse"><rect width="12" height="18" fill="#dcd9ce"/><path d="M0 17.5h12" stroke="#b1b1a5" strokeWidth="1"/></pattern></defs>
          <rect width="720" height="550" fill="url(#patio-grid)" />
          <g stroke="#545b52" strokeWidth="1.5" strokeLinejoin="round">
            <path d="m105 365 292 123 226-137-292-122Z" fill="#d8d4ca" />
            <path d="m105 365 292 123v10L105 375Z" fill="#bbb7ad" /><path d="m397 488 226-137v10L397 498Z" fill="#aaa99e" />
            <path d="M108 365V177L329 47v184M329 47l292 124v180M108 177l291 125 222-131M399 302v186" fill="none" strokeWidth="6" />
            <path d="m108 177 291 125 222-131-292-124Z" fill="#eceae4" fillOpacity=".76" />
            {[0, 1, 2, 3, 4, 5].map(i => <path key={i} d={`m${140 + i * 42} ${158 - i * 24.5} 291 125`} stroke="#8e958a" strokeWidth="2" />)}
            <g stroke="#8f8773" strokeWidth="5"><path d="M329 231V66m49 186V87m49 186V108m49 186V129m49 186V150m49 186V171M329 143l292 124" fill="none" /></g>
            {view === 'finish' && <><path d="M329 231V66l292 124v161Z" fill="url(#patio-cladding)"/><path d="m436 183 116 49v93l-116-49Z" fill="#e6e2d7" stroke="#cb3028" strokeWidth="3"/><path d="m451 208 85 36v55l-85-36Z" fill="#3d4840" strokeWidth="2"/><path d="m343 219 65 28v81l-65-27Z" fill="#a1a48a" stroke="#79846e"/><path d="m350 225 51 22v68l-51-22Z" fill="#878d73" stroke="none"/></>}
            <path d="m485 390 50 21 38-23-50-21Z" fill="#8d977f" /><path d="m492 391 2 25m34-10-1 25m38-42 1 24" fill="none" strokeWidth="3" />
            <path d="m171 363 91 38 44-26-91-38Z" fill="#aaa494" /><path d="m171 363 1-38 91 38-1 38m1-38 43-26v38" fill="#c6c0b0" />
          </g>
          <g stroke="#bd312b" strokeWidth="1" fill="none"><path d="m108 403 291 124m-291-132v16m291 108v16M647 351l-1-176m-7 0h14m-14 176h14" /></g>
          <g fontFamily="monospace" fontSize="10" fill="#757b71"><text x="124" y="458">INDICATIVE GEOMETRY / NO SITE DIMENSIONS</text><text x="477" y="77">EXISTING ROOF FORM</text><path d="m515 85-70 55" stroke="#8f9588"/><text x="503" y="449">OPEN TO PATIO</text></g>
        </svg>
        <div className="drawing-caption"><span className="red">CONCEPT VISUALISATION — NOT CONSTRUCTED</span><p>Illustrative design study based on supplied patio references. Existing patio and lighting are not Brindle’s completed work. Layout, details and approvals would need site-specific review.</p></div>
      </div>
    </div>
  </section>
}
