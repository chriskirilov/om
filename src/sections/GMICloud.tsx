import { useEffect, useRef } from 'react';

interface Metric {
  value: string;
  label: string;
}

const metrics: Metric[] = [
  { value: 'Any model', label: 'Llama · GPT · Claude' },
  { value: 'Any format', label: 'pgdump · CSV · CRM export' },
  { value: 'Any scale', label: 'Startup to enterprise' },
];

export default function GMICloud() {
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
    <section id="gmi" ref={sectionRef} className="bg-[var(--off)] border-y border-[var(--border)]">
      <div className="max-w-[1160px] mx-auto px-6 lg:px-14 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Partner Card */}
          <div className="reveal bg-white border border-[var(--border)] rounded-xl p-10 flex flex-col gap-5">
            <div className="w-11 h-11 bg-[var(--text)] rounded-[10px] flex items-center justify-center font-mono text-[11px] font-medium text-white">
              GMI
            </div>
            <div className="text-[17px] font-medium text-[var(--text)] tracking-tight">GMI Cloud</div>
            <div className="font-mono text-[10px] text-[var(--text-dim)] uppercase tracking-widest -mt-3">
              Accelerator Partner
            </div>
            <div className="text-[13px] font-light text-[var(--text-mid)] leading-[1.7] border-t border-[var(--border)] pt-5">
              GMI Cloud is an AI infrastructure accelerator giving founders access to any foundation model — Llama,
              GPT, Claude — on a unified platform. Upload any file format and run it against frontier models instantly.
            </div>
          </div>

          {/* Right - Description */}
          <div className="reveal">
            <div className="font-mono text-[11px] text-[var(--text-dim)] tracking-widest uppercase mb-4">
              Backed by
            </div>

            <div className="font-serif text-[32px] font-normal tracking-tight text-[var(--text)] mb-4 leading-[1.15]">
              Infrastructure that scales with the signal
            </div>

            <p className="text-[15px] font-light text-[var(--text-mid)] leading-[1.75] mb-8">
              Being part of GMI Cloud's accelerator means OM can run signal extraction on any model, at any
              scale, without building infrastructure from scratch. A pgdump, a CRM export, an attribution dataset — we
              process it against frontier models to surface behavioral patterns your team has never been able to see.
            </p>

            <div className="flex gap-10 flex-wrap">
              {metrics.map((metric, index) => (
                <div key={index}>
                  <div className="text-[22px] font-medium tracking-tight text-[var(--text)]">{metric.value}</div>
                  <div className="text-[11px] text-[var(--text-dim)] mt-0.5">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
