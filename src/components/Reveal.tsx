import { useRef, type PropsWithChildren } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export function Reveal({ children, className = '', y = 56, delay = 0 }: PropsWithChildren<{ className?: string; y?: number; delay?: number }>) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    gsap.fromTo(el, { y, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.05, delay, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
  }, { scope: ref });
  return <div ref={ref} className={className}>{children}</div>;
}
