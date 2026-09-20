import { useEffect, useRef } from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { Container } from '../components/Container';
import { Magnetic } from '../components/Magnetic';
import { SplitText } from '../components/SplitText';
import { site } from '../data/site';

export function Hero() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: .55 });
      tl.fromTo('.hero-eyebrow > *', { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .7, stagger: .08, ease: 'power3.out' })
        .fromTo('.split-word > span', { yPercent: 115 }, { yPercent: 0, duration: 1.05, stagger: .045, ease: 'power4.out' }, '-=.2')
        .fromTo('.hero-copy, .hero-actions, .hero-visual', { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .9, stagger: .1, ease: 'power3.out' }, '-=.65');
      gsap.to('.hero-back', { yPercent: 18, scale: 1.05, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }});
      gsap.to('.hero-art', { yPercent: -16, rotate: -2, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }});
      gsap.to('.hero-title', { yPercent: -10, opacity: .15, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: '90% top', scrub: true }});
    }, root);
    return () => ctx.revert();
  }, []);
  return <section className="hero section-dark" ref={root} id="top">
    <div className="hero-back" />
    <div className="hero-grid" />
    <div className="hero-scan" /><div className="hero-ghost">SCALE<br/>SCALE<br/>SCALE</div>
    <Container className="hero-inner">
      <div className="hero-eyebrow"><span className="status"><b/> {site.eyebrow}</span><span className="mono">01 / 06</span></div>
      <div className="hero-content">
        <div className="hero-title-wrap"><h1 className="hero-title"><SplitText>{site.hero.title[0]}</SplitText><br/><span className="outline"><SplitText>{site.hero.title[1]}</SplitText></span></h1></div>
        <div className="hero-copy"><p>{site.hero.copy}</p></div>
        <div className="hero-actions"><Magnetic><a href="#projects" className="btn btn-solid">Explore work <ArrowUpRight size={16}/></a></Magnetic><a className="text-link" href="#services">What we build <ArrowDownRight size={16}/></a></div>
      </div>
      <div className="hero-visual">
        <div className="orbital orbital-a"/><div className="orbital orbital-b"/><div className="orbital orbital-c"/>
        <div className="hero-orb"><div className="orb-core"/><div className="orb-ring ring-1"/><div className="orb-ring ring-2"/><div className="orb-cross h"/><div className="orb-cross v"/></div>
        <div className="hero-ghost-line mono">SYS / 01 — ARCHITECTURE / PERFORMANCE / SCALE</div><div className="hero-card code"><div className="card-top"><span>yugen.systems</span><span className="mono">RUNNING</span></div><pre>{`01 const architecture = {\n02   product: 'clear',\n03   systems: 'scalable',\n04   delivery: 'measured'\n05 }`}</pre></div>
        <div className="hero-card telemetry"><span>LIVE TELEMETRY</span><strong>99.8</strong><small>uptime / target</small><div className="telemetry-bars">{[26,39,31,53,42,61,48,68,55,82,64,79].map((n,i)=><i key={i} style={{height:`${n}%`}}/>)}</div></div>
      </div>
      <div className="hero-foot"><span className="mono">SCROLL TO EXPLORE</span><span className="scroll-mark"><i/></span><span className="mono">LAHORE / WORLDWIDE</span></div>
    </Container>
  </section>;
}
