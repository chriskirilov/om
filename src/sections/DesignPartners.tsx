import { useEffect, useRef, useState } from 'react';

interface Criterion {
  num: string;
  title: string;
  body: string;
}

const criteria: Criterion[] = [
  {
    num: '01',
    title: 'Active GTM motion',
    body: "You're talking to customers or running campaigns every week. Not planning to — doing it.",
  },
  {
    num: '02',
    title: 'Willing to share your data',
    body: 'CRM export, pipeline data, attribution data. The signal is in the data — we need access to find it.',
  },
  {
    num: '03',
    title: 'Founder or VP in the room',
    body: 'Decision maker on the call. Someone who feels the pipeline pain firsthand and can move fast.',
  },
  {
    num: '04',
    title: 'A specific question you can\'t answer',
    body: "What's really happening in your pipeline? Which signals predict conversion? We'll find out. That's the trade.",
  },
];

const stageOptions = [
  'Pre-revenue',
  '$0–$500K ARR',
  '$500K–$3M ARR',
  '$3M–$10M ARR',
  '$10M+ ARR',
];

export default function DesignPartners() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="apply" ref={sectionRef} className="bg-[var(--off)] border-t border-[var(--border)]">
      <div className="max-w-[1160px] mx-auto px-6 lg:px-14 py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Criteria */}
          <div>
            <div className="font-mono text-[11px] text-[var(--text-dim)] tracking-widest uppercase mb-4">
              Design partners
            </div>

            <h2 className="reveal font-serif text-[clamp(32px,4vw,48px)] font-normal leading-[1.12] tracking-tight text-[var(--text)] mb-4">
              We're looking for 10 teams to build with
            </h2>

            <p className="reveal text-base font-light text-[var(--text-mid)] max-w-[480px] leading-[1.75] mb-9">
              Not beta users. Not pilot customers. Founders and GTM leads who want to shape what GTM signal
              infrastructure looks like — from the inside.
            </p>

            <div className="reveal flex flex-col border border-[var(--border)] rounded-xl overflow-hidden mb-5">
              {criteria.map((criterion, index) => (
                <div
                  key={index}
                  className="flex gap-5 px-6 py-5 bg-white border-b border-[var(--border)] last:border-b-0 items-start transition-colors hover:bg-[var(--off)]"
                >
                  <div className="font-mono text-[10px] text-[var(--text-dim)] flex-shrink-0 pt-1 tracking-wide">
                    {criterion.num}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[var(--text)] tracking-tight mb-1">
                      {criterion.title}
                    </div>
                    <div className="text-[13px] font-light text-[var(--text-mid)] leading-[1.65]">
                      {criterion.body}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal mt-5 p-5 bg-[var(--green-light)] border border-[#C5DFCE] rounded-xl">
              <div className="font-mono text-[10px] text-[var(--green)] uppercase tracking-widest mb-2">
                What you get
              </div>
              <div className="text-[13px] font-light text-[var(--green)] leading-[1.7]">
                Free access to PipelineOM Pulse. A GTM Signal Audit of your pipeline data. Direct input on the roadmap.
                Founder pricing locked for life when we go paid.
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="reveal">
            <div className="bg-white border border-[var(--border)] rounded-xl p-10 lg:sticky lg:top-[84px] shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
              {!submitted ? (
                <>
                  <div className="font-serif text-[26px] font-normal tracking-tight text-[var(--text)] mb-1.5">
                    Apply to join
                  </div>
                  <div className="text-[13px] font-light text-[var(--text-mid)] mb-7 leading-[1.6]">
                    10 spots. We review every application personally and reply within 48 hours.
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div>
                        <label className="block text-xs font-medium text-[var(--text)] tracking-tight mb-1.5">
                          First name
                        </label>
                        <input
                          type="text"
                          placeholder="First"
                          className="w-full bg-[var(--off)] border border-[var(--border)] rounded-lg px-3.5 py-2.5 text-sm font-light text-[var(--text)] outline-none transition-all focus:border-[var(--border-dark)] focus:bg-white placeholder:text-[var(--text-dim)]"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[var(--text)] tracking-tight mb-1.5">
                          Last name
                        </label>
                        <input
                          type="text"
                          placeholder="Last"
                          className="w-full bg-[var(--off)] border border-[var(--border)] rounded-lg px-3.5 py-2.5 text-sm font-light text-[var(--text)] outline-none transition-all focus:border-[var(--border-dark)] focus:bg-white placeholder:text-[var(--text-dim)]"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-xs font-medium text-[var(--text)] tracking-tight mb-1.5">
                        Company
                      </label>
                      <input
                        type="text"
                        placeholder="Your company"
                        className="w-full bg-[var(--off)] border border-[var(--border)] rounded-lg px-3.5 py-2.5 text-sm font-light text-[var(--text)] outline-none transition-all focus:border-[var(--border-dark)] focus:bg-white placeholder:text-[var(--text-dim)]"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-xs font-medium text-[var(--text)] tracking-tight mb-1.5">
                        Work email
                      </label>
                      <input
                        type="email"
                        placeholder="you@yourcompany.com"
                        className="w-full bg-[var(--off)] border border-[var(--border)] rounded-lg px-3.5 py-2.5 text-sm font-light text-[var(--text)] outline-none transition-all focus:border-[var(--border-dark)] focus:bg-white placeholder:text-[var(--text-dim)]"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-xs font-medium text-[var(--text)] tracking-tight mb-1.5">
                        Stage
                      </label>
                      <select
                        className="w-full bg-[var(--off)] border border-[var(--border)] rounded-lg px-3.5 py-2.5 text-sm font-light text-[var(--text)] outline-none transition-all focus:border-[var(--border-dark)] focus:bg-white cursor-pointer appearance-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23A8A49E' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 14px center',
                          paddingRight: '36px',
                        }}
                        required
                      >
                        <option value="" disabled selected>
                          Select your stage
                        </option>
                        {stageOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-4">
                      <label className="block text-xs font-medium text-[var(--text)] tracking-tight mb-1.5">
                        GTM tools you're running
                      </label>
                      <input
                        type="text"
                        placeholder="HubSpot, Apollo, Salesforce, Lucia..."
                        className="w-full bg-[var(--off)] border border-[var(--border)] rounded-lg px-3.5 py-2.5 text-sm font-light text-[var(--text)] outline-none transition-all focus:border-[var(--border-dark)] focus:bg-white placeholder:text-[var(--text-dim)]"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-xs font-medium text-[var(--text)] tracking-tight mb-1.5">
                        The pipeline question you can't currently answer
                      </label>
                      <textarea
                        placeholder="e.g. We have attribution data but no way to see which channels produce users who actually convert and stay..."
                        className="w-full bg-[var(--off)] border border-[var(--border)] rounded-lg px-3.5 py-2.5 text-sm font-light text-[var(--text)] outline-none transition-all focus:border-[var(--border-dark)] focus:bg-white placeholder:text-[var(--text-dim)] resize-y min-h-[88px] leading-[1.6]"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[var(--text)] text-white border-none rounded-lg px-6 py-3.5 text-sm font-medium tracking-tight cursor-pointer transition-all mt-1 hover:bg-[var(--green)]"
                    >
                      Submit application
                    </button>

                    <div className="text-[11px] text-[var(--text-dim)] text-center mt-3 leading-[1.6] font-light">
                      No sales pitch. Just an honest conversation about whether this is a fit.
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-12 px-6">
                  <div className="w-12 h-12 border-[1.5px] border-[var(--border-dark)] rounded-full flex items-center justify-center mx-auto mb-6 text-lg text-[var(--green-mid)]">
                    ✓
                  </div>
                  <div className="font-serif text-2xl text-[var(--text)] mb-2.5">Application received.</div>
                  <div className="text-sm font-light text-[var(--text-mid)] leading-[1.65]">
                    We'll review it personally and be in touch within 48 hours. Know a founder with the same pipeline
                    problem? Send them here.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
