import { useEffect, useRef, useState } from 'react'
import { business } from '../config/business'
import { Arrow, Brand } from './Icons'

const links = [['#services', 'Services'], ['#work', 'Actual work'], ['#concept', 'Outdoor'], ['#experience', 'Experience'], ['#contact', 'Contact']] as const

export default function Header() {
  const [open, setOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const menu = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 761px)')
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false) }
    desktop.addEventListener('change', closeOnDesktop)
    return () => desktop.removeEventListener('change', closeOnDesktop)
  }, [])
  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    menu.current?.querySelector<HTMLAnchorElement>('a')?.focus()
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); menuButton.current?.focus() }
      if (e.key === 'Tab') {
        const elements = [menuButton.current, ...Array.from(menu.current?.querySelectorAll<HTMLAnchorElement>('a') ?? [])].filter(Boolean) as HTMLElement[]
        const current = elements.indexOf(document.activeElement as HTMLElement)
        const next = e.shiftKey ? (current - 1 + elements.length) % elements.length : (current + 1) % elements.length
        e.preventDefault(); elements[next]?.focus()
      }
    }
    window.addEventListener('keydown', close)
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener('keydown', close) }
  }, [open])

  function followLink() { setOpen(false); menuButton.current?.focus() }
  return <header className={`site-header ${open ? 'menu-open' : ''}`}>
    <a className="brand-link" href="#top" aria-label="Brindle home" onClick={() => setOpen(false)}><Brand /></a>
    <nav className="desktop-nav" aria-label="Main navigation">{links.map(([href, text]) => <a key={href} href={href}>{text}</a>)}</nav>
    <a className="header-call" href={business.telephone}>{business.phone}<Arrow diagonal /></a>
    <button ref={menuButton} className="menu-button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}><span /><span /></button>
    {open && <div className="mobile-menu" id="mobile-menu" ref={menu}>
      <span className="eyebrow">GOOD WORK STARTS HERE.</span>
      <nav aria-label="Mobile navigation">{links.map(([href, text], i) => <a key={href} href={href} onClick={followLink}><sup>0{i + 1}</sup>{text}<Arrow diagonal /></a>)}<a href="#top" onClick={followLink}><sup>06</sup>3D experience<Arrow diagonal /></a></nav>
      <a className="mobile-menu-call" href={business.telephone}>Let’s talk.<br />{business.phone}<Arrow diagonal /></a>
      <p>{business.serviceArea}</p>
    </div>}
  </header>
}
