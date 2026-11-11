import { useEffect, useRef, useState } from 'react'
import { business } from '../config/business'
import { Arrow, Brand } from './Icons'
import { navigation } from '../data/navigation'

export default function Header() {
  const [open, setOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const menu = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1101px)')
    const close = () => { if (desktop.matches) setOpen(false) }
    desktop.addEventListener('change', close)
    return () => desktop.removeEventListener('change', close)
  }, [])
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const background = [...document.querySelectorAll<HTMLElement>('main, footer')]
    background.forEach(element => { element.inert = true })
    menu.current?.querySelector<HTMLAnchorElement>('a')?.focus()
    const keyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); menuButton.current?.focus() }
      if (event.key === 'Tab') {
        const elements = [menuButton.current, ...Array.from(menu.current?.querySelectorAll<HTMLAnchorElement>('a') ?? [])].filter(Boolean) as HTMLElement[]
        const current = elements.indexOf(document.activeElement as HTMLElement)
        event.preventDefault()
        elements[(current + (event.shiftKey ? -1 : 1) + elements.length) % elements.length]?.focus()
      }
    }
    window.addEventListener('keydown', keyboard)
    return () => {
      document.body.style.overflow = previous
      background.forEach(element => { element.inert = false })
      window.removeEventListener('keydown', keyboard)
    }
  }, [open])
  function followLink(href: string) {
    setOpen(false)
    window.requestAnimationFrame(() => document.querySelector<HTMLElement>(href)?.focus({ preventScroll: true }))
  }
  return <header className={`site-header ${open ? 'menu-open' : ''}`}>
    <a className="brand-link" href="#top" aria-label={`${business.fullName} home`} onClick={() => setOpen(false)}><Brand /></a>
    <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(([href, text]) => <a key={href} href={href}>{text}</a>)}</nav>
    <a className="header-call" href={business.telephone} onClick={() => setOpen(false)}>{business.phone}<Arrow diagonal /></a>
    <button ref={menuButton} className="menu-button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}><span /><span /></button>
    <div className="mobile-menu" id="mobile-menu" ref={menu} hidden={!open}>
      <span className="eyebrow">PROPERTY MAINTENANCE &amp; SKILLED LABOUR</span>
      <nav aria-label="Mobile navigation">{navigation.map(([href, text], index) => <a key={href} href={href} onClick={() => followLink(href)}><span className="menu-index">0{index + 1}</span>{text}<Arrow diagonal /></a>)}</nav>
      <a className="mobile-menu-call" href={business.telephone} onClick={() => setOpen(false)}>Let’s talk.<strong>{business.phone}<Arrow diagonal /></strong></a>
      <p>{business.serviceArea}</p>
    </div>
  </header>
}
