import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BlogPostFivePercent() {
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
            The 5% rule: why most of
            <br />
            <span className="dim">your opportunities aren&rsquo;t actually opportunities.</span>
          </h1>
          <p className="hero-sub" style={{ maxWidth: 540 }}>
            At any given moment, only 5% of the people in your pipeline are ready to move. Here&rsquo;s how to tell which ones.
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
              {' '}&middot; Mar 2026 &middot; 4 min read
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ── */}
      <article className="blog-article reveal">
        <div className="blog-article-inner">

          <p className="blog-lede">
            You have a pipeline. It has opportunities in it. But here&rsquo;s the thing nobody wants to say out loud: most of those opportunities are not actually opportunities. They&rsquo;re names in a list.
          </p>

          <p>
            Whether you&rsquo;re managing a job search, working a sales pipeline, or juggling freelance leads, the math is the same. At any given moment, roughly 5% of the opportunities in your pipeline are genuinely ready to move. The rest are in various stages of &ldquo;maybe later,&rdquo; &ldquo;probably not,&rdquo; or &ldquo;already dead but nobody said so.&rdquo;
          </p>

          <p>
            This isn&rsquo;t pessimism. It&rsquo;s pattern recognition. And once you see it, it changes how you spend your time.
          </p>

          <h2>Where the 5% number comes from</h2>

          <p>
            This ratio shows up everywhere. In B2B sales, industry benchmarks consistently show that 3-7% of a given pipeline converts in any quarter. In job seeking, if you&rsquo;re actively applying to 30 roles, maybe two of them have real momentum — a recruiter who responded quickly, a hiring manager who asked for a second conversation, a referral that landed on the right desk.
          </p>

          <p>
            The other 28? Some are sitting in an ATS queue. Some were filled before you applied. Some have a hiring freeze nobody announced publicly. A few might come back to life in three months, but right now, they&rsquo;re not moving.
          </p>

          <p>
            The 5% isn&rsquo;t about quality. Plenty of the other 95% are perfectly good opportunities. They&rsquo;re just not ready <em>right now</em>. And the distinction between &ldquo;good opportunity&rdquo; and &ldquo;ready opportunity&rdquo; is where most people lose their time.
          </p>

          <h2>The cost of treating everything equally</h2>

          <p>
            When you can&rsquo;t tell the 5% from the 95%, you default to treating everything the same. Same energy, same follow-up cadence, same mental bandwidth. This creates three problems:
          </p>

          <h3>You spread too thin</h3>

          <p>
            If you have 30 opportunities and you&rsquo;re giving each one equal attention, you&rsquo;re giving the ones that matter about 3% of your focus. That&rsquo;s not enough to close anything. The deal that needs a thoughtful follow-up gets the same templated check-in as the one that went cold three weeks ago. The job application where you have a warm connection gets the same generic thank-you as the one where you applied through a portal and never heard back.
          </p>

          <h3>You miss timing</h3>

          <p>
            The 5% are ready <em>now</em>. Not next week. Now. The recruiter who wants to schedule a final round is going to move on if you take four days to respond because you were busy crafting follow-ups for 25 dead leads. The prospect who asked for pricing needs it today, not after your weekly pipeline review.
          </p>

          <p>
            Timing is the hidden variable in opportunity management. Readiness is a window, not a state. Miss it and the opportunity doesn&rsquo;t go back to &ldquo;nurture&rdquo; — it goes to someone else.
          </p>

          <h3>You burn yourself out</h3>

          <p>
            There&rsquo;s a particular kind of exhaustion that comes from working a pipeline where nothing seems to move. You&rsquo;re doing the activity — sending follow-ups, tracking opens, managing your spreadsheet — but the results don&rsquo;t match the effort. That&rsquo;s not a motivation problem. It&rsquo;s an allocation problem. You&rsquo;re spending 95% of your energy on the 95% that isn&rsquo;t ready.
          </p>

          <h2>How to find your 5%</h2>

          <p>
            The 5% announce themselves through behaviour, not words. Everyone says they&rsquo;re interested. The ones who are actually ready <em>act</em> differently. Here&rsquo;s what to look for:
          </p>

          <ul>
            <li><strong>Response speed is increasing.</strong> They replied in two days last time. This time, they replied in two hours. Acceleration in response time is one of the strongest indicators of genuine intent.</li>
            <li><strong>They&rsquo;re introducing new people.</strong> A hiring manager who loops in the team lead. A prospect who CCs their CFO. When someone starts bringing others into the conversation, they&rsquo;re building internal consensus. That&rsquo;s buying behaviour.</li>
            <li><strong>They&rsquo;re asking operational questions.</strong> Not &ldquo;tell me more about your product&rdquo; but &ldquo;how does onboarding work?&rdquo; or &ldquo;what does the first week look like?&rdquo; When the questions shift from evaluation to logistics, the decision is already being made.</li>
            <li><strong>They initiated the last touchpoint.</strong> You didn&rsquo;t follow up. They reached out. That&rsquo;s the single clearest indicator that an opportunity is in the 5%. Inbound re-engagement from the other side means you&rsquo;re not pushing — they&rsquo;re pulling.</li>
          </ul>

          <p>
            Conversely, here&rsquo;s what doesn&rsquo;t mean someone is in your 5%: they opened your email. They said &ldquo;let&rsquo;s circle back next quarter.&rdquo; They liked your LinkedIn post. They told you they&rsquo;re &ldquo;really interested.&rdquo; Activity is not intent. Politeness is not readiness.
          </p>

          <h2>What to do with the other 95%</h2>

          <p>
            The 95% aren&rsquo;t dead. They&rsquo;re just not ready. The mistake is abandoning them entirely. The right move is to change <em>how</em> you engage with them.
          </p>

          <p>
            We think about it in two buckets:
          </p>

          <p>
            <strong>35% — Needs nurturing.</strong> These are real opportunities with genuine potential, but the timing isn&rsquo;t right. The company has a hiring freeze that lifts in Q3. The prospect is interested but stuck in a contract with a competitor until October. The gig client likes your work but doesn&rsquo;t have budget until next month. These need light, consistent touchpoints — not aggressive follow-up. Stay visible without being annoying. Check in monthly, not weekly.
          </p>

          <p>
            <strong>60% — Not right now.</strong> Wrong timing, wrong fit, or genuinely cold. These need to be acknowledged and released. Not deleted — released. Stop spending energy on them. If they come back, great. If they don&rsquo;t, you haven&rsquo;t lost anything because you weren&rsquo;t going to close them anyway.
          </p>

          <p>
            The hardest part of opportunity management isn&rsquo;t finding new opportunities. It&rsquo;s letting go of the ones that feel possible but aren&rsquo;t probable. Every hour you spend nurturing a dead lead is an hour you didn&rsquo;t spend on the two opportunities that were actually ready to move.
          </p>

          <h2>Pipeline clarity is the product</h2>

          <p>
            This is why we built POM. Not to help you find more opportunities — you already have enough of those. But to help you see which ones are actually in the 5%. Clarity scoring based on real engagement patterns, not gut feel. Automatic categorisation into ready, nurture, and let-breathe. So your Monday morning starts with the two things that matter, not the 30 things that feel urgent.
          </p>

          <p>
            Because the goal isn&rsquo;t to have a bigger pipeline. It&rsquo;s to know which part of your pipeline is real.
          </p>

          <div className="blog-divider" />

          <p>
            POM is free to start. If you&rsquo;re managing a pipeline of opportunities — jobs, deals, gigs, anything — and you want to stop guessing which ones are worth your time, <Link to="/pom" style={{ color: 'var(--om-accent)', fontWeight: 500 }}>see how POM works</Link>.
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
