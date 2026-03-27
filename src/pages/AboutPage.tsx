import { useEffect } from "react";

export default function AboutPage() {
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

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-sub-page">
        <div className="hero-inner">
          <div className="hero-eyebrow">About OM</div>
          <h1>
            We're fixing the
            <br />
            <span className="dim">input layer.</span>
          </h1>
          <p className="hero-sub">
            Most GTM systems are built on bad data. CRMs are manually updated,
            inconsistent, and often wrong. AI tools built on top amplify bad
            inputs instead of fixing them. OM fixes the layer before AI touches
            it.
          </p>
        </div>
      </section>

      {/* ── THESIS ── */}
      <div className="section reveal">
        <div className="eyebrow">The thesis</div>
        <h2>
          Opportunity is everywhere.
          <br />
          Clarity is the problem.
        </h2>
        <p className="body-text">
          Every founder-led sales team we talk to has the same problem: they know
          opportunity exists but can't see it clearly. CRMs are outdated the
          moment data is entered, pipeline reviews turn into guessing games, and
          the people closest to the customer spend more time updating fields than
          closing deals.
        </p>
        <p className="body-text">
          This isn't a tools problem — it's an input problem. The data going into
          every system is incomplete, inconsistent, and decays fast. No amount of
          dashboards or AI can fix outputs when the inputs are broken.
        </p>
        <div className="thesis-block">
          <div className="thesis-quote">
            "My CRM says I have $1M in pipeline.{" "}
            <em>I have no idea which deals are actually alive."</em>
          </div>
          <div className="thesis-attr">
            Every Seed&rarr;Series&nbsp;A founder doing founder-led sales, every
            Monday morning.
          </div>
        </div>
      </div>

      {/* ── VALUES ── */}
      <div className="section section-border reveal">
        <div className="eyebrow">How we operate</div>
        <h2>Principles we don't compromise on.</h2>
        <div className="values-list">
          <div className="value-cell">
            <span className="value-num">01</span>
            <h3>Clarity before action</h3>
            <p>
              We never ship a feature, send a message, or make a commitment
              unless we understand the problem clearly first. Speed without
              direction is just noise.
            </p>
          </div>
          <div className="value-cell">
            <span className="value-num">02</span>
            <h3>Honest about what we don't know</h3>
            <p>
              We'd rather say "we're still figuring that out" than pretend we
              have the answer. Certainty is earned, not performed.
            </p>
          </div>
          <div className="value-cell">
            <span className="value-num">03</span>
            <h3>The person comes before the company</h3>
            <p>
              We build for the humans doing the work — not the org chart. If a
              feature helps the company but makes someone's day worse, we
              redesign it.
            </p>
          </div>
          <div className="value-cell">
            <span className="value-num">04</span>
            <h3>Design partners over mass growth</h3>
            <p>
              We grow by going deep with a few, not wide with many. Every
              design partner shapes the product directly.
            </p>
          </div>
        </div>
      </div>

      {/* ── TEAM ── */}
      <div className="section section-border reveal">
        <div className="eyebrow">The team</div>
        <h2>Small team. Focused problem.</h2>
        <p className="body-text">
          We're a small, intentional team that has lived the problem we're
          solving. Every person here has run pipelines, fought with CRMs, and
          felt the pain of making decisions on bad data.
        </p>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar">CW</div>
            <div className="team-info">
              <h3>Chloe Warnock</h3>
              <span className="team-role">Founder &amp; CEO</span>
              <p>
                Former GTM operator turned founder. Built and scaled pipeline
                processes across multiple startups before deciding to fix the
                infrastructure everyone else builds on top of.
              </p>
              <a
                href="https://linkedin.com/in/chloewarnock8/?skipRedirect=true"
                target="_blank"
                rel="noopener noreferrer"
                className="team-li"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="14" height="14" rx="2" fill="#0A66C2" />
                  <path
                    d="M4.3 5.5H2.6V11H4.3V5.5ZM3.45 4.7C2.9 4.7 2.5 4.3 2.5 3.75C2.5 3.2 2.9 2.8 3.45 2.8C4 2.8 4.4 3.2 4.4 3.75C4.4 4.3 4 4.7 3.45 4.7ZM11.5 11H9.8V8.3C9.8 7.6 9.8 6.7 8.8 6.7C7.8 6.7 7.7 7.5 7.7 8.2V11H6V5.5H7.6V6.2C7.8 5.8 8.4 5.3 9.2 5.3C10.9 5.3 11.5 6.4 11.5 7.8V11Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="team-card">
            <div className="team-avatar">CK</div>
            <div className="team-info">
              <h3>Chris Kirilov</h3>
              <span className="team-role">Product</span>
              <p>
                Product builder obsessed with making complex systems feel
                simple. Focused on turning messy GTM workflows into something
                founders actually want to use.
              </p>
              <a
                href="https://www.linkedin.com/in/chriskirilov/"
                target="_blank"
                rel="noopener noreferrer"
                className="team-li"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="14" height="14" rx="2" fill="#0A66C2" />
                  <path
                    d="M4.3 5.5H2.6V11H4.3V5.5ZM3.45 4.7C2.9 4.7 2.5 4.3 2.5 3.75C2.5 3.2 2.9 2.8 3.45 2.8C4 2.8 4.4 3.2 4.4 3.75C4.4 4.3 4 4.7 3.45 4.7ZM11.5 11H9.8V8.3C9.8 7.6 9.8 6.7 8.8 6.7C7.8 6.7 7.7 7.5 7.7 8.2V11H6V5.5H7.6V6.2C7.8 5.8 8.4 5.3 9.2 5.3C10.9 5.3 11.5 6.4 11.5 7.8V11Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="team-card">
            <div className="team-avatar">PC</div>
            <div className="team-info">
              <h3>Paul Cox</h3>
              <span className="team-role">GTM &amp; Partnerships</span>
              <p>
                Spent years in the trenches of B2B sales and partnerships.
                Brings the customer voice into every product decision and keeps
                us honest about what the market actually needs.
              </p>
              <a
                href="https://www.linkedin.com/in/paul-cox-a0979b49/"
                target="_blank"
                rel="noopener noreferrer"
                className="team-li"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="14" height="14" rx="2" fill="#0A66C2" />
                  <path
                    d="M4.3 5.5H2.6V11H4.3V5.5ZM3.45 4.7C2.9 4.7 2.5 4.3 2.5 3.75C2.5 3.2 2.9 2.8 3.45 2.8C4 2.8 4.4 3.2 4.4 3.75C4.4 4.3 4 4.7 3.45 4.7ZM11.5 11H9.8V8.3C9.8 7.6 9.8 6.7 8.8 6.7C7.8 6.7 7.7 7.5 7.7 8.2V11H6V5.5H7.6V6.2C7.8 5.8 8.4 5.3 9.2 5.3C10.9 5.3 11.5 6.4 11.5 7.8V11Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Company LinkedIn card */}
        <a
          className="company-card"
          href="https://www.linkedin.com/company/pipelineom/?viewAsMember=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="cc-left">
            <span className="cc-label">Company</span>
            <span className="cc-title">OM on LinkedIn</span>
            <span className="cc-subtitle">Follow us for updates, insights, and behind-the-scenes.</span>
          </div>
          <div className="cc-right">
            <span className="li-btn">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="14" height="14" rx="2" fill="#0A66C2" />
                <path
                  d="M4.3 5.5H2.6V11H4.3V5.5ZM3.45 4.7C2.9 4.7 2.5 4.3 2.5 3.75C2.5 3.2 2.9 2.8 3.45 2.8C4 2.8 4.4 3.2 4.4 3.75C4.4 4.3 4 4.7 3.45 4.7ZM11.5 11H9.8V8.3C9.8 7.6 9.8 6.7 8.8 6.7C7.8 6.7 7.7 7.5 7.7 8.2V11H6V5.5H7.6V6.2C7.8 5.8 8.4 5.3 9.2 5.3C10.9 5.3 11.5 6.4 11.5 7.8V11Z"
                  fill="white"
                />
              </svg>
              Follow OM
            </span>
          </div>
        </a>
      </div>
    </>
  );
}
