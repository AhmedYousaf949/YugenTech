import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null); const [display, setDisplay] = useState(0);
  useEffect(() => {
    const obj = { n: 0 };
    const tween = gsap.to(obj, { n: value, duration: 1.6, ease: 'power2.out', paused: true, onUpdate: () => setDisplay(Math.round(obj.n)) });
    const trigger = ScrollTrigger.create({ trigger: ref.current, start: 'top 90%', once: true, onEnter: () => tween.play() });
    return () => { trigger.kill(); tween.kill(); };
  }, [value]);
  return <span ref={ref}>{display}{suffix}</span>;
}
