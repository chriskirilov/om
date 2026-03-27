import { useEffect, useState, type FormEvent } from 'react';

export default function HomePage() {
  const [signInSuccess, setSignInSuccess] = useState(false);
  const [pomSuccess, setPomSuccess] = useState(false);
  const [omSuccess, setOmSuccess] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('on');
        });
      },
      { threshold: 0.07 }
    );
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  function handleSignIn(e: FormEvent) {
    e.preventDefault();
    setSignInSuccess(true);
  }

  function handlePomSubmit(e: FormEvent) {
    e.preventDefault();
    setPomSuccess(true);
  }

  function handleOmSubmit(e: FormEvent) {
    e.preventDefault();
    setOmSuccess(true);
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-inner">
          {/* floating label */}
          <div
            style={{
              fontSize: 'clamp(15px,1.6vw,18px)',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.2)',
              letterSpacing: '0.01em',
              marginBottom: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
            }}
          >
            <svg width="20" height="1" viewBox="0 0 20 1">
              <line x1="0" y1="0.5" x2="20" y2="0.5" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            </svg>
            A job. A deal. A gig. A company pipeline.
            <svg width="20" height="1" viewBox="0 0 20 1">
              <line x1="0" y1="0.5" x2="20" y2="0.5" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            </svg>
          </div>

          <h1>
            Every opportunity.
            <br />
            <span className="dim">One clear</span>
            <br />
            next step.
          </h1>

          <p className="hero-sub">
            An opportunity is an opportunity. OM manages all of them — personally with p(om), and at
            the company layer with OM.
          </p>

          <div className="hero-ctas">
            <a href="#pom-signup" className="cta-main">
              Start with p(om) — free
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
            <a href="#om-waitlist" className="cta-ghost">
              Running a company pipeline? →
            </a>
          </div>
        </div>

        {/* UI Preview */}
        <div className="hero-ui">
          <div className="ui-glow"></div>
          <div className="ui-frame" style={{ textAlign: 'left' }}>
            {/* Top bar */}
            <div
              style={{
                background: '#fff',
                borderBottom: '1px solid #F0F0F4',
                padding: '0 20px',
                height: 52,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    border: '1px solid #E8E8EE',
                    borderRadius: 7,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="13" height="11" viewBox="0 0 13 11" fill="none">
                    <rect x="0" y="0" width="5" height="11" rx="1.5" fill="#C8C8D4" />
                    <rect x="7" y="0" width="6" height="5" rx="1.5" fill="#E0E0E8" />
                    <rect x="7" y="7" width="6" height="4" rx="1.5" fill="#E0E0E8" />
                  </svg>
                </div>
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: '#0A0A0F',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Morning, Chris
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                {/* weather */}
                <div
                  style={{
                    height: 28,
                    padding: '0 10px',
                    background: '#F7F7FA',
                    border: '1px solid #E8E8EE',
                    borderRadius: 8,
                    fontSize: 12,
                    color: '#9898AC',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                  }}
                >
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path
                      d="M1 7.5Q1 5.5 3.5 5.5Q3.8 3 6 3Q8.2 3 8.5 5.5Q10.5 5.5 10.5 7.5Q10.5 9 9 9H3Q1 9 1 7.5Z"
                      fill="#D0D0DC"
                    />
                  </svg>
                  12°C
                </div>
                {/* search */}
                <div
                  style={{
                    width: 30,
                    height: 30,
                    border: '1px solid #E8E8EE',
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="5" cy="5" r="3.5" stroke="#9898AC" strokeWidth="1.2" />
                    <path d="M8 8l2 2" stroke="#9898AC" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
                {/* bell */}
                <div
                  style={{
                    width: 30,
                    height: 30,
                    border: '1px solid #E8E8EE',
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <svg width="12" height="13" viewBox="0 0 12 13" fill="none">
                    <path
                      d="M6 1.5C4 1.5 3 3 3 5V7.5L2 9H10L9 7.5V5C9 3 8 1.5 6 1.5Z"
                      stroke="#9898AC"
                      strokeWidth="1.2"
                      fill="none"
                    />
                    <path
                      d="M4.5 9.5C4.5 10.3 5.2 11 6 11C6.8 11 7.5 10.3 7.5 9.5"
                      stroke="#9898AC"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </div>
                {/* add */}
                <div
                  style={{
                    height: 30,
                    padding: '0 12px',
                    background: '#0A0A0F',
                    borderRadius: 8,
                    fontSize: 12,
                    fontWeight: 600,
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                    cursor: 'pointer',
                  }}
                >
                  <span>+</span> Add
                </div>
              </div>
            </div>

            {/* Section header row */}
            <div
              style={{
                padding: '0 20px',
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid #F3F3F7',
                background: '#fff',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path
                    d="M1 1l4 3 4-3"
                    stroke="#C0C0CC"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div
                  style={{
                    width: 16,
                    height: 16,
                    border: '1px solid #E0E0E8',
                    borderRadius: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <rect x="0" y="0" width="3.5" height="3.5" rx="0.8" fill="#C8C8D4" />
                    <rect x="4.5" y="0" width="3.5" height="3.5" rx="0.8" fill="#C8C8D4" />
                    <rect x="0" y="4.5" width="3.5" height="3.5" rx="0.8" fill="#C8C8D4" />
                    <rect x="4.5" y="4.5" width="3.5" height="3.5" rx="0.8" fill="#C8C8D4" />
                  </svg>
                </div>
                <span style={{ fontSize: 13, fontWeight: 500, color: '#0A0A0F' }}>
                  Top opportunities
                </span>
              </div>
              <span style={{ fontSize: 12, color: '#B0B0BC' }}>This week</span>
            </div>

            {/* Row 1 - Stripe */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '11px 20px',
                gap: 12,
                borderBottom: '1px solid #F5F5F8',
                background: '#fff',
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 9,
                  overflow: 'hidden',
                  border: '1px solid #F0F0F4',
                  flexShrink: 0,
                  background: '#635BFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M7.2 6.2c0-.7.6-1 1.5-1 1.3 0 3 .4 4.3 1.1V3.1C11.7 2.4 10.4 2 8.7 2 5.5 2 3.3 3.7 3.3 6.4c0 4.2 5.8 3.5 5.8 5.3 0 .8-.7 1.1-1.7 1.1-1.5 0-3.4-.6-4.9-1.4v3.2c1.5.7 3.1 1 4.9 1 3.3 0 5.6-1.6 5.6-4.4.1-4.5-5.8-3.7-5.8-5.5z"
                    fill="white"
                  />
                </svg>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13.5, fontWeight: 500, color: '#0A0A0F' }}>
                  Senior GTM Lead, EMEA{' '}
                  <span style={{ color: '#9898AC', fontWeight: 400 }}>· Stripe · Remote</span>
                </div>
                <div
                  style={{
                    fontSize: 11.5,
                    color: '#B0B0BC',
                    marginTop: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 3,
                      background: '#F0FDF4',
                      border: '1px solid #BBF7D0',
                      borderRadius: 100,
                      padding: '1px 7px',
                      fontSize: 10.5,
                      color: '#059669',
                      fontWeight: 500,
                    }}
                  >
                    ● Ready
                  </span>
                  <span>Job · 3 mutual connections · 2h ago</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    border: '1px solid #E8E8EE',
                    borderRadius: 7,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="10" height="13" viewBox="0 0 10 13" fill="none">
                    <path
                      d="M5.5 1L1 7.5H5L4.5 12L9 5.5H5L5.5 1Z"
                      fill="#F59E0B"
                      stroke="#F59E0B"
                      strokeWidth="0.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    border: '1px solid #E8E8EE',
                    borderRadius: 7,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                    fontWeight: 600,
                    color: '#0A0A0F',
                  }}
                >
                  9
                </div>
              </div>
            </div>

            {/* Row 2 - Decagon */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '11px 20px',
                gap: 12,
                borderBottom: '1px solid #F5F5F8',
                background: '#fff',
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 9,
                  overflow: 'hidden',
                  border: '1px solid #F0F0F4',
                  flexShrink: 0,
                  background: '#1A1A2E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: '#fff',
                    fontFamily: 'serif',
                    fontStyle: 'italic',
                  }}
                >
                  D
                </span>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13.5, fontWeight: 500, color: '#0A0A0F' }}>
                  Senior Account Executive{' '}
                  <span style={{ color: '#9898AC', fontWeight: 400 }}>
                    · Decagon · San Francisco
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 11.5,
                    color: '#B0B0BC',
                    marginTop: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 3,
                      background: '#F0FDF4',
                      border: '1px solid #BBF7D0',
                      borderRadius: 100,
                      padding: '1px 7px',
                      fontSize: 10.5,
                      color: '#059669',
                      fontWeight: 500,
                    }}
                  >
                    ● Ready
                  </span>
                  <span>Job · Active conversation · 15h ago</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    border: '1px solid #E8E8EE',
                    borderRadius: 7,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                    fontWeight: 600,
                    color: '#0A0A0F',
                  }}
                >
                  8
                </div>
              </div>
            </div>

            {/* Row 3 - Plaid */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '11px 20px',
                gap: 12,
                borderBottom: '1px solid #F5F5F8',
                background: '#fff',
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 9,
                  overflow: 'hidden',
                  border: '1px solid #F0F0F4',
                  flexShrink: 0,
                  background: '#000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="5" cy="5" r="2" fill="white" />
                  <circle cx="11" cy="5" r="2" fill="white" />
                  <circle cx="5" cy="11" r="2" fill="white" />
                  <circle cx="11" cy="11" r="2" fill="white" />
                </svg>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13.5, fontWeight: 500, color: '#0A0A0F' }}>
                  Staff Product Manager, Applied AI{' '}
                  <span style={{ color: '#9898AC', fontWeight: 400 }}>
                    · Plaid · San Francisco
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 11.5,
                    color: '#B0B0BC',
                    marginTop: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 3,
                      background: '#FFFBEB',
                      border: '1px solid #FDE68A',
                      borderRadius: 100,
                      padding: '1px 7px',
                      fontSize: 10.5,
                      color: '#D97706',
                      fontWeight: 500,
                    }}
                  >
                    ◐ Nurture
                  </span>
                  <span>Job · No contact in 10 days · 20h ago</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    border: '1px solid #E8E8EE',
                    borderRadius: 7,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                    fontWeight: 600,
                    color: '#0A0A0F',
                  }}
                >
                  5
                </div>
              </div>
            </div>

            {/* Row 4 - HubSpot */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '11px 20px',
                gap: 12,
                borderBottom: '1px solid #F5F5F8',
                background: '#fff',
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 9,
                  overflow: 'hidden',
                  border: '1px solid #F0F0F4',
                  flexShrink: 0,
                  background: '#FF7A59',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="11" cy="5" r="2.5" fill="white" />
                  <circle cx="11" cy="5" r="1.2" fill="#FF7A59" />
                  <path
                    d="M8.5 5H6C5 5 4 6 4 8C4 10 5 11 6 11H10C11 11 12 10 12 8.5"
                    stroke="white"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13.5, fontWeight: 500, color: '#0A0A0F' }}>
                  Staff Product Manager, SalesHub{' '}
                  <span style={{ color: '#9898AC', fontWeight: 400 }}>
                    · HubSpot · Remote - USA
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 11.5,
                    color: '#B0B0BC',
                    marginTop: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 3,
                      background: '#F9FAFB',
                      border: '1px solid #E5E7EB',
                      borderRadius: 100,
                      padding: '1px 7px',
                      fontSize: 10.5,
                      color: '#9CA3AF',
                      fontWeight: 500,
                    }}
                  >
                    ○ Let breathe
                  </span>
                  <span>Sale · 6 days ago</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    border: '1px solid #E8E8EE',
                    borderRadius: 7,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                    fontWeight: 600,
                    color: '#0A0A0F',
                  }}
                >
                  2
                </div>
              </div>
            </div>

            {/* Row 5 - Instacart */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '11px 20px',
                gap: 12,
                background: '#fff',
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 9,
                  overflow: 'hidden',
                  border: '1px solid #F0F0F4',
                  flexShrink: 0,
                  background: '#F97316',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                  <path
                    d="M7 2C5 2 3 4 3 7C3 9 4 10.5 5 11.5L7 14L9 11.5C10 10.5 11 9 11 7C11 4 9 2 7 2Z"
                    fill="white"
                  />
                  <circle cx="7" cy="7" r="1.5" fill="#F97316" />
                </svg>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13.5, fontWeight: 500, color: '#0A0A0F' }}>
                  Senior Product Manager, FoodStorm{' '}
                  <span style={{ color: '#9898AC', fontWeight: 400 }}>· Instacart · Remote</span>
                </div>
                <div
                  style={{
                    fontSize: 11.5,
                    color: '#B0B0BC',
                    marginTop: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 3,
                      background: '#F9FAFB',
                      border: '1px solid #E5E7EB',
                      borderRadius: 100,
                      padding: '1px 7px',
                      fontSize: 10.5,
                      color: '#9CA3AF',
                      fontWeight: 500,
                    }}
                  >
                    ○ Let breathe
                  </span>
                  <span>Job · 23h ago</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    border: '1px solid #E8E8EE',
                    borderRadius: 7,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                    fontWeight: 600,
                    color: '#0A0A0F',
                  }}
                >
                  3
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRANSITION BAND ── */}
      <div className="transition-band">
        <div className="transition-inner">
          <div className="ti-left">
            <div className="ti-eyebrow">Two products. One system.</div>
            <div className="ti-text">
              <strong>p(om)</strong> is personal opportunity management — for job seekers, AEs, and
              early founders managing their own pipeline. <strong>OM</strong> is the company layer —
              for Seed→Series A founders whose personal pipeline has become a company problem.
            </div>
          </div>
          <div className="ti-arrow">
            p(om) → OM
            <svg width="28" height="10" viewBox="0 0 28 10" fill="none">
              <path
                d="M1 5h26M22 1l5 4-5 4"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* ── POM SECTION ── */}
      <div className="light" id="pom">
        <div className="wrap reveal">
          <div className="section-product-label spl-pom">
            p(om) · Personal Opportunity Management
          </div>
          <h2>
            Not every opportunity
            <br />
            deserves equal attention.
          </h2>
          <p className="section-desc">
            Most people treat everything in their pipeline the same. p(om) doesn't. It learns who's
            in the 5% ready to move now — and tells you exactly what to do with the rest while you
            focus on what matters.
          </p>

          <div className="personas">
            <div className="p-pill active">All opportunities</div>
            <div className="p-pill">🏢 Job seekers</div>
            <div className="p-pill">💼 Account executives</div>
            <div className="p-pill">⚡ Early-stage founders</div>
            <div className="p-pill">🎯 Freelancers &amp; gigs</div>
          </div>

          <div className="tam-grid">
            <div className="tam-cell">
              <div className="tam-num">
                5<span className="tam-pct-pom">%</span>
              </div>
              <div className="tam-label">Ready now</div>
              <div className="tam-desc">
                High intent, active engagement, clear next step. These opportunities need your
                attention today — not next week.
              </div>
              <div className="tam-tag tg">
                <div className="td"></div>Act immediately
              </div>
            </div>
            <div className="tam-cell">
              <div className="tam-num">
                35<span style={{ fontSize: 14, color: 'var(--mid)' }}>%</span>
              </div>
              <div className="tam-label">Needs nurturing</div>
              <div className="tam-desc">
                Interested but not ready. p(om) tracks the right moment to re-engage — without
                pushing so hard you burn it.
              </div>
              <div className="tam-tag ta">
                <div className="td"></div>Stay in orbit
              </div>
            </div>
            <div className="tam-cell">
              <div className="tam-num">
                60<span style={{ fontSize: 14, color: 'var(--mid)' }}>%</span>
              </div>
              <div className="tam-label">Not right now</div>
              <div className="tam-desc">
                Wrong timing, wrong fit, genuinely cold. Stop burning energy here. p(om) handles the
                watch so you don't have to.
              </div>
              <div className="tam-tag tf">
                <div className="td"></div>Let it breathe
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── POM FEATURES ── */}
      <div className="light-alt reveal">
        <div className="wrap">
          <div className="split">
            <div>
              <div className="eyebrow">How p(om) works</div>
              <h2>
                Opportunity management
                <br />
                that learns how you win
              </h2>
              <p className="section-desc">
                p(om) doesn't just rank your opportunities once. It learns your patterns — who
                responds to you, what moves your deals, what a real opportunity looks like for you
                specifically. It gets sharper every week.
              </p>
              <div className="feat-list">
                <div className="feat-row">
                  <div className="feat-icon">🎯</div>
                  <div>
                    <div className="feat-title">Clarity scoring</div>
                    <div className="feat-desc">
                      Every opportunity scored by engagement, timing, and fit. No more gut-feel
                      prioritisation across jobs, deals, and gigs.
                    </div>
                  </div>
                </div>
                <div className="feat-row">
                  <div className="feat-icon">🧠</div>
                  <div>
                    <div className="feat-title">Learns your patterns</div>
                    <div className="feat-desc">
                      The more you use p(om), the more precise it gets. It learns who's genuinely
                      interested vs. going quiet — for you specifically.
                    </div>
                  </div>
                </div>
                <div className="feat-row">
                  <div className="feat-icon">🗓</div>
                  <div>
                    <div className="feat-title">Meeting intelligence</div>
                    <div className="feat-desc">
                      Pre-meeting context on every person you're talking to. Know the room before you
                      walk in.
                    </div>
                  </div>
                </div>
                <div className="feat-row">
                  <div className="feat-icon">✍️</div>
                  <div>
                    <div className="feat-title">Dynamic outreach</div>
                    <div className="feat-desc">
                      Tailored outreach generated from your own history and context. Not templates —
                      your actual intelligence, applied.
                    </div>
                  </div>
                </div>
                <div className="feat-row">
                  <div className="feat-icon">🔀</div>
                  <div>
                    <div className="feat-title">Multiple pipelines</div>
                    <div className="feat-desc">
                      Job search, sales deals, freelance gigs — manage every opportunity type in one
                      place without losing clarity between them.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mini-ui">
                <div className="mini-header">
                  <span className="mh-label">Opportunities · Today</span>
                  <span className="mh-badge-pom">p(om)</span>
                </div>
                <div className="mini-row">
                  <div className="m-dot dg"></div>
                  <div className="m-main">
                    <div className="m-name">Stripe · GTM Lead EMEA</div>
                    <div className="m-sub">Job · replied 2h ago · 3 mutual</div>
                  </div>
                  <div className="m-score sg">9.2</div>
                </div>
                <div className="mini-row">
                  <div className="m-dot dg"></div>
                  <div className="m-main">
                    <div className="m-name">Decagon · Sales Gig</div>
                    <div className="m-sub">Gig · active thread · warm</div>
                  </div>
                  <div className="m-score sg">7.8</div>
                </div>
                <div className="mini-row">
                  <div className="m-dot da"></div>
                  <div className="m-main">
                    <div className="m-name">Plaid · Account Executive</div>
                    <div className="m-sub">Job · 10d quiet · nurture phase</div>
                  </div>
                  <div className="m-score sa">4.9</div>
                </div>
                <div className="mini-row">
                  <div className="m-dot da"></div>
                  <div className="m-main">
                    <div className="m-name">Notion · Partnership Deal</div>
                    <div className="m-sub">Sale · not ready · 3 weeks out</div>
                  </div>
                  <div className="m-score sa">4.1</div>
                </div>
                <div className="mini-row">
                  <div className="m-dot dr"></div>
                  <div className="m-main">
                    <div className="m-name">HubSpot · Sales Partner</div>
                    <div className="m-sub">Sale · cold · let breathe</div>
                  </div>
                  <div className="m-score sr">1.4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── OM DIVIDER ── */}
      <div className="om-divider reveal" id="om">
        <div className="om-divider-inner">
          <div className="od-left">
            <div className="od-product-tag">OM · Opportunity Management</div>
            <div className="od-title">
              Your CRM says $1M in pipeline.
              <br />
              <span className="dim">What's actually alive?</span>
            </div>
            <p className="od-desc">
              When your personal opportunities become a company pipeline — when you're a
              Seed→Series A founder and you can't tell which deals are real on Monday morning —
              that's when you need OM. The operating layer for your GTM, not another tool sitting on
              top of it.
            </p>
          </div>
          <div className="od-right">
            <div className="od-stat">
              <div>
                <div className="od-stat-num">5%</div>
                <div className="od-stat-label">
                  of your pipeline
                  <br />
                  is ready to close now
                </div>
              </div>
            </div>
            <div className="od-stat">
              <div>
                <div className="od-stat-num">~12k</div>
                <div className="od-stat-label">
                  Seed→Series A founders
                  <br />
                  with this exact problem
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── OM TAM ── */}
      <div className="light reveal">
        <div className="wrap">
          <div className="section-product-label spl-om">
            OM · Company Opportunity Management
          </div>
          <h2>
            "My CRM says I have $1M in pipeline.
            <br />I have no idea which deals are actually alive."
          </h2>
          <p className="section-desc">
            Every Seed→Series A founder doing founder-led sales feels this on Monday morning. OM
            fixes it. It scores every opportunity in your pipeline by how real it actually is — and
            tells you exactly where to put your energy this week.
          </p>

          <div className="tam-grid">
            <div className="tam-cell">
              <div className="tam-num">
                5<span className="tam-pct-om">%</span>
              </div>
              <div className="tam-label">Ready to close</div>
              <div className="tam-desc">
                Active engagement, confirmed budget, real stakeholders. Live opportunities. Act this
                week or lose them.
              </div>
              <div className="tam-tag tg">
                <div className="td"></div>Close now
              </div>
            </div>
            <div className="tam-cell">
              <div className="tam-num">
                35<span style={{ fontSize: 14, color: 'var(--mid)' }}>%</span>
              </div>
              <div className="tam-label">Real but not ready</div>
              <div className="tam-desc">
                Genuine interest, wrong timing. These opportunities need to stay warm — not pushed.
                OM tracks exactly when the window opens.
              </div>
              <div className="tam-tag ta">
                <div className="td"></div>Nurture, don't push
              </div>
            </div>
            <div className="tam-cell">
              <div className="tam-num">
                60<span style={{ fontSize: 14, color: 'var(--mid)' }}>%</span>
              </div>
              <div className="tam-label">Dead or stale</div>
              <div className="tam-desc">
                These are the deals clogging your CRM and your head on Monday morning. OM identifies
                them so you stop wasting cycles.
              </div>
              <div className="tam-tag tf">
                <div className="td"></div>Stop burning energy
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── OM FEATURES ── */}
      <div className="light-alt reveal">
        <div className="wrap">
          <div className="split split-r">
            <div>
              <div className="eyebrow">How OM works</div>
              <h2>
                Opportunity management that
                <br />
                learns your pipeline over time
              </h2>
              <p className="section-desc">
                OM isn't a dashboard you maintain. It reads the activity that already exists — email
                threads, calendar meetings, deal history — and builds a live picture of which
                opportunities are real. No CRM required to start.
              </p>
              <div className="feat-list">
                <div className="feat-row">
                  <div className="feat-icon">🎯</div>
                  <div>
                    <div className="feat-title">Opportunity scoring</div>
                    <div className="feat-desc">
                      Every deal scored by how real the opportunity actually is — engagement depth,
                      stakeholder activity, timing. Not by what your CRM stage says.
                    </div>
                  </div>
                </div>
                <div className="feat-row">
                  <div className="feat-icon">📬</div>
                  <div>
                    <div className="feat-title">One action per opportunity</div>
                    <div className="feat-desc">
                      Not a list of insights to interpret. One clear next step per deal, delivered to
                      your inbox weekly. Built for founders, not analysts.
                    </div>
                  </div>
                </div>
                <div className="feat-row">
                  <div className="feat-icon">🧠</div>
                  <div>
                    <div className="feat-title">Learns what your wins look like</div>
                    <div className="feat-desc">
                      OM learns the patterns specific to your pipeline — what a real opportunity
                      looks like for your product, your market, your cycle. Improves continuously.
                    </div>
                  </div>
                </div>
                <div className="feat-row">
                  <div className="feat-icon">🔌</div>
                  <div>
                    <div className="feat-title">Works with what you already have</div>
                    <div className="feat-desc">
                      HubSpot, Salesforce, a CSV, or nothing at all. OM doesn't require a clean CRM.
                      It finds the opportunity in the mess.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mini-ui">
                <div className="mini-header">
                  <span className="mh-label">Pipeline · This week</span>
                  <span className="mh-badge-om">OM</span>
                </div>
                <div className="mini-row">
                  <div className="m-dot dg"></div>
                  <div className="m-main">
                    <div className="m-name">Lucia Protocol · $24k</div>
                    <div className="m-sub">Ready · close this week</div>
                  </div>
                  <div className="m-score sg">9.4</div>
                </div>
                <div className="mini-row">
                  <div className="m-dot dg"></div>
                  <div className="m-main">
                    <div className="m-name">FinTech Co · $18k</div>
                    <div className="m-sub">Building · 2 stakeholders added</div>
                  </div>
                  <div className="m-score sg">7.9</div>
                </div>
                <div className="mini-row">
                  <div className="m-dot da"></div>
                  <div className="m-main">
                    <div className="m-name">SaaS Corp · $12k</div>
                    <div className="m-sub">Cooling · nurture champion</div>
                  </div>
                  <div className="m-score sa">4.6</div>
                </div>
                <div className="mini-row">
                  <div className="m-dot da"></div>
                  <div className="m-main">
                    <div className="m-name">StartupX · $9k</div>
                    <div className="m-sub">Not in window · let breathe</div>
                  </div>
                  <div className="m-score sa">3.8</div>
                </div>
                <div className="mini-row">
                  <div className="m-dot dr"></div>
                  <div className="m-main">
                    <div className="m-name">Agency · $8k</div>
                    <div className="m-sub">Dead · 21d no response</div>
                  </div>
                  <div className="m-score sr">1.2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── SIGN IN ── */}
      <div
        style={{
          background: 'var(--surface)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}
        id="signin"
      >
        <div
          style={{
            maxWidth: 1040,
            margin: '0 auto',
            padding: '64px 40px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.07em',
                textTransform: 'uppercase' as const,
                color: 'var(--faint)',
                marginBottom: 14,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <span
                style={{ display: 'block', width: 20, height: 1, background: 'var(--border)' }}
              ></span>
              Already have an account
            </div>
            <h2
              style={{
                fontSize: 'clamp(22px,3vw,32px)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.12,
                color: 'var(--ink)',
                marginBottom: 10,
              }}
            >
              Welcome back.
            </h2>
            <p
              style={{
                fontSize: 15,
                fontWeight: 300,
                color: 'var(--mid)',
                lineHeight: 1.7,
              }}
            >
              Sign in to your p(om) or OM account to pick up where you left off.
            </p>
          </div>
          <div
            style={{
              background: 'var(--white)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                padding: '20px 24px 16px',
                borderBottom: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>Sign in</span>
              <div style={{ display: 'flex', gap: 6 }}>
                <div
                  style={{
                    fontFamily: "'Geist',monospace",
                    fontSize: 11,
                    fontWeight: 600,
                    color: 'var(--pom-accent)',
                    background: 'var(--pom-lt)',
                    border: '1px solid var(--pom-bd)',
                    borderRadius: 5,
                    padding: '2px 7px',
                  }}
                >
                  p(om)
                </div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: 'var(--om-accent)',
                    background: 'var(--om-lt)',
                    border: '1px solid var(--om-bd)',
                    borderRadius: 5,
                    padding: '2px 7px',
                  }}
                >
                  OM
                </div>
              </div>
            </div>
            {!signInSuccess ? (
              <div style={{ padding: '20px 24px 24px' }}>
                <form onSubmit={handleSignIn}>
                  <div style={{ marginBottom: 13 }}>
                    <label
                      style={{
                        display: 'block',
                        fontSize: 12,
                        fontWeight: 500,
                        color: 'var(--mid)',
                        marginBottom: 5,
                      }}
                    >
                      Email address
                    </label>
                    <input
                      style={{
                        width: '100%',
                        height: 40,
                        padding: '0 12px',
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        borderRadius: 8,
                        fontFamily: "'Geist',sans-serif",
                        fontSize: 14,
                        color: 'var(--ink)',
                        outline: 'none',
                        transition: 'border-color 0.15s, box-shadow 0.15s',
                      }}
                      type="email"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                  <div style={{ marginBottom: 4 }}>
                    <label
                      style={{
                        display: 'block',
                        fontSize: 12,
                        fontWeight: 500,
                        color: 'var(--mid)',
                        marginBottom: 5,
                      }}
                    >
                      Password
                    </label>
                    <input
                      style={{
                        width: '100%',
                        height: 40,
                        padding: '0 12px',
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        borderRadius: 8,
                        fontFamily: "'Geist',sans-serif",
                        fontSize: 14,
                        color: 'var(--ink)',
                        outline: 'none',
                        transition: 'border-color 0.15s, box-shadow 0.15s',
                      }}
                      type="password"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  <div style={{ textAlign: 'right' as const, marginBottom: 18 }}>
                    <a
                      href="#"
                      style={{
                        fontSize: 12,
                        color: 'var(--faint)',
                        textDecoration: 'none',
                        transition: 'color 0.15s',
                      }}
                    >
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      height: 42,
                      background: 'var(--ink)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 8,
                      fontFamily: "'Geist',sans-serif",
                      fontSize: 14,
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.15s',
                    }}
                  >
                    Sign in to your account
                  </button>
                </form>
                <div
                  style={{
                    marginTop: 16,
                    paddingTop: 16,
                    borderTop: '1px solid var(--border)',
                    textAlign: 'center' as const,
                    fontSize: 12,
                    color: 'var(--faint)',
                  }}
                >
                  Don't have an account?{' '}
                  <a
                    href="#pom-signup"
                    style={{
                      color: 'var(--pom-accent)',
                      textDecoration: 'none',
                      fontWeight: 500,
                    }}
                  >
                    Get started free →
                  </a>
                </div>
              </div>
            ) : (
              <div style={{ padding: '32px 24px', textAlign: 'center' as const }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'var(--green-lt)',
                    border: '1px solid rgba(5,150,105,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 14px',
                    fontSize: 18,
                  }}
                >
                  ✓
                </div>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: 'var(--ink)',
                    marginBottom: 6,
                  }}
                >
                  Signing you in
                </div>
                <p style={{ fontSize: 13, color: 'var(--mid)' }}>
                  Redirecting to your dashboard...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── PRICING / SIGNUP ── */}
      <div className="light reveal" id="pom-signup">
        <div style={{ maxWidth: 1040, margin: '0 auto', padding: '88px 40px 48px' }}>
          {/* header */}
          <div className="eyebrow">Pricing</div>
          <h2 style={{ marginBottom: 12 }}>
            Start with p(om).
            <br />
            Graduate to OM.
          </h2>
          <p
            style={{
              fontSize: 16,
              fontWeight: 300,
              color: 'var(--mid)',
              lineHeight: 1.75,
              maxWidth: 540,
              marginBottom: 52,
            }}
          >
            p(om) is where every opportunity begins. When those opportunities become a company
            pipeline that needs managing at scale, OM unlocks.
          </p>

          {/* three tier table */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: 1,
              background: 'var(--border)',
              border: '1px solid var(--border)',
              borderRadius: 14,
              overflow: 'hidden',
              marginBottom: 20,
            }}
          >
            {/* p(om) Free */}
            <div style={{ background: 'var(--white)', padding: '28px 24px' }}>
              <div
                style={{
                  fontFamily: "'Geist',monospace",
                  fontSize: 11,
                  fontWeight: 600,
                  color: 'var(--pom-accent)',
                  background: 'var(--pom-lt)',
                  border: '1px solid var(--pom-bd)',
                  borderRadius: 5,
                  padding: '2px 8px',
                  display: 'inline-block',
                  marginBottom: 16,
                }}
              >
                p(om) · Free
              </div>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  color: 'var(--ink)',
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                $0
              </div>
              <div style={{ fontSize: 12, color: 'var(--faint)', marginBottom: 20 }}>
                Start immediately
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 8,
                    fontSize: 13,
                    color: 'var(--mid)',
                  }}
                >
                  <span style={{ color: 'var(--green)', flexShrink: 0, marginTop: 1 }}>✓</span>
                  Browse &amp; track opportunities
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 8,
                    fontSize: 13,
                    color: 'var(--mid)',
                  }}
                >
                  <span style={{ color: 'var(--green)', flexShrink: 0, marginTop: 1 }}>✓</span>
                  Basic pipeline management
                </div>
                <div style={{ height: 1, background: 'var(--border)', margin: '4px 0' }}></div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 8,
                    fontSize: 13,
                    color: 'var(--faint)',
                  }}
                >
                  <span style={{ color: 'var(--border)', flexShrink: 0, marginTop: 1 }}>—</span>
                  Opportunity ranking
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 8,
                    fontSize: 13,
                    color: 'var(--faint)',
                  }}
                >
                  <span style={{ color: 'var(--border)', flexShrink: 0, marginTop: 1 }}>—</span>
                  Resume generation
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 8,
                    fontSize: 13,
                    color: 'var(--faint)',
                  }}
                >
                  <span style={{ color: 'var(--border)', flexShrink: 0, marginTop: 1 }}>—</span>
                  Deep profile analysis
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 8,
                    fontSize: 13,
                    color: 'var(--faint)',
                  }}
                >
                  <span style={{ color: 'var(--border)', flexShrink: 0, marginTop: 1 }}>—</span>
                  Automated applications
                </div>
              </div>
            </div>

            {/* p(om) Full - highlighted */}
            <div style={{ background: 'var(--white)', padding: '28px 24px', position: 'relative' as const }}>
              <div
                style={{
                  position: 'absolute' as const,
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: 'var(--pom-accent)',
                }}
              ></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16 }}>
                <div
                  style={{
                    fontFamily: "'Geist',monospace",
                    fontSize: 11,
                    fontWeight: 600,
                    color: 'var(--pom-accent)',
                    background: 'var(--pom-lt)',
                    border: '1px solid var(--pom-bd)',
                    borderRadius: 5,
                    padding: '2px 8px',
                  }}
                >
                  p(om) · Full
                </div>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: '#fff',
                    background: 'var(--pom-accent)',
                    borderRadius: 4,
                    padding: '2px 7px',
                    letterSpacing: '0.02em',
                  }}
                >
                  Popular
                </div>
              </div>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  color: 'var(--ink)',
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                $50
                <span style={{ fontSize: 14, fontWeight: 400, color: 'var(--faint)' }}>/mo</span>
              </div>
              <div style={{ fontSize: 12, color: 'var(--faint)', marginBottom: 20 }}>
                Everything you need to win
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 8,
                    fontSize: 13,
                    color: 'var(--mid)',
                  }}
                >
                  <span style={{ color: 'var(--green)', flexShrink: 0, marginTop: 1 }}>✓</span>
                  Everything in free
                </div>
                <div style={{ height: 1, background: 'var(--border)', margin: '4px 0' }}></div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 8,
                    fontSize: 13,
                    color: 'var(--mid)',
                  }}
                >
                  <span style={{ color: 'var(--green)', flexShrink: 0, marginTop: 1 }}>✓</span>
                  Opportunity ranking &amp; scores
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 8,
                    fontSize: 13,
                    color: 'var(--mid)',
                  }}
                >
                  <span style={{ color: 'var(--green)', flexShrink: 0, marginTop: 1 }}>✓</span>
                  Resume generation per opportunity
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 8,
                    fontSize: 13,
                    color: 'var(--mid)',
                  }}
                >
                  <span style={{ color: 'var(--green)', flexShrink: 0, marginTop: 1 }}>✓</span>
                  Deep profile &amp; background analysis
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 8,
                    fontSize: 13,
                    color: 'var(--mid)',
                  }}
                >
                  <span style={{ color: 'var(--green)', flexShrink: 0, marginTop: 1 }}>✓</span>
                  Relevant fit discovery
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 8,
                    fontSize: 13,
                    color: 'var(--mid)',
                  }}
                >
                  <span style={{ color: 'var(--green)', flexShrink: 0, marginTop: 1 }}>✓</span>
                  Automated job applications
                </div>
              </div>
            </div>

            {/* OM Company */}
            <div style={{ background: 'var(--ink)', padding: '28px 24px', position: 'relative' as const }}>
              <div
                style={{
                  position: 'absolute' as const,
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: 'var(--om-accent)',
                }}
              ></div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: 'var(--om-accent)',
                  background: 'var(--om-lt)',
                  border: '1px solid var(--om-bd)',
                  borderRadius: 5,
                  padding: '2px 8px',
                  display: 'inline-block',
                  marginBottom: 16,
                }}
              >
                OM · Company
              </div>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  color: '#fff',
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                Waitlist
              </div>
              <div
                style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}
              >
                When pipeline becomes a company problem
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 8,
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.45)',
                  }}
                >
                  <span style={{ color: 'var(--om-accent)', flexShrink: 0, marginTop: 1 }}>
                    ✓
                  </span>
                  Everything in p(om)
                </div>
                <div
                  style={{
                    height: 1,
                    background: 'rgba(255,255,255,0.07)',
                    margin: '4px 0',
                  }}
                ></div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 8,
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.45)',
                  }}
                >
                  <span style={{ color: 'var(--om-accent)', flexShrink: 0, marginTop: 1 }}>
                    ✓
                  </span>
                  Company pipeline management
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 8,
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.45)',
                  }}
                >
                  <span style={{ color: 'var(--om-accent)', flexShrink: 0, marginTop: 1 }}>
                    ✓
                  </span>
                  Deal health scoring
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 8,
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.45)',
                  }}
                >
                  <span style={{ color: 'var(--om-accent)', flexShrink: 0, marginTop: 1 }}>
                    ✓
                  </span>
                  One action per deal, to your inbox
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 8,
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.45)',
                  }}
                >
                  <span style={{ color: 'var(--om-accent)', flexShrink: 0, marginTop: 1 }}>
                    ✓
                  </span>
                  CRM integration &amp; activity sync
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 8,
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.45)',
                  }}
                >
                  <span style={{ color: 'var(--om-accent)', flexShrink: 0, marginTop: 1 }}>
                    ✓
                  </span>
                  Learns your GTM over time
                </div>
              </div>
            </div>
          </div>

          {/* progression label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              fontSize: 12,
              color: 'var(--faint)',
              marginBottom: 56,
            }}
          >
            <span>Start free</span>
            <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
              <path
                d="M1 4h18M15 1l4 3-4 3"
                stroke="#C8C8D4"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Unlock full p(om) at $50/mo</span>
            <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
              <path
                d="M1 4h18M15 1l4 3-4 3"
                stroke="#C8C8D4"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Graduate to OM when pipeline scales</span>
          </div>

          {/* two signup forms side by side */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {/* p(om) signup */}
            <div
              style={{
                border: '1px solid var(--border)',
                borderRadius: 12,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  padding: '24px 24px 20px',
                  background: 'var(--white)',
                  borderBottom: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>
                  Get started with p(om)
                </div>
                <div
                  style={{
                    fontFamily: "'Geist',monospace",
                    fontSize: 11,
                    fontWeight: 600,
                    color: 'var(--pom-accent)',
                    background: 'var(--pom-lt)',
                    border: '1px solid var(--pom-bd)',
                    borderRadius: 5,
                    padding: '2px 8px',
                  }}
                >
                  Free
                </div>
              </div>
              {!pomSuccess ? (
                <div style={{ padding: '20px 24px 24px', background: 'var(--surface)' }}>
                  <form onSubmit={handlePomSubmit}>
                    <div className="field">
                      <label className="field-label">Full name</label>
                      <input
                        className="field-input"
                        type="text"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="field">
                      <label className="field-label">Email address</label>
                      <input
                        className="field-input"
                        type="email"
                        placeholder="you@company.com"
                        required
                      />
                    </div>
                    <button type="submit" className="submit-btn submit-pom">
                      Create free account
                    </button>
                  </form>
                  <div className="form-note">
                    <div className="note-dot nd-open"></div>
                    Free · open access · no credit card
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    padding: '32px 24px',
                    textAlign: 'center' as const,
                    background: 'var(--surface)',
                  }}
                >
                  <div className="ss-icon ss-icon-pom">✓</div>
                  <div className="ss-title">You're in</div>
                  <p className="ss-desc">
                    Access link on its way. Something's already waiting for your attention.
                  </p>
                </div>
              )}
            </div>

            {/* OM waitlist */}
            <div
              style={{
                border: '1px solid #1a1a2e',
                borderRadius: 12,
                overflow: 'hidden',
                background: 'var(--ink)',
              }}
              id="om-waitlist"
            >
              <div
                style={{
                  padding: '24px 24px 20px',
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>
                  Join the OM waitlist
                </div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: 'var(--amber)',
                    background: 'rgba(217,119,6,0.1)',
                    border: '1px solid rgba(217,119,6,0.2)',
                    borderRadius: 5,
                    padding: '2px 8px',
                  }}
                >
                  Limited spots
                </div>
              </div>
              {!omSuccess ? (
                <div style={{ padding: '20px 24px 24px' }}>
                  <form onSubmit={handleOmSubmit}>
                    <div className="field">
                      <label
                        style={{
                          display: 'block',
                          fontSize: 12,
                          fontWeight: 500,
                          color: 'rgba(255,255,255,0.35)',
                          marginBottom: 5,
                        }}
                      >
                        Full name
                      </label>
                      <input
                        style={{
                          width: '100%',
                          height: 40,
                          padding: '0 12px',
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.12)',
                          borderRadius: 8,
                          fontFamily: "'Geist',sans-serif",
                          fontSize: 14,
                          color: '#fff',
                          outline: 'none',
                          transition: 'border-color 0.15s',
                        }}
                        type="text"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="field">
                      <label
                        style={{
                          display: 'block',
                          fontSize: 12,
                          fontWeight: 500,
                          color: 'rgba(255,255,255,0.35)',
                          marginBottom: 5,
                        }}
                      >
                        Work email
                      </label>
                      <input
                        style={{
                          width: '100%',
                          height: 40,
                          padding: '0 12px',
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.12)',
                          borderRadius: 8,
                          fontFamily: "'Geist',sans-serif",
                          fontSize: 14,
                          color: '#fff',
                          outline: 'none',
                          transition: 'border-color 0.15s',
                        }}
                        type="email"
                        placeholder="you@company.com"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      style={{
                        width: '100%',
                        height: 42,
                        marginTop: 18,
                        background: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.14)',
                        borderRadius: 8,
                        fontFamily: "'Geist',sans-serif",
                        fontSize: 14,
                        fontWeight: 600,
                        color: '#fff',
                        cursor: 'pointer',
                        transition: 'background 0.15s',
                      }}
                    >
                      Request a spot on OM
                    </button>
                  </form>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      marginTop: 12,
                      fontSize: 12,
                      color: 'rgba(255,255,255,0.22)',
                    }}
                  >
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: 'var(--amber)',
                        boxShadow: '0 0 6px rgba(217,119,6,0.4)',
                        flexShrink: 0,
                      }}
                    ></div>
                    Seed→Series A founders only · we'll reach out personally
                  </div>
                </div>
              ) : (
                <div style={{ padding: '40px 24px', textAlign: 'center' as const }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: 'var(--om-lt)',
                      border: '1px solid var(--om-bd)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 14px',
                      fontSize: 18,
                      color: 'var(--om-accent)',
                    }}
                  >
                    ✓
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: '#fff',
                      marginBottom: 6,
                    }}
                  >
                    You're on the list
                  </div>
                  <p
                    style={{
                      fontSize: 13,
                      color: 'rgba(255,255,255,0.35)',
                      lineHeight: 1.5,
                    }}
                  >
                    We'll reach out personally. We work with a small number of founders at a time —
                    if this is the right fit, we'll move fast.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
