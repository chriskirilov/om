import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface Feature {
  text: string;
}

interface Step {
  num: string;
  title: string;
  body: string;
}

const features: Feature[] = [
  { text: 'Automatically captures behavioral signal from email, calendar, and engagement data' },
  { text: 'Ranks pipeline by real activity — not CRM stage or rep optimism' },
  { text: 'Detects stall patterns before deals go fully dark' },
  { text: 'Works across Web3 and traditional SaaS GTM stacks' },
  { text: 'Free for design partners during the build phase' },
];

const steps: Step[] = [
  {
    num: '01',
    title: 'Connect your existing stack',
    body: 'CRM, email, calendar, outbound tools. PipelineOM ingests what you already have — no migration, no new tool to maintain.',
  },
  {
    num: '02',
    title: 'We extract the signal',
    body: 'Behavioral data — what actually happened, when, with whom — is automatically structured into clean, queryable signal. Zero manual entry required.',
  },
  {
    num: '03',
    title: 'You see what\'s actually real',
    body: 'Pipeline reviews become honest. AI tools run on clean inputs. Forecasts are defensible. You know exactly where to focus this week.',
  },
];

export default function Product() {
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
    <section id="product" ref={sectionRef}>
      <div className="max-w-[1160px] mx-auto px-6 lg:px-14 py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left - Product */}
          <div>
            <div className="font-mono text-[11px] text-[var(--text-dim)] tracking-widest uppercase mb-4">
              The product
            </div>

            <div className="reveal inline-flex items-center gap-2 font-mono text-[11px] text-[var(--green)] bg-[var(--green-light)] border border-[#C5DFCE] px-3 py-1.5 rounded-full mb-5 tracking-wide">
              <span className="eyebrow-dot w-[5px] h-[5px] bg-[var(--green-mid)] rounded-full"></span>
              Free · Live now
            </div>

            <div className="reveal font-serif text-[clamp(28px,3.5vw,44px)] font-normal tracking-tight text-[var(--text)] leading-[1.1] mb-5">
              PipelineOM Pulse
            </div>

            <p className="reveal text-base font-light text-[var(--text-mid)] leading-[1.75] mb-9">
              Pulse surfaces your highest-leverage GTM actions each week — ranked by what's actually happening in your
              pipeline, not what's been logged in your CRM. No setup. No manual entry. Works on your existing data.
            </p>

            <div className="reveal flex flex-col border border-[var(--border)] rounded-xl overflow-hidden mb-9">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3.5 px-5 py-4 text-sm text-[var(--text-mid)] font-light leading-[1.5] bg-white border-b border-[var(--border)] last:border-b-0 transition-colors hover:bg-[var(--off)]"
                >
                  <ArrowRight className="w-3 h-3 text-[var(--text-dim)] flex-shrink-0 mt-1" />
                  {feature.text}
                </div>
              ))}
            </div>

            <a
              href="#apply"
              className="reveal inline-block text-[14px] font-medium text-white bg-[var(--text)] px-7 py-3.5 rounded-lg no-underline transition-all border border-[var(--text)] hover:bg-[var(--green)] hover:border-[var(--green)]"
            >
              Apply for early access
            </a>
          </div>

          {/* Right - How It Works */}
          <div id="how">
            <div className="font-mono text-[11px] text-[var(--text-dim)] tracking-widest uppercase mb-7">
              How it works
            </div>

            <div className="reveal flex flex-col border border-[var(--border)] rounded-xl overflow-hidden">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[64px_1fr] px-9 py-8 bg-white border-b border-[var(--border)] last:border-b-0 gap-6 items-start transition-colors hover:bg-[var(--off)]"
                >
                  <div className="font-mono text-xs text-[var(--text-dim)] pt-1">{step.num}</div>
                  <div>
                    <div className="text-[15px] font-medium text-[var(--text)] tracking-tight mb-1.5">
                      {step.title}
                    </div>
                    <div className="text-sm font-light text-[var(--text-mid)] leading-[1.7]">{step.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
