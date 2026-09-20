import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Magnetic } from './Magnetic';

const links = [['Services', '#services'], ['Technology', '#technology'], ['Projects', '#projects'], ['About', '#about'], ['Contact', '#contact']];

export function Header() {
  const [scrolled, setScrolled] = useState(false); const [open, setOpen] = useState(false);
  useEffect(() => { const on = () => setScrolled(window.scrollY > 70); on(); window.addEventListener('scroll', on, { passive: true }); return () => window.removeEventListener('scroll', on); }, []);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [open]);
  return <>
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a href="#top" className="logo"><span className="logo-dot" />YUGEN</a>
      <nav className="desktop-nav">{links.map(([label, href]) => <a href={href} key={label} className="nav-link">{label}<span className="nav-line" /></a>)}</nav>
      <Magnetic><a className="nav-cta" href="#contact">Start a conversation <ArrowUpRight size={15} strokeWidth={1.5}/></a></Magnetic>
      <button className="menu-button" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>{open ? <X size={21}/> : <Menu size={21}/>}</button>
    </header>
    <div className={`mobile-menu ${open ? 'open' : ''}`}>
      <div className="mobile-menu-inner">{links.map(([label, href], i) => <a href={href} key={label} onClick={() => setOpen(false)}><span>0{i+1}</span>{label}</a>)}<a className="mobile-mail" href="mailto:hello@yugenstack.com">hello@yugenstack.com</a></div>
    </div>
  </>;
}
