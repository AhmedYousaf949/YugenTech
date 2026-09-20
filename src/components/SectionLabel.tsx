import { Reveal } from './Reveal';
export function SectionLabel({ index, children }: { index: string; children: string }) { return <Reveal className="section-label"><span>{index}</span><i />{children}</Reveal>; }
