import type { ReactNode } from 'react';

export function SplitText({ children }: { children: ReactNode }) {
  const text = String(children);
  return <span className="split-text">{text.split(' ').map((word, i) => <span className="split-word" key={`${word}-${i}`}><span>{word}</span>{i < text.split(' ').length - 1 ? '\u00a0' : ''}</span>)}</span>;
}
