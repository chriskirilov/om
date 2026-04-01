import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BlogPostJobsAndDeals() {
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
          <div className="hero-eyebrow">POM &middot; Personal pipeline</div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.15 }}>
            Why job applications and sales deals
            <br />
            <span className="dim">are the same problem.</span>
          </h1>
          <p className="hero-sub" style={{ maxWidth: 540 }}>
            A job application is an opportunity. A sales deal is an opportunity. The management system should be the same.
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
              {' '}&middot; Jan 2026 &middot; 4 min read
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ── */}
      <article className="blog-article reveal">
        <div className="blog-article-inner">

          <p className="blog-lede">
            You&rsquo;re applying to jobs. You have a spreadsheet — or a Notion board, or a list in your notes app. Company name, role, date applied, status. You check it every morning, try to remember who you followed up with, and wonder which applications are actually going somewhere.
          </p>

          <p>
            Now imagine you&rsquo;re an AE working a sales pipeline. You have a CRM — or a spreadsheet, or a list in your notes app. Company name, deal size, stage, last contact. You check it every morning, try to remember who you followed up with, and wonder which deals are actually going somewhere.
          </p>

          <p>
            These are the same problem. The same cognitive load, the same information gaps, the same Monday morning anxiety. The only difference is the label: one calls it an &ldquo;application&rdquo; and the other calls it a &ldquo;deal.&rdquo; Underneath, both are opportunities that need to be tracked, prioritised, and acted on before the window closes.
          </p>

          <h2>The shared structure nobody talks about</h2>

          <p>
            Strip away the vocabulary and every opportunity has the same anatomy:
          </p>

          <ul>
            <li><strong>A counterparty.</strong> Someone on the other side who will eventually say yes or no. A hiring manager. A buyer. A client.</li>
            <li><strong>A timeline.</strong> A window during which the opportunity is live. The job posting closes. The budget expires. The contract is up for renewal.</li>
            <li><strong>Engagement signals.</strong> Behaviours that tell you whether things are moving forward. They replied quickly. They asked for more information. They went silent. They introduced you to someone else.</li>
            <li><strong>A conversion event.</strong> The moment it becomes real. An offer. A signed contract. A handshake.</li>
            <li><strong>Decay.</strong> The rate at which the opportunity dies if you don&rsquo;t act. Every day you don&rsquo;t follow up, the probability drops.</li>
          </ul>

          <p>
            Job applications have all of these. Sales deals have all of these. Freelance gigs, partnership conversations, investor intros, speaking opportunities — they all share this structure. But we build completely separate tools for each one, as if they&rsquo;re fundamentally different activities.
          </p>

          <h2>The tools are fragmented because the thinking is fragmented</h2>

          <p>
            The job seeker uses LinkedIn, a spreadsheet, maybe Huntr or Teal. The AE uses Salesforce or HubSpot. The freelancer uses a Notion board. The founder doing their own sales uses some combination of all three plus their inbox.
          </p>

          <p>
            Each tool solves a narrow version of the problem. LinkedIn tracks where you applied but can&rsquo;t tell you which applications are worth your time. Salesforce tracks your deals but requires you to manually update every field. Notion gives you structure but no intelligence — it&rsquo;s a prettier spreadsheet.
          </p>

          <p>
            None of them do the thing you actually need: look at all your opportunities, figure out which ones are real, and tell you what to do next.
          </p>

          <p>
            This isn&rsquo;t a tooling gap. It&rsquo;s a framing gap. We treat &ldquo;job search&rdquo; and &ldquo;sales pipeline&rdquo; as separate categories because the industries grew up that way. HR tech built job-seeking tools. Sales tech built CRMs. Neither side noticed they were solving the same underlying problem: a person with multiple opportunities who can&rsquo;t tell which ones deserve their energy.
          </p>

          <h2>What a unified system looks like</h2>

          <p>
            If you accepted that all opportunities share the same structure, the management system would look very different:
          </p>

          <p>
            <strong>One pipeline view.</strong> All your opportunities — jobs, deals, gigs, conversations — in one place. Not because mixing them is convenient, but because the decision you need to make is the same across all of them: is this worth my time right now?
          </p>

          <p>
            <strong>Scoring based on behaviour, not labels.</strong> A job application where the recruiter responded within two hours and asked for a portfolio review is more alive than a sales deal where the prospect said &ldquo;looks great, let me check internally&rdquo; three weeks ago. The system should know that. Not because you told it — because it read the engagement pattern.
          </p>

          <p>
            <strong>Prioritisation that crosses categories.</strong> On any given Tuesday, the most important thing you could do might be following up on a sales deal. Or it might be preparing for a final-round interview. Or it might be sending that proposal to the freelance client who asked for it yesterday. A system that only sees one type of opportunity can&rsquo;t make that comparison. A system that sees all of them can.
          </p>

          <p>
            <strong>Decay tracking.</strong> Every opportunity has a half-life. The recruiter who was excited last week is less excited this week if you haven&rsquo;t responded. The prospect who asked for pricing will buy from someone else if you wait five days. The system should surface what&rsquo;s decaying before it dies, regardless of whether it&rsquo;s a job or a deal.
          </p>

          <h2>The person who manages both</h2>

          <p>
            Here&rsquo;s the part that makes this personal rather than theoretical: the same person often manages both sides of this problem at different points in their career.
          </p>

          <p>
            You&rsquo;re a job seeker. You land a role as an AE. Now you&rsquo;re managing a sales pipeline. You leave to start a company. Now you&rsquo;re managing your own deals, your fundraise pipeline, your hiring pipeline, and maybe still fielding job opportunities as a backup. The opportunity types change. The management problem doesn&rsquo;t.
          </p>

          <p>
            The skills transfer directly. The job seeker who learned to identify which applications were real — the ones with fast recruiter responses, specific interview timelines, genuine interest versus polite form letters — is the same person who later identifies which sales deals are real. The pattern recognition is identical. Response velocity. Multi-threading. Operational questions versus vague interest. Inbound re-engagement.
          </p>

          <p>
            If you build the habit of managing opportunities well at the personal level, you don&rsquo;t have to re-learn it when the stakes get higher. You just apply the same framework to bigger opportunities.
          </p>

          <h2>Why this matters now</h2>

          <p>
            The average person manages more concurrent opportunities than ever. The AE who&rsquo;s also freelancing. The founder who&rsquo;s raising while selling while hiring. The job seeker running 30 applications across four platforms. The cognitive load isn&rsquo;t going down — it&rsquo;s compounding.
          </p>

          <p>
            And the tools haven&rsquo;t caught up. They&rsquo;re still built around the assumption that you&rsquo;re one type of person doing one type of thing. Sales tools for salespeople. Job tools for job seekers. Neither for the person who is both, or who will be both within the next 18 months.
          </p>

          <p>
            The system that wins is the one that understands opportunities as a category, not as vertical-specific activities. Track them the same way. Score them the same way. Prioritise them the same way. Because the person managing them is the same person, and their time is the only resource that matters.
          </p>

          <div className="blog-divider" />

          <p>
            This is why POM exists. Not as a job board, and not as a CRM. As a personal opportunity management system that treats every opportunity — jobs, deals, gigs, conversations — with the same scoring, the same prioritisation, and the same clarity. <Link to="/pom" style={{ color: 'var(--om-accent)', fontWeight: 500 }}>Start free and see how it works</Link>.
          </p>

        </div>

        {/* AUTHOR + BACK */}
        <div className="blog-article-inner" style={{ marginTop: 56 }}>
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
