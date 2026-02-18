import { useEffect, useRef, useState } from 'react';

interface SignalItem {
  company: string;
  detail: string;
  score: number;
  type: 'warm' | 'caution' | 'cold';
}

const signals: SignalItem[] = [
  { company: 'Acme Corp', detail: 'Champion re-engaged · 3 stakeholders active', score: 91, type: 'warm' },
  { company: 'Northstar AI', detail: 'Proposal viewed · next step on calendar', score: 74, type: 'warm' },
  { company: 'Vertex Protocol', detail: '14 days silent · no next step logged', score: 38, type: 'caution' },
  { company: 'Relay SaaS', detail: 'Marked active in CRM · last touch 22 days ago', score: 12, type: 'cold' },
];

export default function Hero() {
  const mockRef = useRef<HTMLDivElement>(null);
  const [barsAnimated, setBarsAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !barsAnimated) {
            setBarsAnimated(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (mockRef.current) {
      observer.observe(mockRef.current);
    }

    return () => observer.disconnect();
  }, [barsAnimated]);

  const getBarColor = (type: string) => {
    switch (type) {
      case 'warm':
        return 'bg-[var(--green-mid)]';
      case 'caution':
        return 'bg-[#D97706]';
      case 'cold':
        return 'bg-[var(--border-dark)]';
      default:
        return 'bg-[var(--text)]';
    }
  };

  return (
    <section className="pt-40 pb-24 lg:pb-16 px-6 lg:px-14 min-h-screen">
      <div className="max-w-[1160px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column */}
        <div>
          <div className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[var(--green)] tracking-wide mb-9">
            <span className="eyebrow-dot w-[5px] h-[5px] bg-[var(--green-mid)] rounded-full"></span>
            PipelineOM Pulse — now live
          </div>

          <h1 className="font-serif text-[clamp(44px,5vw,68px)] font-normal leading-[1.08] tracking-tight text-[var(--text)] mb-7">
            Your GTM data has the answers.{' '}
            <em className="italic text-[var(--text-mid)]">You just can't see them yet.</em>
          </h1>

          <p className="text-[17px] font-light text-[var(--text-mid)] leading-[1.75] mb-12 max-w-[440px]">
            PipelineOM extracts behavioral signal from your existing stack — without manual CRM entry, without new
            dashboards — so you always know what's actually happening in your pipeline.
          </p>

          <div className="flex items-center gap-4 mb-12">
            <a
              href="#apply"
              className="text-[14px] font-medium text-white bg-[var(--text)] px-7 py-3.5 rounded-lg no-underline transition-all border border-[var(--text)] hover:bg-[var(--green)] hover:border-[var(--green)]"
            >
              Apply as design partner
            </a>
            <a
              href="#product"
              className="text-[14px] font-normal text-[var(--text-mid)] no-underline flex items-center gap-1.5 transition-colors hover:text-[var(--text)]"
            >
              See the product →
            </a>
          </div>

          <div className="flex items-center gap-5 pt-6 border-t border-[var(--border)] flex-wrap">
            <div className="text-[12px] text-[var(--text-dim)] flex items-center gap-1">
              <strong className="text-[var(--text)] font-medium">Free</strong> for design partners
            </div>
            <span className="text-[var(--border-dark)] text-[12px]">—</span>
            <div className="text-[12px] text-[var(--text-dim)] flex items-center gap-1">
              <strong className="text-[var(--text)] font-medium">10</strong> spots available
            </div>
            <span className="text-[var(--border-dark)] text-[12px]">—</span>
            <div className="text-[12px] text-[var(--text-dim)] flex items-center gap-1">
              Backed by <strong className="text-[var(--text)] font-medium">GMI Cloud</strong>
            </div>
          </div>
        </div>

        {/* Right Column - Mock UI */}
        <div ref={mockRef} className="hidden lg:block">
          <div className="bg-white border border-[var(--border)] rounded-2xl overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.06),0_24px_64px_rgba(0,0,0,0.08)]">
            {/* Browser Chrome */}
            <div className="bg-[var(--off)] border-b border-[var(--border)] px-5 py-3.5 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]"></div>
              </div>
              <div className="font-mono text-[10px] text-[var(--text-dim)] bg-[var(--border)] px-3 py-1 rounded">
                app.pipelineom.com/pulse
              </div>
              <div className="w-[52px]"></div>
            </div>

            {/* Mock Body */}
            <div className="p-6">
              <div className="font-mono text-[9px] font-medium text-[var(--text-dim)] uppercase tracking-widest mb-3.5">
                Weekly signal — highest leverage this week
              </div>

              {signals.map((signal, index) => (
                <div
                  key={index}
                  className="signal-card flex items-center justify-between px-4 py-3.5 border border-[var(--border)] rounded-lg mb-2 bg-white transition-all hover:border-[var(--border-dark)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
                >
                  <div>
                    <div className="text-[13px] font-medium text-[var(--text)] tracking-tight mb-0.5">
                      {signal.company}
                    </div>
                    <div className="text-[11px] text-[var(--text-dim)] font-mono">{signal.detail}</div>
                  </div>
                  <div className="flex items-center gap-2.5 flex-shrink-0 ml-4">
                    <div className="w-14 h-[3px] bg-[var(--off2)] rounded-sm overflow-hidden">
                      <div
                        className={`h-full rounded-sm transition-all duration-[1200ms] ${getBarColor(signal.type)}`}
                        style={{
                          width: barsAnimated ? `${signal.score}%` : '0%',
                          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                        }}
                      ></div>
                    </div>
                    <div className="font-mono text-[11px] text-[var(--text-mid)] w-6 text-right">{signal.score}</div>
                  </div>
                </div>
              ))}

              {/* Stats */}
              <div className="grid grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)] rounded-lg overflow-hidden mt-4">
                <div className="bg-[var(--off)] py-3.5 text-center">
                  <div className="font-mono text-lg font-medium text-[var(--text)] tracking-tight">4</div>
                  <div className="text-[10px] text-[var(--text-dim)] mt-0.5 font-mono">signals</div>
                </div>
                <div className="bg-[var(--off)] py-3.5 text-center">
                  <div className="font-mono text-lg font-medium text-[var(--text)] tracking-tight">0</div>
                  <div className="text-[10px] text-[var(--text-dim)] mt-0.5 font-mono">manual entries</div>
                </div>
                <div className="bg-[var(--off)] py-3.5 text-center">
                  <div className="font-mono text-lg font-medium text-[var(--text)] tracking-tight">2.4h</div>
                  <div className="text-[10px] text-[var(--text-dim)] mt-0.5 font-mono">saved / week</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
