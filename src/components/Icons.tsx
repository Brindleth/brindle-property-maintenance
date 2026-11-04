export function Arrow({ diagonal = false, className = '' }: { diagonal?: boolean; className?: string }) {
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? 'M5 19 19 5M5 5h14v14' : 'M4 12h15m-6-6 6 6-6 6'} stroke="currentColor" strokeWidth="1.5" /></svg>
}
export function Phone() {
  return <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m7 3 3 5-2.5 2a16 16 0 0 0 6.5 6.5l2-2.5 5 3c-1 5-4 5-8 3C7 17 3 12 3 7c0-2 1-4 4-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>
}
export function Brand({ light = false }: { light?: boolean }) {
  return <span className={`brand ${light ? 'brand-light' : ''}`}><span className="brand-name">BRINDLE<span className="brand-stop" aria-hidden="true">.</span></span><span className="brand-sub"><span>PROPERTY MAINTENANCE &amp; </span><span>SMART HOME SOLUTIONS</span></span></span>
}
