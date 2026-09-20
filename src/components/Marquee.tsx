import type { ReactNode } from 'react';
export function Marquee({ children, reverse = false }: { children: ReactNode; reverse?: boolean }) {
  return <div className="marquee"><div className={`marquee-track ${reverse ? 'reverse' : ''}`}>{[0,1].map(i => <div className="marquee-group" key={i}>{children}</div>)}</div></div>;
}
