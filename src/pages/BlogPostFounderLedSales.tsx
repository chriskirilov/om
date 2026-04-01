import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BlogPostFounderLedSales() {
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
          <div className="hero-eyebrow">GTM</div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.15 }}>
            What founder-led sales
            <br />
            <span className="dim">actually looks like at $1M ARR.</span>
          </h1>
          <p className="hero-sub" style={{ maxWidth: 540 }}>
            The chaos isn&rsquo;t a sign you&rsquo;re doing it wrong. It&rsquo;s a sign you&rsquo;ve hit the inflection point where clarity becomes the bottleneck.
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
              {' '}&middot; Feb 2026 &middot; 6 min read
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ── */}
      <article className="blog-article reveal">
        <div className="blog-article-inner">

          <p className="blog-lede">
            At $1M ARR, founder-led sales doesn&rsquo;t look like what the playbooks describe. There&rsquo;s no clean handoff between stages. There&rsquo;s no SDR qualifying leads before they hit your calendar. There&rsquo;s you, your co-founder maybe, and a pipeline held together by a spreadsheet, a CRM you half-update, and the back of your brain.
          </p>

          <p>
            And somehow it&rsquo;s working. Revenue is growing. Customers are signing. But the feeling isn&rsquo;t confidence — it&rsquo;s controlled panic. Because at $1M ARR, the thing that got you here is the same thing that&rsquo;s about to break.
          </p>

          <h2>The $1M inflection point</h2>

          <p>
            The first $500K typically comes from your network. Warm intros, people who already trust you, deals where the relationship did most of the selling. You didn&rsquo;t need a process because the deals came to you, and you could hold them all in your head.
          </p>

          <p>
            Somewhere between $500K and $1M, that stops working. Not dramatically — it erodes. The deals get less warm. The sales cycles get longer. You&rsquo;re talking to people who don&rsquo;t know you yet, and the relationship alone isn&rsquo;t enough to close. You need to actually <em>sell</em>.
          </p>

          <p>
            At $1M, you&rsquo;re typically juggling 20-40 deals at various stages. Maybe half of those came through some form of outbound or content. The other half are referrals that used to close in two weeks and now take six. Your calendar is full. Your inbox is a disaster. And every Monday morning you open your CRM and think: <em>I genuinely don&rsquo;t know what&rsquo;s real in here.</em>
          </p>

          <p>
            That feeling is the inflection point. And it&rsquo;s not a failure — it&rsquo;s a milestone.
          </p>

          <h2>What the day actually looks like</h2>

          <p>
            Nobody writes about this honestly, so here it is. A typical day for a founder doing $1M ARR in sales:
          </p>

          <p>
            <strong>7:30 AM.</strong> You check Slack before coffee. Three messages from your design partner about a feature gap. One from a prospect who wants to reschedule tomorrow&rsquo;s call. A support ticket from a customer who found a bug during onboarding.
          </p>

          <p>
            <strong>8:00 AM.</strong> You open your CRM to review the day. Twelve deals marked &ldquo;active.&rdquo; You know maybe five of them are actually moving. The other seven are in limbo — you haven&rsquo;t followed up, they haven&rsquo;t responded, and moving them to &ldquo;closed-lost&rdquo; feels premature because one of them might come back. So they sit there, inflating your pipeline number and making it impossible to forecast.
          </p>

          <p>
            <strong>9:00 AM.</strong> First call. A prospect you&rsquo;ve been nurturing for six weeks. Good conversation, but they want to &ldquo;bring in their CTO.&rdquo; You&rsquo;ve heard this before. Sometimes it means progress. Sometimes it means they&rsquo;re building a case to say no. You can&rsquo;t tell which one this is, so you schedule the follow-up and hope.
          </p>

          <p>
            <strong>10:30 AM.</strong> You meant to do outbound for an hour. Instead, you&rsquo;re fixing a customer issue because there&rsquo;s no one else to do it. The outbound block gets pushed to &ldquo;this afternoon.&rdquo; It won&rsquo;t happen this afternoon.
          </p>

          <p>
            <strong>12:00 PM.</strong> Lunch meeting with an investor who wants an update. They ask about pipeline. You give a number. You know the number is wrong, but saying &ldquo;I&rsquo;m not sure&rdquo; doesn&rsquo;t play well when you&rsquo;re raising.
          </p>

          <p>
            <strong>2:00 PM.</strong> Two back-to-back demos. One goes well — genuine interest, budget confirmed, decision timeline clear. The other is a tyre-kicker who took the meeting because they were curious. You knew this 10 minutes in, but you gave them the full 45 because you couldn&rsquo;t afford to be wrong.
          </p>

          <p>
            <strong>4:00 PM.</strong> You finally sit down to do follow-ups. You have 11 emails to send. You write three good ones and template the rest. You know the templates won&rsquo;t convert, but you don&rsquo;t have time to personalise everything.
          </p>

          <p>
            <strong>6:00 PM.</strong> You update your CRM. Kind of. You move two deals forward, ignore five that should probably be closed out, and add notes to two that you&rsquo;ll forget by Thursday.
          </p>

          <p>
            This is founder-led sales. It&rsquo;s not broken — this is what working looks like at this stage. The question is: how long can it keep working?
          </p>

          <h2>The five things that are actually breaking</h2>

          <p>
            The chaos is manageable at $1M. It becomes terminal somewhere between $1M and $3M if you don&rsquo;t address these five things:
          </p>

          <h3>1. Pipeline honesty</h3>

          <p>
            You don&rsquo;t know which deals are real. Your CRM says $1.5M pipeline. Reality is probably $600K. But because you can&rsquo;t tell the difference, you make decisions based on the inflated number — hiring, spending, forecasting — and then scramble when reality catches up.
          </p>

          <h3>2. Time allocation</h3>

          <p>
            You&rsquo;re spending equal time on deals at 90% probability and deals at 5% probability. The result: you under-invest in the closeable deals and over-invest in the dead ones. The deals that should close in two weeks take four because you couldn&rsquo;t give them full attention.
          </p>

          <h3>3. Follow-up decay</h3>

          <p>
            Deals are dying from neglect, not rejection. Prospects who were interested go quiet because you didn&rsquo;t follow up in the window. Not because you forgot — because you were doing 15 other things. The pipeline isn&rsquo;t leaking from the bottom. It&rsquo;s evaporating from the middle.
          </p>

          <h3>4. Context loss</h3>

          <p>
            You had a great conversation with a prospect three weeks ago. They mentioned a specific pain point. You were going to reference it in your follow-up. But you had six other calls that day, and now you can&rsquo;t remember whether it was this prospect or a different one who mentioned the compliance deadline. So you send a generic follow-up. They send a generic response. The deal goes cold.
          </p>

          <h3>5. The hiring trap</h3>

          <p>
            The instinct at $1M is to hire. Get an AE. Get an SDR. Scale the team. But here&rsquo;s the problem: if you can&rsquo;t tell which deals are real in your own pipeline, how do you know what to tell a new hire to focus on? You end up hiring someone, handing them a pipe full of zombie deals, and wondering why they can&rsquo;t close.
          </p>

          <p>
            You can&rsquo;t scale what you can&rsquo;t see. The first hire isn&rsquo;t a closer — it&rsquo;s clarity about what&rsquo;s actually happening in your pipeline.
          </p>

          <h2>What changes between $1M and $3M</h2>

          <p>
            The founders who make it through this phase don&rsquo;t do it by working harder. They do it by getting honest about three things:
          </p>

          <p>
            <strong>Which deals are real.</strong> Not which ones feel good or have big logos attached, but which ones are showing genuine buying behaviour — response velocity, multi-threading, operational questions, timeline commitment. If you can separate your pipeline into &ldquo;ready now,&rdquo; &ldquo;needs nurturing,&rdquo; and &ldquo;not going to happen,&rdquo; you&rsquo;ve solved half the problem.
          </p>

          <p>
            <strong>Where their time goes.</strong> The founder who spends three hours on a deal that was never going to close is the founder who doesn&rsquo;t have time to close the deal that was ready. Time allocation based on deal reality — not deal hope — is the unlock.
          </p>

          <p>
            <strong>What the buyer is actually doing.</strong> Not what they said in the meeting, but what they did after it. Did they forward your proposal? Did they schedule the internal review? Did they go quiet? The answers are in email patterns, calendar activity, and response timing — data that exists but lives outside the CRM.
          </p>

          <h2>The clarity gap</h2>

          <p>
            At enterprise scale, there are RevOps teams, deal review cadences, pipeline hygiene processes, and forecasting models that smooth out the chaos. At $1M ARR, you have none of that. You have yourself, your inbox, and your gut.
          </p>

          <p>
            Your gut got you to $1M. But gut doesn&rsquo;t scale. When you&rsquo;re holding 30 deals in your head simultaneously, your gut starts lying to you. Not maliciously — it just can&rsquo;t process 30 relationships at once. You default to recency bias (the deal you talked to yesterday feels more real), sunk cost (the deal you&rsquo;ve been working for three months must be close), and optimism (they said they were interested, so they probably are).
          </p>

          <p>
            The gap between $1M and $3M isn&rsquo;t more deals. It&rsquo;s better understanding of the deals you already have. Pipeline clarity — knowing what&rsquo;s real, what needs nurturing, and what needs to be let go — is the prerequisite for everything that comes next: your first hire, your forecasting, your fundraise narrative, your own sanity.
          </p>

          <div className="blog-divider" />

          <p>
            This is the problem OM exists to solve. Not with more dashboards or more reporting, but by reading the behavioural data your CRM misses and showing you what&rsquo;s actually happening. If you&rsquo;re a founder between $500K and $3M and the Monday morning pipeline feeling is getting worse, <Link to="/om" style={{ color: 'var(--om-accent)', fontWeight: 500 }}>we&rsquo;re building this with a small group of design partners</Link>.
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
