import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Mail, MapPin } from 'lucide-react';
import { Container } from '../components/Container';
import { Magnetic } from '../components/Magnetic';
import { Reveal } from '../components/Reveal';

export function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <section id="contact" className="contact section-dark">
      <div className="contact-glow" />
      <Container>
        <div className="contact-top">
          <Reveal><div className="section-label light"><span>11</span><i />Contact</div></Reveal>
          <Reveal delay={.1}><span className="mono">LET'S MAKE SOMETHING SCALE</span></Reveal>
        </div>
        <div className="contact-grid">
          <div className="contact-copy">
            <Reveal><h2>Have a product<br />worth <span>building?</span></h2></Reveal>
            <Reveal delay={.1}><p>Whether you need a new product, an AI layer or a technical second opinion, start with the problem. We’ll map the next step together.</p></Reveal>
            <div className="contact-facts">
              <div><Mail size={17} /><span>hello@yugenstack.com</span></div>
              <div><MapPin size={17} /><span>Worldwide / Remote</span></div>
            </div>
          </div>
          <Reveal className="contact-form-wrap" delay={.16}>
            <form onSubmit={submit}>
              {sent ? (
                <div className="form-success">
                  <div><Check size={24} /></div>
                  <h3>Message staged.</h3>
                  <p>Your demo submission is complete. Connect this form to your backend/email service later.</p>
                </div>
              ) : (
                <>
                  <div className="field-row">
                    <label>Name<input required placeholder="Your name" /></label>
                    <label>Email<input required type="email" placeholder="your@email.com" /></label>
                  </div>
                  <label>What are you building?<textarea required placeholder="Tell us a little about the product, constraints and timeline." rows={5} /></label>
                  <div className="form-foot">
                    <span className="mono">REPLY WITHIN 1 BUSINESS DAY</span>
                    <Magnetic><button className="btn btn-solid" type="submit">Send inquiry <ArrowUpRight size={16} /></button></Magnetic>
                  </div>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
