import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type ContentFilter = 'all' | 'guides' | 'blog' | 'podcast' | 'events';

export default function BlogPage() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [filter, setFilter] = useState<ContentFilter>('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("on");
            entry.target.querySelectorAll(".reveal-child").forEach(c => c.classList.add("on"));
          }
        });
      },
      { threshold: 0.07 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function handleSubscribe() {
    if (!email.includes("@")) return;
    setSubscribed(true);
  }

  const filters: { key: ContentFilter; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'guides', label: 'Guides' },
    { key: 'blog', label: 'Blog' },
    { key: 'podcast', label: 'Podcast' },
    { key: 'events', label: 'Events' },
  ];

  return (
    <>
      {/* HERO */}
      <section className="hero-sub-page blog-hero">
        <div className="hero-inner">
          <div className="hero-eyebrow">OM World</div>
          <h1>
            All things pipeline.
          </h1>
          <p className="hero-sub">
            Guides, thinking, conversations, and events — everything we know about
            opportunity management, written down and shared.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <div className="wrap" style={{ maxWidth: 960, margin: "0 auto", padding: "64px 40px" }}>

        {/* FILTER TABS */}
        <div className="omw-filters reveal">
          {filters.map(f => (
            <button
              key={f.key}
              className={`omw-filter${filter === f.key ? ' active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* ── FEATURED POST ── */}
        {(filter === 'all' || filter === 'blog') && (
          <>
            <div className="eyebrow reveal" style={{ marginTop: 40 }}>Featured</div>
            <Link className="post-featured reveal" to="/blog/crm-lying-to-you">
              <div className="pf-top">
                <div className="pf-tag">OM &middot; Company pipeline</div>
                <div className="pf-title">
                  Your CRM is lying to you. Here&rsquo;s what&rsquo;s actually
                  happening in your pipeline.
                </div>
                <p className="pf-desc">
                  Most pipeline views show you what reps entered, not what&rsquo;s
                  real. We break down the gap and what to do about it.
                </p>
              </div>
              <div className="pf-bottom">
                <div className="pf-meta">
                  <span>Chloe Warnock</span>
                  <div className="pf-sep"></div>
                  <span>Mar 2026</span>
                  <div className="pf-sep"></div>
                  <span>5 min read</span>
                </div>
                <div className="pf-read">Read &rarr;</div>
              </div>
            </Link>
          </>
        )}

        {/* ── BLOG POSTS ── */}
        {(filter === 'all' || filter === 'blog') && (
          <>
            <div className="eyebrow reveal" style={{ marginTop: 48 }}>Blog</div>
            <div className="post-grid reveal">
              <Link className="post-card reveal-child delay-1" to="/blog/five-percent-rule">
                <div className="pc-top">
                  <div className="pc-tag tag-om">POM &middot; Personal</div>
                  <div className="pc-title">The 5% rule: why most of your opportunities aren&rsquo;t actually opportunities</div>
                  <p className="pc-desc">At any given moment, only 5% of the people in your pipeline are ready to move. Here&rsquo;s how to tell which ones.</p>
                </div>
                <div className="pc-bottom">
                  <div className="pc-meta">Mar 2026 &middot; 4 min</div>
                  <div className="pc-arrow">&rarr;</div>
                </div>
              </Link>

              <Link className="post-card reveal-child delay-2" to="/blog/founder-led-sales-1m-arr">
                <div className="pc-top">
                  <div className="pc-tag tag-gtm">GTM</div>
                  <div className="pc-title">What founder-led sales actually looks like at $1M ARR</div>
                  <p className="pc-desc">The chaos isn&rsquo;t a sign you&rsquo;re doing it wrong. It&rsquo;s a sign you&rsquo;ve hit the inflection point where clarity becomes the bottleneck.</p>
                </div>
                <div className="pc-bottom">
                  <div className="pc-meta">Feb 2026 &middot; 6 min</div>
                  <div className="pc-arrow">&rarr;</div>
                </div>
              </Link>

              <Link className="post-card reveal-child delay-3" to="/blog/monday-pipeline-anxiety">
                <div className="pc-top">
                  <div className="pc-tag tag-om">OM &middot; Company</div>
                  <div className="pc-title">Monday morning pipeline anxiety is a data problem, not a motivation problem</div>
                  <p className="pc-desc">The dread you feel looking at your CRM on Monday morning isn&rsquo;t about mindset. It&rsquo;s because your data isn&rsquo;t honest with you.</p>
                </div>
                <div className="pc-bottom">
                  <div className="pc-meta">Feb 2026 &middot; 3 min</div>
                  <div className="pc-arrow">&rarr;</div>
                </div>
              </Link>

              <Link className="post-card reveal-child delay-4" to="/blog/jobs-and-deals-same-problem">
                <div className="pc-top">
                  <div className="pc-tag tag-om">POM &middot; Personal</div>
                  <div className="pc-title">Why job applications and sales deals are the same problem</div>
                  <p className="pc-desc">A job application is an opportunity. A sales deal is an opportunity. The management system should be the same.</p>
                </div>
                <div className="pc-bottom">
                  <div className="pc-meta">Jan 2026 &middot; 4 min</div>
                  <div className="pc-arrow">&rarr;</div>
                </div>
              </Link>
            </div>
          </>
        )}

        {/* ── GUIDES ── */}
        {(filter === 'all' || filter === 'guides') && (
          <>
            <div className="eyebrow reveal" style={{ marginTop: 48 }}>Guides</div>
            <div className="post-grid reveal" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
              <div className="omw-placeholder-card reveal-child delay-1">
                <div className="omw-ph-icon">📖</div>
                <div className="omw-ph-title">Getting started with POM</div>
                <div className="omw-ph-desc">Set up your personal pipeline in 10 minutes — from import to your first clarity score.</div>
                <div className="omw-ph-badge">Coming soon</div>
              </div>
              <div className="omw-placeholder-card reveal-child delay-2">
                <div className="omw-ph-icon">🎯</div>
                <div className="omw-ph-title">The pipeline clarity playbook</div>
                <div className="omw-ph-desc">A step-by-step guide to sorting your pipeline into the 5%, 35%, and 60%.</div>
                <div className="omw-ph-badge">Coming soon</div>
              </div>
              <div className="omw-placeholder-card reveal-child delay-3">
                <div className="omw-ph-icon">🔌</div>
                <div className="omw-ph-title">Connecting your data sources</div>
                <div className="omw-ph-desc">HubSpot, Salesforce, CSV, email — how to feed OM the data it needs.</div>
                <div className="omw-ph-badge">Coming soon</div>
              </div>
            </div>
          </>
        )}

        {/* ── PODCAST ── */}
        {(filter === 'all' || filter === 'podcast') && (
          <>
            <div className="eyebrow reveal" style={{ marginTop: 48 }}>Podcast</div>
            <div className="omw-podcast-section reveal">
              <div className="omw-podcast-hero">
                <div className="omw-podcast-art">
                  <div style={{ fontSize: 32, marginBottom: 8 }}>🎙</div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)' }}>Pipeline Honest</div>
                  <div style={{ fontSize: 12, color: 'var(--faint)', marginTop: 4 }}>by OM</div>
                </div>
                <div className="omw-podcast-info">
                  <div style={{ fontSize: 18, fontWeight: 600, color: 'var(--ink)', marginBottom: 8 }}>
                    Conversations about what&rsquo;s actually happening in GTM.
                  </div>
                  <p style={{ fontSize: 14, color: 'var(--mid)', lineHeight: 1.7, marginBottom: 16 }}>
                    Founders, operators, and GTM leaders talking honestly about pipeline, opportunity management, and the gap between what your tools say and what&rsquo;s real.
                  </p>
                  <div className="omw-ph-badge">Coming soon</div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ── EVENTS ── */}
        {(filter === 'all' || filter === 'events') && (
          <>
            <div className="eyebrow reveal" style={{ marginTop: 48 }}>Events</div>
            <div className="post-grid reveal" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div className="omw-event-card reveal-child delay-1">
                <div className="omw-event-date">
                  <div className="omw-event-month">APR</div>
                  <div className="omw-event-day">13</div>
                </div>
                <div className="omw-event-info">
                  <div className="omw-event-title">AI Admin x Cafe</div>
                  <div className="omw-event-meta">San Francisco &middot; Workato speaking event</div>
                  <div className="omw-event-desc">Chloe presenting on dogfooding OM to automate GTM.</div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ── SOCIALS ── */}
        {(filter === 'all') && (
          <>
            <div className="eyebrow reveal" style={{ marginTop: 48 }}>Follow OM</div>
            <div className="omw-socials reveal">
              <a
                className="omw-social-card"
                href="https://www.linkedin.com/company/pipelineom/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect width="20" height="20" rx="4" fill="#0A66C2" />
                  <path d="M4 7.5h2.5V15H4V7.5ZM5.25 6.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5ZM8 7.5h2.3v1c.5-.7 1.3-1.2 2.3-1.2 2.5 0 3.4 1.4 3.4 3.7V15H13.5V11.2c0-1-.3-1.7-1.2-1.7-1 0-1.3.7-1.3 1.7V15H8V7.5Z" fill="white" />
                </svg>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>LinkedIn</div>
                  <div style={{ fontSize: 12, color: 'var(--faint)' }}>Product updates &amp; GTM thinking</div>
                </div>
                <span className="omw-social-arrow">&rarr;</span>
              </a>
            </div>
          </>
        )}

        {/* NEWSLETTER */}
        <div className="newsletter reveal" style={{ marginTop: 48 }}>
          <div className="nl-left">
            <div className="nl-title">Get new posts when they land</div>
            <p className="nl-desc">
              No digest. No weekly roundup. Just the post, when it&rsquo;s
              ready.
            </p>
          </div>
          <div className="nl-form">
            <input
              className="nl-input"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={subscribed}
            />
            <button
              className="nl-btn"
              onClick={handleSubscribe}
              style={subscribed ? { background: "#059669" } : undefined}
              disabled={subscribed}
            >
              {subscribed ? "\u2713 Subscribed" : "Subscribe"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
