import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BlogPostCrmLying() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-sub-page blog-hero">
        <div className="hero-inner" style={{ maxWidth: 720 }}>
          <div className="hero-eyebrow">OM &middot; Company pipeline</div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.15 }}>
            Your CRM is lying to you.
            <br />
            <span className="dim">Here&rsquo;s what&rsquo;s actually happening in your pipeline.</span>
          </h1>
          <p className="hero-sub" style={{ maxWidth: 540 }}>
            Most pipeline views show you what reps entered, not what&rsquo;s real. We break down the gap and what to do about it.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 24 }}>
            <div style={{
              width: 32, height: 32, borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.6)',
            }}>CW</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
              <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>Chloe Warnock</span>
              {' '}&middot; Mar 2026 &middot; 5 min read
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ── */}
      <article className="blog-article reveal">
        <div className="blog-article-inner">

          <p className="blog-lede">
            Open your CRM right now. Look at your pipeline number. Whatever it says — $800K, $1.2M, $3M — I can almost guarantee that number is wrong. Not slightly off. Fundamentally wrong.
          </p>

          <p>
            The gap between what your CRM reports and what&rsquo;s actually happening in your pipeline is the single most dangerous blind spot in founder-led sales. And the further you get from Seed stage, the more expensive that blind spot becomes.
          </p>

          <h2>The pipeline you see vs. the pipeline that exists</h2>

          <p>
            Your CRM shows you a view of reality that was typed in by a human — usually in a hurry, usually days after the relevant conversation, and usually with an optimistic bias. That&rsquo;s the structural problem. The data in your pipeline isn&rsquo;t observed. It&rsquo;s <em>reported</em>.
          </p>

          <p>
            Think about what that means. Every deal stage, every close date, every dollar amount — it reflects what someone <em>believed</em> at the time they updated the field. Not what&rsquo;s actually happening. The deal marked &ldquo;Proposal Sent&rdquo; three weeks ago? Nobody checked whether the champion actually circulated it. The $120K opportunity in &ldquo;Negotiation&rdquo;? The buyer went dark nine days ago, but the stage hasn&rsquo;t moved because no one wants to be the person who downgrades it.
          </p>

          <p>
            This isn&rsquo;t a people problem. It&rsquo;s a system problem. CRMs are designed to store what you tell them, not to tell you what&rsquo;s true.
          </p>

          <h2>The three lies your pipeline tells you</h2>

          <p>
            After working with founders at the Seed to Series A stage — the exact moment when pipeline clarity becomes existential — we see the same three patterns everywhere.
          </p>

          <h3>1. The deal count lie</h3>

          <p>
            Your pipeline says you have 40 active deals. In reality, you have maybe 15 that are genuinely in motion. The rest are zombie deals — conversations that ended weeks ago but never got closed out. They sit in your pipeline because removing them feels like admitting failure, and nobody scheduled the five minutes to do it.
          </p>

          <p>
            The cost isn&rsquo;t just a messy dashboard. It&rsquo;s that your forecasting, your hiring decisions, and your board narrative are all built on a denominator that&rsquo;s 2-3x too high.
          </p>

          <h3>2. The stage lie</h3>

          <p>
            Deal stages are supposed to represent buyer behaviour. &ldquo;Discovery&rdquo; means you&rsquo;ve had a qualifying conversation. &ldquo;Evaluation&rdquo; means they&rsquo;re actively comparing you. &ldquo;Negotiation&rdquo; means you&rsquo;re working on terms.
          </p>

          <p>
            In practice, stages represent the <em>last time someone updated the CRM</em>. A deal gets moved to &ldquo;Evaluation&rdquo; after a great second call — and then sits there for six weeks while the buyer goes silent. The stage doesn&rsquo;t move because nothing has technically happened. But everything has happened: the deal is dead, and nobody is looking at the actual behavioural data that would tell them.
          </p>

          <h3>3. The value lie</h3>

          <p>
            This is the most expensive one. Pipeline value is almost always anchored to the <em>best case</em> scenario. The $85K deal is priced at $85K because that&rsquo;s what the buyer said they had budget for in the first meeting. Six weeks later, procurement has cut it to $50K, but the CRM still says $85K because updating it means explaining the delta.
          </p>

          <p>
            Multiply this across 20 deals and your $1.2M pipeline is actually $600K. That&rsquo;s not a rounding error. That&rsquo;s the difference between making the quarter and missing it.
          </p>

          <h2>Why this matters more at Seed to Series A</h2>

          <p>
            At enterprise scale, pipeline inaccuracy is a forecasting problem. You have enough volume that the errors average out. You have RevOps teams running coverage models. You have QBRs and deal reviews and pipeline hygiene cadences.
          </p>

          <p>
            At Seed to Series A, you have none of that. You&rsquo;re the founder. You&rsquo;re the AE. You&rsquo;re probably the SDR too. Your pipeline is 15-40 deals, and each one represents a meaningful percentage of your revenue target. A single deal slipping or going dark can change your quarter — and you won&rsquo;t see it coming if your only view is what&rsquo;s in the CRM.
          </p>

          <p>
            This is also the stage where you&rsquo;re making the most consequential decisions. Should you hire that first AE? Do you have enough pipeline to justify the headcount? Can you tell your investors you&rsquo;re on track? Every one of these decisions depends on pipeline accuracy, and every one of them is being made on bad data.
          </p>

          <h2>The fix isn&rsquo;t better CRM hygiene</h2>

          <p>
            The instinctive response is discipline: update your CRM more often, run weekly pipeline reviews, enforce stage criteria. And yes, that helps. But it doesn&rsquo;t solve the structural problem, which is that the CRM only knows what you tell it.
          </p>

          <p>
            The actual fix is to look at the data that exists <em>outside</em> the CRM — the behavioural data that tells you what&rsquo;s really happening.
          </p>

          <ul>
            <li><strong>Email engagement patterns.</strong> Has the champion replied in the last 10 days? Are they forwarding your proposals internally? Did the thread go from 4 people to 1?</li>
            <li><strong>Calendar activity.</strong> Are meetings being scheduled and kept? Are new stakeholders joining? Did the follow-up meeting get cancelled and never rescheduled?</li>
            <li><strong>Response velocity.</strong> How quickly are they responding to you now vs. two weeks ago? A champion who used to reply same-day and now takes 72 hours is telling you something the CRM doesn&rsquo;t capture.</li>
            <li><strong>Multi-threading depth.</strong> Are you engaged with one person or four? Deals with a single thread of contact are fragile. If your champion gets pulled into another project, the deal dies with no backup.</li>
          </ul>

          <p>
            None of this lives in your CRM. All of it is more predictive of deal outcome than whatever stage someone typed in.
          </p>

          <h2>What clarity actually looks like</h2>

          <p>
            Imagine opening your pipeline on Monday morning and seeing this instead of a stage label:
          </p>

          {/* Mini-UI inline */}
          <div className="mini-ui" style={{ maxWidth: 480, margin: '32px auto' }}>
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

          <p>
            That&rsquo;s not a view built on what someone typed. It&rsquo;s built on what actually happened — email reply patterns, meeting attendance, engagement velocity. The score isn&rsquo;t an opinion. It&rsquo;s a reading of real behaviour.
          </p>

          <p>
            The CloudSync deal says &ldquo;Negotiation&rdquo; in your CRM. But OM sees that the champion left the company two weeks ago and nobody on their side has opened your last three emails. The score is 1.8. That&rsquo;s not pessimism. That&rsquo;s honesty.
          </p>

          <h2>Start with what you can see today</h2>

          <p>
            You don&rsquo;t need a new tool to start fixing this. Here&rsquo;s what you can do this week:
          </p>

          <ol>
            <li><strong>Audit for zombies.</strong> Go through every deal in your pipeline and ask: &ldquo;Has this person responded to anything in the last 14 days?&rdquo; If not, it&rsquo;s not active. Move it or close it.</li>
            <li><strong>Check stage honesty.</strong> For each deal in &ldquo;Evaluation&rdquo; or later, ask: &ldquo;What did the buyer do in the last week to show they&rsquo;re actively evaluating?&rdquo; If you can&rsquo;t name something, the stage is wrong.</li>
            <li><strong>Discount your total.</strong> Take your pipeline number and cut it by 40%. That&rsquo;s probably closer to reality. If that number scares you, you know where to focus.</li>
          </ol>

          <p>
            This is the work. Not adding more deals to the top of the funnel. Not buying another tool that sits on top of bad data. The work is getting honest about what&rsquo;s real in the pipeline you already have.
          </p>

          <div className="blog-divider" />

          <p>
            This is the problem OM is built to solve. Not by replacing your CRM — but by reading the behavioural data your CRM ignores and telling you what&rsquo;s actually happening. Pipeline clarity before GTM scales.
          </p>

          <p>
            If you&rsquo;re a founder doing $500K&ndash;$3M ARR and you don&rsquo;t trust your pipeline, <Link to="/om" style={{ color: 'var(--om-accent)', fontWeight: 500 }}>we&rsquo;re working with a small group of design partners</Link> to build this the right way.
          </p>

        </div>

        {/* AUTHOR + NEWSLETTER */}
        <div className="blog-article-inner" style={{ marginTop: 56 }}>
          {/* Author card */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 14,
            padding: '24px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: '50%',
              background: 'var(--surface)', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              fontSize: 14, fontWeight: 600, color: 'var(--mid)',
            }}>CW</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>Chloe Warnock</div>
              <div style={{ fontSize: 13, color: 'var(--faint)' }}>Co-Founder &amp; Head of GTM at OM</div>
            </div>
            <a
              href="https://linkedin.com/in/chloewarnock8/?skipRedirect=true"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginLeft: 'auto', fontSize: 12, fontWeight: 500,
                color: 'var(--mid)', textDecoration: 'none',
                display: 'flex', alignItems: 'center', gap: 5,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect width="12" height="12" rx="2" fill="#0A66C2" />
                <path d="M2 4.5h1.5V9H2V4.5ZM2.75 3.75a.75.75 0 100-1.5.75.75 0 000 1.5ZM5 4.5h1.4v.6c.3-.4.8-.7 1.4-.7C9 4.4 9.5 5.2 9.5 6.5V9H8V6.7c0-.6-.2-1-.7-1-.6 0-.8.4-.8 1V9H5V4.5Z" fill="white" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Back to blog */}
          <div style={{ marginTop: 40, textAlign: 'center' as const }}>
            <Link to="/blog" className="cta-ghost" style={{ display: 'inline-flex' }}>
              &larr; All posts
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
