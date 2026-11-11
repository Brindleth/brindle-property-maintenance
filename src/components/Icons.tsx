export function Arrow({ diagonal = false, className = '' }: { diagonal?: boolean; className?: string }) {
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? 'M5 19 19 5M5 5h14v14' : 'M4 12h15m-6-6 6 6-6 6'} stroke="currentColor" strokeWidth="1.5" /></svg>
}
export function Phone() {
  return <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m7 3 3 5-2.5 2a16 16 0 0 0 6.5 6.5l2-2.5 5 3c-1 5-4 5-8 3C7 17 3 12 3 7c0-2 1-4 4-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>
}
export function Brand({ light = false }: { light?: boolean }) {
  return <span className={`brand ${light ? 'brand-light' : ''}`}><span className="brand-name">brindle<span className="brand-stop" aria-hidden="true">.</span></span><span className="brand-sub">PROPERTY MAINTENANCE &amp; SKILLED LABOUR</span></span>
}

export function ServiceIcon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    maintenance: 'm5 16 9-9m-2-3a6 6 0 0 0 7 7l-9 9a3 3 0 0 1-4-4l9-9a6 6 0 0 1-3-3Zm5-1 3 3',
    timber: 'M4 4h16v16H4ZM4 10h16M10 10v10M7 4v3m7-3v3m3 7h3m-3 3h3',
    labour: 'M4 18h16v3H4Zm2 0v-7a6 6 0 0 1 12 0v7M9 7v5m6-5v5M3 15h18M10 5V3h4v2',
    interior: 'M4 21V3h16v18M8 21V8h8v13M12 13h1M2 21h20',
    exterior: 'm2 11 10-8 10 8M5 9v12h14V9M9 21v-7h6v7M2 21h20',
    install: 'M5 3v6m-3-3h6M16 3h5v5M3 16v5h5m13-5v5h-5M9 9h6v6H9Zm3-3v3m0 6v3M6 12h3m6 0h3',
  }
  return <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={paths[name] || paths.maintenance} stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
}
