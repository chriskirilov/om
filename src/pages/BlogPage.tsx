import { useEffect, useState } from "react";

export default function BlogPage() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("on");
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

  return (
    <>
      {/* HERO */}
      <section className="hero-sub-page blog-hero">
        <div className="hero-inner">
          <div className="hero-eyebrow">Blog</div>
          <h1>
            GTM thinking,
            <br />
            written down.
          </h1>
          <p className="hero-sub">
            How we think about opportunity management, pipeline clarity, and
            what it actually takes to build GTM systems that work.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <div className="wrap" style={{ maxWidth: 860, margin: "0 auto", padding: "80px 40px" }}>
        <div className="eyebrow reveal">Latest</div>

        {/* FEATURED POST */}
        <a className="post-featured reveal" href="#">
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
              Chloe Warnock
              <span className="pf-sep">&middot;</span>
              Mar 2026
              <span className="pf-sep">&middot;</span>
              5 min read
            </div>
            <div className="pf-read">Read &rarr;</div>
          </div>
        </a>

        {/* POST GRID */}
        <div className="post-grid reveal">
          <a className="post-card" href="#">
            <div className="post-tag tag-om">OM &middot; Personal</div>
            <div className="post-title">
              The 5% rule: why most of your opportunities aren&rsquo;t actually
              opportunities
            </div>
            <p className="post-desc">
              If you&rsquo;re treating every lead the same, you&rsquo;re
              wasting most of your time. Here&rsquo;s how to focus on what
              matters.
            </p>
            <div className="post-meta">Mar 2026 &middot; 4 min</div>
          </a>

          <a className="post-card" href="#">
            <div className="post-tag tag-gtm">GTM</div>
            <div className="post-title">
              What founder-led sales actually looks like at $1M ARR
            </div>
            <p className="post-desc">
              Spoiler: it&rsquo;s not about hiring a VP of Sales. It&rsquo;s
              about building a system before you build a team.
            </p>
            <div className="post-meta">Feb 2026 &middot; 6 min</div>
          </a>

          <a className="post-card" href="#">
            <div className="post-tag tag-om">OM &middot; Company</div>
            <div className="post-title">
              Monday morning pipeline anxiety is a data problem, not a
              motivation problem
            </div>
            <p className="post-desc">
              That sinking feeling when you open your CRM? It&rsquo;s not
              burnout. It&rsquo;s uncertainty. Here&rsquo;s the fix.
            </p>
            <div className="post-meta">Feb 2026 &middot; 3 min</div>
          </a>

          <a className="post-card" href="#">
            <div className="post-tag tag-om">OM &middot; Personal</div>
            <div className="post-title">
              Why job applications and sales deals are the same problem
            </div>
            <p className="post-desc">
              Both are pipelines. Both need tracking. Both fail when you
              &ldquo;wing it.&rdquo; A look at personal opportunity
              management.
            </p>
            <div className="post-meta">Jan 2026 &middot; 4 min</div>
          </a>
        </div>

        {/* NEWSLETTER */}
        <div className="newsletter reveal">
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
