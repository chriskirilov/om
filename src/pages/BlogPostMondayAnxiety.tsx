import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BlogPostMondayAnxiety() {
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
            Monday morning pipeline anxiety
            <br />
            <span className="dim">is a data problem, not a motivation problem.</span>
          </h1>
          <p className="hero-sub" style={{ maxWidth: 540 }}>
            The dread you feel looking at your CRM on Monday morning isn&rsquo;t about mindset. It&rsquo;s because your data isn&rsquo;t honest with you.
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
              {' '}&middot; Feb 2026 &middot; 3 min read
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ── */}
      <article className="blog-article reveal">
        <div className="blog-article-inner">

          <p className="blog-lede">
            Every founder doing their own sales knows the feeling. It&rsquo;s Sunday night, or Monday at 7 AM, and you open your CRM. The number is there — $900K, $1.4M, whatever your pipeline says. And instead of confidence, you feel dread.
          </p>

          <p>
            Not because the number is bad. Because you don&rsquo;t believe it.
          </p>

          <p>
            This gets misdiagnosed constantly. Founders tell themselves they need to be more disciplined. More organised. More rigorous about pipeline reviews. They buy a new CRM, or add fields, or schedule Friday afternoon pipeline hygiene sessions that they attend twice and then stop.
          </p>

          <p>
            None of it helps. Because the anxiety isn&rsquo;t a discipline problem. It&rsquo;s an information problem. You&rsquo;re anxious because your data is lying to you and you know it.
          </p>

          <h2>What the anxiety actually is</h2>

          <p>
            Pipeline anxiety is the gap between what your tools show and what your gut tells you. Your CRM says you have 28 active deals. Your gut says maybe 10 of those are real. The anxiety lives in that gap — the 18 deals you can&rsquo;t confidently call alive or dead.
          </p>

          <p>
            Think about the deals that make you anxious. They&rsquo;re not the ones where the champion is responsive and the timeline is clear. Those feel fine. They&rsquo;re not the ones that are obviously dead either — those are annoying but not stressful. The anxiety comes from the middle: the deals where <em>something</em> happened two weeks ago and then nothing. The ones where the last email was &ldquo;let me check internally&rdquo; and you haven&rsquo;t heard back. The ones where you had a great call but can&rsquo;t tell if they&rsquo;re actually moving forward or just being polite.
          </p>

          <p>
            You can&rsquo;t resolve these deals by looking at your CRM, because your CRM only knows what you told it. The deal says &ldquo;Evaluation.&rdquo; That might mean they&rsquo;re actively comparing you to competitors. It might also mean you moved it to that stage three weeks ago and nobody has touched it since.
          </p>

          <h2>Why Monday is the worst</h2>

          <p>
            Monday is when the gap is widest. You&rsquo;ve had two days away from the pipeline. Things happened over the weekend that you don&rsquo;t know about — emails you haven&rsquo;t read, internal conversations you weren&rsquo;t part of, decisions that were made without you. Your CRM hasn&rsquo;t changed because CRMs don&rsquo;t update themselves. But reality has.
          </p>

          <p>
            So you sit down Monday morning and you&rsquo;re looking at Friday&rsquo;s reality through Friday&rsquo;s lens. That deal you felt good about on Thursday? The champion might have gone on holiday. The budget might have been frozen. The competitor might have swooped in with a discount. You don&rsquo;t know. And the not-knowing is the anxiety.
          </p>

          <p>
            The natural response is to start checking. Open every deal. Re-read the last email thread. Try to reconstruct the state of each conversation from memory. This takes an hour, sometimes two. By the time you&rsquo;re done, half the morning is gone and you still aren&rsquo;t sure what&rsquo;s real.
          </p>

          <h2>The data that would fix it</h2>

          <p>
            Here&rsquo;s the thing: the information you need to resolve the anxiety <em>exists</em>. It&rsquo;s just not in your CRM.
          </p>

          <p>
            Your email shows that the champion replied to your colleague on Saturday asking about pricing. Your calendar shows that the follow-up meeting you scheduled is still confirmed. The proposal you sent was opened four times over the weekend by two different people at the company.
          </p>

          <p>
            Or the opposite: the champion hasn&rsquo;t opened your last two emails. The meeting you scheduled was quietly cancelled. The internal stakeholder you were supposed to meet was removed from the calendar invite.
          </p>

          <p>
            Both of these tell you something definitive. The first deal is alive and accelerating. The second deal is dying. But neither piece of information lives in your CRM. It lives in your email, your calendar, and your engagement data — all places your CRM doesn&rsquo;t look.
          </p>

          <p>
            What if Monday morning looked different? Instead of opening your CRM and trying to reconstruct reality from memory, you opened a view that already knew:
          </p>

          <ul>
            <li>Which deals moved over the weekend — and in which direction</li>
            <li>Which champions are engaged and which have gone quiet</li>
            <li>Which follow-ups are overdue and which are on track</li>
            <li>Which deals need your attention today and which can wait</li>
          </ul>

          <p>
            That&rsquo;s not a better dashboard. That&rsquo;s a fundamentally different relationship with your pipeline. Instead of you interrogating your data, your data tells you what happened.
          </p>

          <h2>Anxiety as a diagnostic</h2>

          <p>
            The useful reframe is this: pipeline anxiety isn&rsquo;t a feeling to manage. It&rsquo;s a diagnostic. It&rsquo;s telling you exactly where your information gaps are.
          </p>

          <p>
            The deals that don&rsquo;t make you anxious are the ones where you have clear, recent behavioural data. You know what happened last, you know what&rsquo;s happening next, and you know what the other side is doing. No guesswork.
          </p>

          <p>
            The deals that make you anxious are the ones where you&rsquo;re guessing. You <em>think</em> they&rsquo;re interested. You <em>hope</em> the proposal is being reviewed. You <em>assume</em> the follow-up is still happening. Every assumption is a gap in your data, and every gap is a source of anxiety.
          </p>

          <p>
            So the fix isn&rsquo;t meditation or better morning routines or a motivational podcast. The fix is closing the information gaps. Get the behavioural data into the picture. Know what&rsquo;s actually happening, not what you entered into a field three weeks ago.
          </p>

          <div className="blog-divider" />

          <p>
            Monday mornings should start with clarity, not dread. That&rsquo;s what we&rsquo;re building OM to do — read the behavioural data that lives outside your CRM and tell you what&rsquo;s real before you have to ask. If your Monday mornings feel like this, <Link to="/om" style={{ color: 'var(--om-accent)', fontWeight: 500 }}>we&rsquo;re working with design partners now</Link>.
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
