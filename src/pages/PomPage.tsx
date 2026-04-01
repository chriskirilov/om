import { useEffect, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';

export default function PomPage() {
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
            POM manages your personal opportunities — jobs, deals, gigs, pipeline. Know what's real. Act before it isn't.
          </p>

          <div className="hero-ctas">
            <a href="#waitlist" className="cta-main">
              Join the waitlist
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
            <a href="#how-it-works" className="cta-ghost">
              See how it works ↓
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
            <div style={{ display: 'flex', alignItems: 'center', padding: '11px 20px', gap: 12, borderBottom: '1px solid #F5F5F8', background: '#fff' }}>
              <div style={{ width: 34, height: 34, borderRadius: 9, overflow: 'hidden', border: '1px solid #F0F0F4', flexShrink: 0, background: '#635BFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M7.2 6.2c0-.7.6-1 1.5-1 1.3 0 3 .4 4.3 1.1V3.1C11.7 2.4 10.4 2 8.7 2 5.5 2 3.3 3.7 3.3 6.4c0 4.2 5.8 3.5 5.8 5.3 0 .8-.7 1.1-1.7 1.1-1.5 0-3.4-.6-4.9-1.4v3.2c1.5.7 3.1 1 4.9 1 3.3 0 5.6-1.6 5.6-4.4.1-4.5-5.8-3.7-5.8-5.5z" fill="white" />
                </svg>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13.5, fontWeight: 500, color: '#0A0A0F' }}>
                  Senior GTM Lead, EMEA <span style={{ color: '#9898AC', fontWeight: 400 }}>· Stripe · Remote</span>
                </div>
                <div style={{ fontSize: 11.5, color: '#B0B0BC', marginTop: 2, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 100, padding: '1px 7px', fontSize: 10.5, color: '#059669', fontWeight: 500 }}>● Ready</span>
                  <span>Job · 3 mutual connections · 2h ago</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
                <div style={{ width: 28, height: 28, border: '1px solid #E8E8EE', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="10" height="13" viewBox="0 0 10 13" fill="none">
                    <path d="M5.5 1L1 7.5H5L4.5 12L9 5.5H5L5.5 1Z" fill="#F59E0B" stroke="#F59E0B" strokeWidth="0.5" strokeLinejoin="round" />
                  </svg>
                </div>
                <div style={{ width: 28, height: 28, border: '1px solid #E8E8EE', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600, color: '#0A0A0F' }}>9</div>
              </div>
            </div>

            {/* Row 2 - Decagon */}
            <div style={{ display: 'flex', alignItems: 'center', padding: '11px 20px', gap: 12, borderBottom: '1px solid #F5F5F8', background: '#fff' }}>
              <div style={{ width: 34, height: 34, borderRadius: 9, overflow: 'hidden', border: '1px solid #F0F0F4', flexShrink: 0, background: '#1A1A2E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#fff', fontFamily: 'serif', fontStyle: 'italic' }}>D</span>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13.5, fontWeight: 500, color: '#0A0A0F' }}>
                  Senior Account Executive <span style={{ color: '#9898AC', fontWeight: 400 }}>· Decagon · San Francisco</span>
                </div>
                <div style={{ fontSize: 11.5, color: '#B0B0BC', marginTop: 2, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 100, padding: '1px 7px', fontSize: 10.5, color: '#059669', fontWeight: 500 }}>● Ready</span>
                  <span>Job · Active conversation · 15h ago</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
                <div style={{ width: 28, height: 28, border: '1px solid #E8E8EE', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600, color: '#0A0A0F' }}>8</div>
              </div>
            </div>

            {/* Row 3 - Plaid */}
            <div style={{ display: 'flex', alignItems: 'center', padding: '11px 20px', gap: 12, borderBottom: '1px solid #F5F5F8', background: '#fff' }}>
              <div style={{ width: 34, height: 34, borderRadius: 9, overflow: 'hidden', border: '1px solid #F0F0F4', flexShrink: 0, background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="5" cy="5" r="2" fill="white" />
                  <circle cx="11" cy="5" r="2" fill="white" />
                  <circle cx="5" cy="11" r="2" fill="white" />
                  <circle cx="11" cy="11" r="2" fill="white" />
                </svg>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13.5, fontWeight: 500, color: '#0A0A0F' }}>
                  Staff Product Manager, Applied AI <span style={{ color: '#9898AC', fontWeight: 400 }}>· Plaid · San Francisco</span>
                </div>
                <div style={{ fontSize: 11.5, color: '#B0B0BC', marginTop: 2, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: 100, padding: '1px 7px', fontSize: 10.5, color: '#D97706', fontWeight: 500 }}>◐ Nurture</span>
                  <span>Job · No contact in 10 days · 20h ago</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
                <div style={{ width: 28, height: 28, border: '1px solid #E8E8EE', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600, color: '#0A0A0F' }}>5</div>
              </div>
            </div>

            {/* Row 4 - HubSpot */}
            <div style={{ display: 'flex', alignItems: 'center', padding: '11px 20px', gap: 12, borderBottom: '1px solid #F5F5F8', background: '#fff' }}>
              <div style={{ width: 34, height: 34, borderRadius: 9, overflow: 'hidden', border: '1px solid #F0F0F4', flexShrink: 0, background: '#FF7A59', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="11" cy="5" r="2.5" fill="white" />
                  <circle cx="11" cy="5" r="1.2" fill="#FF7A59" />
                  <path d="M8.5 5H6C5 5 4 6 4 8C4 10 5 11 6 11H10C11 11 12 10 12 8.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none" />
                </svg>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13.5, fontWeight: 500, color: '#0A0A0F' }}>
                  Staff Product Manager, SalesHub <span style={{ color: '#9898AC', fontWeight: 400 }}>· HubSpot · Remote - USA</span>
                </div>
                <div style={{ fontSize: 11.5, color: '#B0B0BC', marginTop: 2, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 100, padding: '1px 7px', fontSize: 10.5, color: '#9CA3AF', fontWeight: 500 }}>○ Let breathe</span>
                  <span>Sale · 6 days ago</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
                <div style={{ width: 28, height: 28, border: '1px solid #E8E8EE', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600, color: '#0A0A0F' }}>2</div>
              </div>
            </div>

            {/* Row 5 - Instacart */}
            <div style={{ display: 'flex', alignItems: 'center', padding: '11px 20px', gap: 12, background: '#fff' }}>
              <div style={{ width: 34, height: 34, borderRadius: 9, overflow: 'hidden', border: '1px solid #F0F0F4', flexShrink: 0, background: '#F97316', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                  <path d="M7 2C5 2 3 4 3 7C3 9 4 10.5 5 11.5L7 14L9 11.5C10 10.5 11 9 11 7C11 4 9 2 7 2Z" fill="white" />
                  <circle cx="7" cy="7" r="1.5" fill="#F97316" />
                </svg>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13.5, fontWeight: 500, color: '#0A0A0F' }}>
                  Senior Product Manager, FoodStorm <span style={{ color: '#9898AC', fontWeight: 400 }}>· Instacart · Remote</span>
                </div>
                <div style={{ fontSize: 11.5, color: '#B0B0BC', marginTop: 2, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 100, padding: '1px 7px', fontSize: 10.5, color: '#9CA3AF', fontWeight: 500 }}>○ Let breathe</span>
                  <span>Job · 23h ago</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
                <div style={{ width: 28, height: 28, border: '1px solid #E8E8EE', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600, color: '#0A0A0F' }}>3</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRANSITION BAND ── */}
      <div className="transition-band">
        <div className="transition-inner">
          <div className="ti-left">
            <div className="ti-eyebrow">How it works</div>
            <div className="ti-text">
              POM starts with your personal pipeline and helps you focus on the opportunities that actually matter.
            </div>
          </div>
        </div>
      </div>

      <div className="section-fade dark-to-light" />

      {/* ── HOW IT WORKS SECTION ── */}
      <div className="light" id="how-it-works" style={{borderTop:'none'}}>
        <div className="wrap reveal">
          <div className="section-product-label spl-om">
            POM · Personal Opportunity Management
          </div>
          <h2>
            Not every opportunity
            <br />
            deserves equal attention.
          </h2>
          <p className="section-desc">
            Most people treat every lead the same. POM learns which ones are in the 5% ready to move — and tells you what to do with the rest.
          </p>

          <div className="personas">
            <div className="p-pill active">All opportunities</div>
            <div className="p-pill">Job seekers</div>
            <div className="p-pill">Account executives</div>
            <div className="p-pill">Early-stage founders</div>
            <div className="p-pill">Freelancers &amp; gigs</div>
          </div>

          <div className="tam-grid">
            <div className="tam-cell reveal-child delay-1">
              <div className="tam-num">
                5<span className="tam-pct-om">%</span>
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
            <div className="tam-cell reveal-child delay-2">
              <div className="tam-num">
                35<span style={{ fontSize: 14, color: 'var(--mid)' }}>%</span>
              </div>
              <div className="tam-label">Needs nurturing</div>
              <div className="tam-desc">
                Interested but not ready. POM tracks the right moment to re-engage — without
                pushing so hard you burn it.
              </div>
              <div className="tam-tag ta">
                <div className="td"></div>Stay in orbit
              </div>
            </div>
            <div className="tam-cell reveal-child delay-3">
              <div className="tam-num">
                60<span style={{ fontSize: 14, color: 'var(--mid)' }}>%</span>
              </div>
              <div className="tam-label">Not right now</div>
              <div className="tam-desc">
                Wrong timing, wrong fit, genuinely cold. Stop burning energy here. POM handles the
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
          <div className="split" style={{ marginBottom: 56 }}>
            <div>
              <div className="eyebrow">How POM works</div>
              <h2>
                Personal opportunity management
                <br />
                that learns how you win
              </h2>
              <p className="section-desc" style={{ marginBottom: 0 }}>
                POM reads your activity — emails, meetings, deal history — and builds a live picture of which opportunities are real.
              </p>
            </div>
            <div>
              <div className="mini-ui">
                <div className="mini-header">
                  <span className="mh-label">Opportunities · Today</span>
                  <span className="mh-badge-om">POM</span>
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

          <div className="feat-grid">
            <div className="feat-card reveal-child delay-1">
              <div className="feat-icon">🎯</div>
              <div className="feat-title">Clarity scoring</div>
              <div className="feat-desc">Every opportunity scored by engagement, timing, and fit — no more gut-feel prioritisation.</div>
            </div>
            <div className="feat-card reveal-child delay-2">
              <div className="feat-icon">🧠</div>
              <div className="feat-title">Learns your patterns</div>
              <div className="feat-desc">POM gets sharper every week, learning who's genuinely interested vs. going quiet.</div>
            </div>
            <div className="feat-card reveal-child delay-3">
              <div className="feat-icon">🗓</div>
              <div className="feat-title">Meeting intelligence</div>
              <div className="feat-desc">Pre-meeting context on every person you're talking to — know the room before you walk in.</div>
            </div>
            <div className="feat-card reveal-child delay-4">
              <div className="feat-icon">✍️</div>
              <div className="feat-title">Dynamic outreach</div>
              <div className="feat-desc">Tailored outreach generated from your own history and context, not generic templates.</div>
            </div>
            <div className="feat-card reveal-child delay-5">
              <div className="feat-icon">🔀</div>
              <div className="feat-title">Multiple pipelines</div>
              <div className="feat-desc">Jobs, deals, gigs — manage every opportunity type in one place without losing clarity.</div>
            </div>
            <div className="feat-card reveal-child delay-6">
              <div className="feat-icon">🔌</div>
              <div className="feat-title">Works with what you have</div>
              <div className="feat-desc">Your email, calendar, LinkedIn — POM finds the opportunity in the mess.</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PRICING + WAITLIST ── */}
      <div className="light reveal" id="waitlist">
        <div style={{ maxWidth: 1040, margin: '0 auto', padding: '88px 40px 48px' }}>
          <div className="eyebrow">Pricing</div>
          <h2 style={{ marginBottom: 12 }}>
            Start free.
            <br />
            Upgrade when ready.
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
            POM is free to start. When you need scoring, outreach, and full pipeline intelligence, upgrade to POM Full.
          </p>

          {/* pricing table */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 1,
              background: 'var(--border)',
              border: '1px solid var(--border)',
              borderRadius: 14,
              overflow: 'hidden',
              marginBottom: 56,
            }}
          >
            {/* POM Free */}
            <div style={{ background: 'var(--white)', padding: '28px 24px' }}>
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
                POM &middot; Free
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
                {['Browse & track opportunities', 'Basic pipeline management'].map((t) => (
                  <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: 'var(--mid)' }}>
                    <span style={{ color: 'var(--green)', flexShrink: 0, marginTop: 1 }}>&#10003;</span>
                    {t}
                  </div>
                ))}
                <div style={{ height: 1, background: 'var(--border)', margin: '4px 0' }} />
                {['Opportunity ranking', 'Resume generation', 'Deep profile analysis', 'Automated applications'].map((t) => (
                  <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: 'var(--faint)' }}>
                    <span style={{ color: 'var(--border)', flexShrink: 0, marginTop: 1 }}>&mdash;</span>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* POM Full */}
            <div style={{ background: 'var(--white)', padding: '28px 24px', position: 'relative' as const }}>
              <div style={{ position: 'absolute' as const, top: 0, left: 0, right: 0, height: 3, background: 'var(--om-accent)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16 }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: 'var(--om-accent)',
                    background: 'var(--om-lt)',
                    border: '1px solid var(--om-bd)',
                    borderRadius: 5,
                    padding: '2px 8px',
                  }}
                >
                  POM &middot; Full
                </div>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: '#fff',
                    background: 'var(--om-accent)',
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
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: 'var(--mid)' }}>
                  <span style={{ color: 'var(--green)', flexShrink: 0, marginTop: 1 }}>&#10003;</span>
                  Everything in free
                </div>
                <div style={{ height: 1, background: 'var(--border)', margin: '4px 0' }} />
                {['Opportunity ranking & scores', 'Resume generation per opportunity', 'Deep profile & background analysis', 'Relevant fit discovery', 'Automated job applications'].map((t) => (
                  <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: 'var(--mid)' }}>
                    <span style={{ color: 'var(--green)', flexShrink: 0, marginTop: 1 }}>&#10003;</span>
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* single waitlist form */}
          <div style={{ maxWidth: 480, margin: '0 auto', textAlign: 'center' as const }}>
            <h3 style={{ fontSize: 20, fontWeight: 600, color: 'var(--ink)', marginBottom: 8 }}>
              Get early access to POM
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
      </div>

      {/* ── GROWING A COMPANY? ── */}
      <div className="light reveal" style={{ borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', padding: '72px 40px', textAlign: 'center' as const }}>
          <div className="eyebrow">Growing a company?</div>
          <h2 style={{ marginBottom: 12 }}>
            When your pipeline becomes a team problem,
            <br />
            OM is ready.
          </h2>
          <p style={{ fontSize: 15, color: 'var(--mid)', lineHeight: 1.7, marginBottom: 32 }}>
            POM manages your personal opportunities. When you're running founder-led sales and your CRM can't tell you what's real, OM gives your company pipeline the same clarity.
          </p>
          <Link to="/om" className="cta-main">
            Learn about OM
            <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
              <path d="M1 5h11M7.5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
