import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { Progress } from './components/Progress';
import { Noise } from './components/Noise';
import { Cursor } from './components/Cursor';
import { Hero } from './sections/Hero';
import { Manifesto } from './sections/Manifesto';
import { Metrics } from './sections/Metrics';
import { Services } from './sections/Services';
import { Technology } from './sections/Technology';
import { Projects } from './sections/Projects';
import { About } from './sections/About';
import { Process } from './sections/Process';
import { Testimonials } from './sections/Testimonials';
import { Security } from './sections/Security';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true, wheelMultiplier: .8, touchMultiplier: 1.1 });
    const raf = (time: number) => { lenis.raf(time * 1000); };
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    return () => { gsap.ticker.remove(raf); lenis.destroy(); };
  }, []);

  useEffect(() => { document.documentElement.classList.add('ready'); return () => document.documentElement.classList.remove('ready'); }, []);
  return <>
    <Preloader />
    <Noise />
    <Progress />
    <Cursor />
    <Header />
    <main>
      <Hero />
      <Manifesto />
      <Metrics />
      <Services />
      <Technology />
      <Projects />
      <About />
      <Process />
      <Testimonials />
      <Security />
      <Contact />
    </main>
    <Footer />
  </>;
}
