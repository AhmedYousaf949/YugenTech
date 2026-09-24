# Yugen 

A high-fidelity React/Vite landing page recreation built around the visual language of brain while using Yugen Tech's public content structure. This is an original implementation, not a copy of the source site's code or proprietary assets.

Link: https://yugentechs.netlify.app/

## Stack
- React 19 + TypeScript
- Vite
- GSAP + ScrollTrigger
- Lenis smooth scrolling
- Lucide icons
- Google Fonts: Manrope + DM Mono

## Interaction system
- Full-screen preloader transition
- Split-word hero reveal
- Scroll-linked hero parallax / fade
- Smooth Lenis wheel interpolation
- Header glass state on scroll
- Animated progress bar
- Magnetic CTA behavior
- Hover underline micro-interactions
- Animated service inspector
- Infinite technology marquees
- Scroll-linked project image drift
- Counter reveal
- Process timeline progress + active-step opacity
- Testimonial carousel
- Security scan beam
- Form success state
- Reduced-motion fallback

## Content provenance
Yugen content is based on the public Yugen Tech landing page. Metrics/testimonials labeled in the UI as demo are intentionally illustrative placeholders where the source page had zero/sample values or no public detail.

Unsplash imagery is used as genre-matched filler where project imagery is not available locally. Replace the URLs in `src/data/site.ts` with downloaded/local assets before production if you want a fully self-hosted build.

## Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```
