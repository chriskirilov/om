import { useEffect, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';

export default function OmPage() {
  const [waitlistSuccess, setWaitlistSuccess] = useState(false);
  const [waitlistLoading, setWaitlistLoading] = useState(false);
  const [waitlistError, setWaitlistError] = useState('');

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('on');
            entry.target.querySelectorAll('.reveal-child').forEach(c => c.classList.add('on'));
          }
        });
      },
      { threshold: 0.07 }
    );
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  async function handleWaitlist(e: FormEvent) {
    e.preventDefault();
    setWaitlistError('');
    setWaitlistLoading(true);
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const company = (form.elements.namedItem('company') as HTMLInputElement)?.value || '';
    try {
      const res = await fetch('/api/submit-design-partner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, source: 'om-page' }),
      });
      if (!res.ok) throw new Error('Request failed');
      setWaitlistSuccess(true);
    } catch {
      setWaitlistError('Something went wrong — please try again.');
    } finally {
      setWaitlistLoading(false);
    }
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-sub-page">
        <div className="hero-inner">
          <div className="hero-eyebrow">OM · Company Pipeline</div>
          <h1>
            Pipeline clarity
            <br />
            <span className="dim">before GTM scales.</span>
          </h1>
          <p className="hero-sub">
            Your CRM says you have $1M in pipeline. OM tells you which deals are actually alive — before you hire your first AE or RevOps person.
          </p>
          <div className="hero-ctas">
            <a href="#om-waitlist" className="cta-main">
              Join the waitlist
              <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                <path d="M1 5h11M7.5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <div className="light reveal">
        <div className="wrap">
          <div className="eyebrow">The problem</div>
          <h2>
            Founder-led sales runs on
            <br />
            intuition. Until it can't.
          </h2>
          <p className="section-desc" style={{ maxWidth: 640 }}>
            At Seed to Series A, you're closing deals yourself. The CRM is a spreadsheet you update when you remember. Pipeline reviews are gut checks. The moment you need to hire, raise, or forecast — you realize you have no idea what's real.
          </p>

          <div className="thesis-block" style={{ marginTop: 40 }}>
            <div className="thesis-quote">
              &ldquo;My CRM says I have $1M in pipeline.{' '}
              <em>I have no idea which deals are actually alive.&rdquo;</em>
            </div>
            <div className="thesis-attr">
              Every Seed&rarr;Series&nbsp;A founder doing founder-led sales, every Monday morning.
            </div>
          </div>
        </div>
      </div>

      {/* ── WHAT OM DOES ── */}
      <div className="light-alt reveal">
        <div className="wrap">
          <div className="eyebrow">What OM does</div>
          <h2>
            Company pipeline intelligence
            <br />
            that doesn't require a RevOps team.
          </h2>
          <p className="section-desc" style={{ maxWidth: 640, marginBottom: 48 }}>
            OM extracts behavioral clarity from your existing GTM data — email, calendar, CRM, activity logs — and converts it into intelligence about what is actually happening in your pipeline.
          </p>

          {/* Company pipeline mini-UI */}
          <div className="mini-ui" style={{ maxWidth: 480, margin: '0 auto 56px' }}>
            <div className="mini-header">
              <span className="mh-label">Company Pipeline · This Week</span>
              <span className="mh-badge-om">OM</span>
            </div>
            <div className="mini-row">
              <div className="m-dot dg"></div>
              <div className="m-main">
                <div className="m-name">Acme Corp · Enterprise</div>
                <div className="m-sub">$85K · champion engaged · contract sent</div>
              </div>
              <div className="m-score sg">9.4</div>
            </div>
            <div className="mini-row">
              <div className="m-dot dg"></div>
              <div className="m-main">
                <div className="m-name">TechFlow · Mid-Market</div>
                <div className="m-sub">$42K · demo completed · decision maker in</div>
              </div>
              <div className="m-score sg">8.1</div>
            </div>
            <div className="mini-row">
              <div className="m-dot da"></div>
              <div className="m-main">
                <div className="m-name">DataBridge · SMB</div>
                <div className="m-sub">$18K · no reply in 8 days · nurture</div>
              </div>
              <div className="m-score sa">4.2</div>
            </div>
            <div className="mini-row">
              <div className="m-dot dr"></div>
              <div className="m-main">
                <div className="m-name">CloudSync · Enterprise</div>
                <div className="m-sub">$120K · champion left company · stalled</div>
              </div>
              <div className="m-score sr">1.8</div>
            </div>
          </div>

          <div className="feat-grid">
            <div className="feat-card reveal-child delay-1">
              <div className="feat-icon">🎯</div>
              <div className="feat-title">Deal clarity scoring</div>
              <div className="feat-desc">Every deal scored by real engagement — not what someone typed into a CRM field last Tuesday.</div>
            </div>
            <div className="feat-card reveal-child delay-2">
              <div className="feat-icon">🧠</div>
              <div className="feat-title">Behavioral intelligence</div>
              <div className="feat-desc">OM watches email, calendar, and activity patterns to tell you what's actually happening in each deal.</div>
            </div>
            <div className="feat-card reveal-child delay-3">
              <div className="feat-icon">📊</div>
              <div className="feat-title">Pipeline truth</div>
              <div className="feat-desc">See your real pipeline — not the optimistic version. Know which deals are alive before your board asks.</div>
            </div>
            <div className="feat-card reveal-child delay-4">
              <div className="feat-icon">🔌</div>
              <div className="feat-title">Works with your stack</div>
              <div className="feat-desc">HubSpot, Salesforce, a CSV, or nothing at all. OM finds clarity in the mess.</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── WHAT OM IS NOT ── */}
      <div className="light reveal" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="wrap" style={{ maxWidth: 720 }}>
          <div className="eyebrow">What OM is not</div>
          <h2 style={{ marginBottom: 32 }}>
            Not a CRM. Not a dashboard.
            <br />
            The layer underneath.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div style={{ padding: '20px 0', borderTop: '1px solid var(--border)' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', marginBottom: 6 }}>CRMs store what you type</div>
              <div style={{ fontSize: 13, color: 'var(--mid)', lineHeight: 1.6 }}>OM tells you what's actually happening — before anyone updates a field.</div>
            </div>
            <div style={{ padding: '20px 0', borderTop: '1px solid var(--border)' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', marginBottom: 6 }}>Dashboards visualise bad data</div>
              <div style={{ fontSize: 13, color: 'var(--mid)', lineHeight: 1.6 }}>OM fixes the data first. A chart of wrong numbers is still wrong.</div>
            </div>
            <div style={{ padding: '20px 0', borderTop: '1px solid var(--border)' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', marginBottom: 6 }}>AI tools amplify bad inputs</div>
              <div style={{ fontSize: 13, color: 'var(--mid)', lineHeight: 1.6 }}>OM cleans the input layer so every tool built on top of it actually works.</div>
            </div>
            <div style={{ padding: '20px 0', borderTop: '1px solid var(--border)' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', marginBottom: 6 }}>RevOps tools need a RevOps team</div>
              <div style={{ fontSize: 13, color: 'var(--mid)', lineHeight: 1.6 }}>OM works for founders doing it themselves — before that first hire.</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PRICING + WAITLIST ── */}
      <div className="light reveal" id="om-waitlist" style={{ borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', padding: '88px 40px 48px', textAlign: 'center' as const }}>
          <div className="eyebrow">Pricing</div>
          <h2 style={{ marginBottom: 12 }}>
            $1,500/month.
            <br />
            Pipeline clarity from day one.
          </h2>
          <p style={{ fontSize: 15, color: 'var(--mid)', lineHeight: 1.7, marginBottom: 12 }}>
            For Seed to Series A B2B SaaS founders doing founder-led sales. Get in before you hire your first AE — that's the exact moment OM is built for.
          </p>
          <p style={{ fontSize: 13, color: 'var(--faint)', marginBottom: 48 }}>
            $500K–$3M ARR &middot; Founder-led sales &middot; Pipeline you can't trust yet
          </p>

          <div style={{ maxWidth: 400, margin: '0 auto' }}>
            <h3 style={{ fontSize: 20, fontWeight: 600, color: 'var(--ink)', marginBottom: 8 }}>
              Become a design partner
            </h3>
            <p style={{ fontSize: 14, color: 'var(--mid)', marginBottom: 28 }}>
              We're working with a small group of founders to shape OM before we scale it. Tell us about your pipeline.
            </p>
            {!waitlistSuccess ? (
              <form onSubmit={handleWaitlist}>
                <div className="field">
                  <input className="field-input" name="name" type="text" placeholder="Your name" required />
                </div>
                <div className="field">
                  <input className="field-input" name="email" type="email" placeholder="you@company.com" required />
                </div>
                <div className="field">
                  <input className="field-input" name="company" type="text" placeholder="Company name" />
                </div>
                <button type="submit" className="submit-btn submit-pom" style={{ width: '100%' }} disabled={waitlistLoading}>
                  {waitlistLoading ? 'Submitting…' : 'Apply for design partner access'}
                </button>
                {waitlistError && (
                  <div style={{ color: '#e55', fontSize: 13, marginTop: 12 }}>{waitlistError}</div>
                )}
                <div className="form-note" style={{ justifyContent: 'center' }}>
                  <div className="note-dot nd-open" />
                  We'll reach out personally to discuss your pipeline
                </div>
              </form>
            ) : (
              <div>
                <div className="ss-icon ss-icon-pom">&#10003;</div>
                <div className="ss-title">Application received</div>
                <p className="ss-desc">We'll reach out soon to learn about your pipeline and see if OM is the right fit.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── STARTED WITH POM? ── */}
      <div className="light reveal" style={{ borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', padding: '72px 40px', textAlign: 'center' as const }}>
          <div className="eyebrow">Already using POM?</div>
          <h2 style={{ marginBottom: 12 }}>
            The upgrade is natural,
            <br />
            not a new sales motion.
          </h2>
          <p style={{ fontSize: 15, color: 'var(--mid)', lineHeight: 1.7, marginBottom: 32 }}>
            If you used POM to manage your own opportunities and now you're running a company with a real pipeline — OM is the same clarity at the company level. Same engine, different surface.
          </p>
          <Link to="/pom" className="cta-ghost" style={{ display: 'inline-flex' }}>
            ← Back to POM
          </Link>
        </div>
      </div>
    </>
  );
}
