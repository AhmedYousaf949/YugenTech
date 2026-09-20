import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (matchMedia('(pointer: coarse)').matches) return;
    const d = dot.current, r = ring.current, l = label.current;
    if (!d || !r || !l) return;
    const move = (e: MouseEvent) => {
      gsap.to(d, { x: e.clientX, y: e.clientY, duration: .12, ease: 'power2.out' });
      gsap.to(r, { x: e.clientX, y: e.clientY, duration: .45, ease: 'power3.out' });
      gsap.to(l, { x: e.clientX + 18, y: e.clientY + 12, duration: .5, ease: 'power3.out' });
    };
    const enter = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      gsap.to(r, { scale: 2.25, backgroundColor: 'rgba(139,229,143,.08)', borderColor: 'rgba(139,229,143,.65)', duration: .35 });
      if (el.dataset.cursor) { l.textContent = el.dataset.cursor; gsap.to(l, { autoAlpha: 1, duration: .2 }); }
    };
    const leave = () => { gsap.to(r,{scale:1,backgroundColor:'transparent',borderColor:'rgba(139,229,143,.35)',duration:.35}); gsap.to(l,{autoAlpha:0,duration:.15}); };
    const targets = document.querySelectorAll<HTMLElement>('a, button, [data-cursor]');
    window.addEventListener('mousemove', move);
    targets.forEach(el => { el.addEventListener('mouseenter', enter); el.addEventListener('mouseleave', leave); });
    return () => { window.removeEventListener('mousemove', move); targets.forEach(el => { el.removeEventListener('mouseenter', enter); el.removeEventListener('mouseleave', leave); }); };
  }, []);
  return <><div className="cursor-dot" ref={dot}/><div className="cursor-ring" ref={ring}/><div className="cursor-label mono" ref={label}/></>;
}
