import { useEffect, useRef } from 'react';

interface ProblemCard {
  num: string;
  title: string;
  body: string;
}

const problems: ProblemCard[] = [
  {
    num: '01',
    title: 'Data lives in silos',
    body: 'CRM, email, calendar, outbound tools — all fragmented. No single source of truth. Your team makes decisions from different versions of reality.',
  },
  {
    num: '02',
    title: 'Nobody updates the CRM',
    body: 'Manual entry is the weakest link in every GTM stack. Deals go stale. Stages lie. Forecasts become fiction everyone privately knows is wrong.',
  },
  {
    num: '03',
    title: 'AI amplifies the noise',
    body: 'Every AI GTM tool on the market makes faster decisions on broken inputs. Garbage in, garbage out — now at the speed of machine learning.',
  },
  {
    num: '04',
    title: 'Dashboards diagnose, never fix',
    body: 'RevOps tools show what\'s wrong in beautiful charts. They don\'t fix the underlying data structure. You\'re treating symptoms, not the cause.',
  },
];

export default function Problem() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    if (!reveals) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('in'), i * 80);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    );

    reveals.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[var(--off)] border-y border-[var(--border)]">
      <div className="max-w-[1160px] mx-auto px-6 lg:px-14 py-24">
        <div className="font-mono text-[11px] text-[var(--text-dim)] tracking-widest uppercase mb-4">
          The problem
        </div>

        <h2 className="reveal font-serif text-[clamp(32px,4vw,48px)] font-normal leading-[1.12] tracking-tight text-[var(--text)] mb-4">
          Modern GTM breaks at the input layer
        </h2>

        <p className="reveal text-base font-light text-[var(--text-mid)] max-w-[480px] leading-[1.75] mb-14">
          AI tools are proliferating. Every one of them amplifies bad decisions when the underlying data is incomplete.
          The problem isn't your tools — it's what goes into them.
        </p>

        <div className="reveal grid md:grid-cols-2 gap-px bg-[var(--border)] border border-[var(--border)] rounded-xl overflow-hidden">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-10 transition-colors hover:bg-[var(--off)]"
            >
              <div className="font-mono text-[10px] text-[var(--text-dim)] tracking-widest mb-6">
                {problem.num}
              </div>
              <div className="text-base font-medium text-[var(--text)] tracking-tight mb-2.5">
                {problem.title}
              </div>
              <div className="text-sm font-light text-[var(--text-mid)] leading-[1.7]">
                {problem.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
