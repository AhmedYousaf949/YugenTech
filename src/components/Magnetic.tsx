import { useRef, type PropsWithChildren } from 'react';
import { gsap } from 'gsap';

export function Magnetic({ children, className = '', strength = 22 }: PropsWithChildren<{ className?: string; strength?: number }>) {
  const ref = useRef<HTMLDivElement>(null);
  return <div ref={ref} className={`magnetic ${className}`}
    onMouseMove={(e) => {
      const el = ref.current; if (!el) return;
      const r = el.getBoundingClientRect(); const x = e.clientX - (r.left + r.width / 2); const y = e.clientY - (r.top + r.height / 2);
      gsap.to(el, { x: (x / r.width) * strength, y: (y / r.height) * strength, duration: .45, ease: 'power3.out' });
    }}
    onMouseLeave={() => { if (ref.current) gsap.to(ref.current, { x: 0, y: 0, duration: .8, ease: 'elastic.out(1, .45)' }); }}
  >{children}</div>;
}
