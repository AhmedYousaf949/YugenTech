import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

export function Preloader() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: .2, onComplete: () => setVisible(false) });
      tl.to('.pre-number', { y: 0, duration: .8, ease: 'power4.out' })
        .to('.pre-line', { scaleX: 1, duration: 1.15, ease: 'power3.inOut' }, '<.1')
        .to('.preloader', { yPercent: -100, duration: 1.1, ease: 'power4.inOut' }, '+=.25');
    });
    return () => ctx.revert();
  }, []);
  if (!visible) return null;
  return <div className="preloader" aria-hidden="true"><div className="pre-inner"><div className="pre-brand">YUGEN / 2026</div><div className="pre-number-wrap"><span className="pre-number">01</span><span className="pre-number muted">00</span></div><div className="pre-line"><span /></div><div className="pre-status">Initializing interface</div></div></div>;
}
