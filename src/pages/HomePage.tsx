import { useEffect, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [waitlistSuccess, setWaitlistSuccess] = useState(false);

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

  function handleWaitlist(e: FormEvent) {
    e.preventDefault();
    setWaitlistSuccess(true);
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-grain" />
        <div className="hero-glow" />
        <div className="hero-inner">
          <h1>
            Every opportunity.
            <br />
            <span className="dim">One clear</span> next step.
          </h1>

          <p className="hero-sub">
            OM is opportunity management — from your personal pipeline to your company's.
            Know what's real. Act before it isn't.
          </p>

          <div className="hero-ctas">
            <a href="#products" className="cta-main">
              See how it works
              <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                <path
                  d="M1 5h11M7.5 1l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#waitlist" className="cta-ghost">
              Join the waitlist ↓
            </a>
          </div>
        </div>
      </section>

      {/* ── TRANSITION BAND ── */}
      <div className="transition-band">
        <div className="transition-inner">
          <div className="ti-left">
            <div className="ti-eyebrow">Two products, one engine</div>
            <div className="ti-text">
              POM manages personal opportunities. OM manages company pipeline. Same clarity engine underneath — built to grow with you.
            </div>
          </div>
        </div>
      </div>

      <div className="section-fade dark-to-light" />

      {/* ── PRODUCTS OVERVIEW ── */}
      <div className="light" id="products" style={{ borderTop: 'none' }}>
        <div className="wrap reveal">
          {/* POM Card */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 1,
            background: 'var(--border)',
            border: '1px solid var(--border)',
            borderRadius: 16,
            overflow: 'hidden',
            marginBottom: 56,
          }}>
            <div style={{ background: 'var(--white)', padding: '40px 36px' }}>
              <div style={{
                fontSize: 11,
                fontWeight: 600,
                color: 'var(--om-accent)',
                background: 'var(--om-lt)',
                border: '1px solid var(--om-bd)',
                borderRadius: 5,
                padding: '2px 8px',
                display: 'inline-block',
                marginBottom: 20,
              }}>
                POM · Personal
              </div>
              <h2 style={{ fontSize: 24, marginBottom: 12 }}>
                Personal Opportunity
                <br />
                Management
              </h2>
              <p style={{ fontSize: 14, color: 'var(--mid)', lineHeight: 1.7, marginBottom: 24 }}>
                For job seekers, AEs, early-stage founders, and anyone managing their own pipeline of opportunities. Know which ones are worth your time.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8, marginBottom: 28 }}>
                {[
                  'Clarity scoring for every opportunity',
                  'Jobs, deals, gigs — one place',
                  'Resume generation & automated applications',
                  'Free to start, $50/mo for full access',
                ].map((t) => (
                  <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: 'var(--mid)' }}>
                    <span style={{ color: 'var(--green)', flexShrink: 0, marginTop: 1 }}>&#10003;</span>
                    {t}
                  </div>
                ))}
              </div>
              <Link to="/pom" className="cta-main" style={{ display: 'inline-flex' }}>
                Explore POM
                <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                  <path d="M1 5h11M7.5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            <div style={{ background: 'var(--white)', padding: '40px 36px' }}>
              <div style={{
                fontSize: 11,
                fontWeight: 600,
                color: 'var(--om-accent)',
                background: 'var(--om-lt)',
                border: '1px solid var(--om-bd)',
                borderRadius: 5,
                padding: '2px 8px',
                display: 'inline-block',
                marginBottom: 20,
              }}>
                OM · Company
              </div>
              <h2 style={{ fontSize: 24, marginBottom: 12 }}>
                Company Opportunity
                <br />
                Management
              </h2>
              <p style={{ fontSize: 14, color: 'var(--mid)', lineHeight: 1.7, marginBottom: 24 }}>
                For Seed to Series A B2B SaaS founders doing founder-led sales. Your CRM can't tell you what's real — OM can.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8, marginBottom: 28 }}>
                {[
                  'Company pipeline clarity scoring',
                  'Behavioral intelligence from email & calendar',
                  'Pipeline truth before board meetings',
                  '$1,500/mo · Design partners welcome',
                ].map((t) => (
                  <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: 'var(--mid)' }}>
                    <span style={{ color: 'var(--green)', flexShrink: 0, marginTop: 1 }}>&#10003;</span>
                    {t}
                  </div>
                ))}
              </div>
              <Link to="/om" className="cta-main" style={{ display: 'inline-flex' }}>
                Explore OM
                <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                  <path d="M1 5h11M7.5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── THE UPGRADE PATH ── */}
      <div className="light-alt reveal">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <div className="eyebrow">The upgrade path</div>
          <h2 style={{ marginBottom: 16 }}>
            You start as an individual.
            <br />
            Then you build a company.
          </h2>
          <p className="section-desc" style={{ maxWidth: 600, marginBottom: 48 }}>
            POM catches you early — when you're managing your own opportunities. OM catches you when you've grown into a founder with company-level pipeline chaos. The upgrade isn't a new sales motion. It's a natural evolution of your situation.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            gap: 0,
            alignItems: 'center',
          }}>
            {/* POM side */}
            <div style={{
              background: 'var(--white)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: '28px 24px',
            }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--om-accent)', marginBottom: 12, letterSpacing: '0.04em' }}>POM</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)', marginBottom: 8 }}>Personal pipeline</div>
              <div style={{ fontSize: 13, color: 'var(--mid)', lineHeight: 1.6 }}>
                You're a job seeker, an AE, or an early founder managing your own opportunities and outreach.
              </div>
            </div>

            {/* Arrow */}
            <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: 6 }}>
              <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
                <path d="M0 6h36M32 2l4 4-4 4" stroke="var(--mid)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ fontSize: 11, color: 'var(--faint)', whiteSpace: 'nowrap' }}>You grow</span>
            </div>

            {/* OM side */}
            <div style={{
              background: 'var(--white)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: '28px 24px',
            }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--om-accent)', marginBottom: 12, letterSpacing: '0.04em' }}>OM</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)', marginBottom: 8 }}>Company pipeline</div>
              <div style={{ fontSize: 13, color: 'var(--mid)', lineHeight: 1.6 }}>
                You have a team, a real pipeline, and the exact problem OM solves — CRM data you can't trust.
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center' as const, marginTop: 32 }}>
            <p style={{ fontSize: 13, color: 'var(--faint)', lineHeight: 1.6, maxWidth: 480, margin: '0 auto' }}>
              Same clarity engine underneath. The feature overlap isn't a bug — it's the continuity that makes the upgrade feel obvious rather than disruptive.
            </p>
          </div>
        </div>
      </div>

      {/* ── THE THESIS ── */}
      <div className="light reveal" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="wrap" style={{ maxWidth: 680 }}>
          <div className="eyebrow">The thesis</div>
          <h2 style={{ marginBottom: 16 }}>
            Fix the input layer.
            <br />
            Everything else follows.
          </h2>
          <p className="body-text">
            Most GTM systems are built on bad input data. CRMs are manually updated, inconsistent, and often wrong. AI tools built on top of that data amplify the problem instead of fixing it.
          </p>
          <p className="body-text">
            OM fixes the input layer — before AI touches it. Whether it's your personal pipeline or your company's, the intelligence layer has to come before the action layer.
          </p>
        </div>
      </div>

      {/* ── WAITLIST ── */}
      <div className="light reveal" id="waitlist" style={{ borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 480, margin: '0 auto', padding: '88px 40px 48px', textAlign: 'center' as const }}>
          <h3 style={{ fontSize: 20, fontWeight: 600, color: 'var(--ink)', marginBottom: 8 }}>
            Get early access
          </h3>
          <p style={{ fontSize: 14, color: 'var(--mid)', marginBottom: 28 }}>
            We're onboarding design partners now. Join the waitlist and we'll set you up personally.
          </p>
          {!waitlistSuccess ? (
            <form onSubmit={handleWaitlist} style={{ maxWidth: 400, margin: '0 auto' }}>
              <div className="field">
                <input className="field-input" type="text" placeholder="Your name" required />
              </div>
              <div className="field">
                <input className="field-input" type="email" placeholder="you@company.com" required />
              </div>
              <button type="submit" className="submit-btn submit-pom" style={{ width: '100%' }}>
                Join the waitlist
              </button>
              <div className="form-note" style={{ justifyContent: 'center' }}>
                <div className="note-dot nd-open" />
                Free &middot; no credit card &middot; we'll reach out personally
              </div>
            </form>
          ) : (
            <div>
              <div className="ss-icon ss-icon-pom">&#10003;</div>
              <div className="ss-title">You're on the list</div>
              <p className="ss-desc">We'll reach out soon to get you set up.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
