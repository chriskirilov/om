import { useEffect } from "react";

const LinkedInIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <rect width="12" height="12" rx="2" fill="#0A66C2" />
    <path d="M2 4.5h1.5V9H2V4.5ZM2.75 3.75a.75.75 0 100-1.5.75.75 0 000 1.5ZM5 4.5h1.4v.6c.3-.4.8-.7 1.4-.7C9 4.4 9.5 5.2 9.5 6.5V9H8V6.7c0-.6-.2-1-.7-1-.6 0-.8.4-.8 1V9H5V4.5Z" fill="white" />
  </svg>
);

export default function AboutPage() {
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
            inconsistent, and often wrong. OM fixes the layer before AI touches it.
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
          Whether you're a job seeker managing dozens of applications, an AE juggling
          a messy pipeline, or a founder trying to figure out which deals are actually
          alive — the problem is the same. You have more opportunities than you can
          track clearly, and the tools you're using aren't honest about which ones matter.
        </p>
        <p className="body-text">
          OM is built on a single belief: the intelligence layer has to come before the
          action layer. Know what's real first. Then act.
        </p>
        <div className="thesis-block">
          <div className="thesis-quote">
            &ldquo;My CRM says I have $1M in pipeline.{" "}
            <em>I have no idea which deals are actually alive.&rdquo;</em>
          </div>
          <div className="thesis-attr">
            Every Seed&rarr;Series&nbsp;A founder doing founder-led sales, every Monday morning.
          </div>
        </div>
      </div>

      {/* ── VALUES ── */}
      <div className="section section-border reveal">
        <div className="eyebrow">How we operate</div>
        <h2>Principles we don't compromise on.</h2>
        <div className="values-list">
          <div className="value-cell reveal-child delay-1">
            <div className="value-num">01</div>
            <div className="value-title">Clarity before action</div>
            <div className="value-desc">
              We don't help you do more things faster. We help you know which things
              are actually worth doing. Clarity is the product.
            </div>
          </div>
          <div className="value-cell reveal-child delay-2">
            <div className="value-num">02</div>
            <div className="value-title">Honest about what we don't know</div>
            <div className="value-desc">
              If we can't score something confidently, we say so. False confidence
              is worse than no answer.
            </div>
          </div>
          <div className="value-cell reveal-child delay-3">
            <div className="value-num">03</div>
            <div className="value-title">The person comes before the company</div>
            <div className="value-desc">
              The best company intelligence starts with people who already know how
              to manage their own opportunities. You graduate to the company layer
              — you don't start there.
            </div>
          </div>
          <div className="value-cell reveal-child delay-4">
            <div className="value-num">04</div>
            <div className="value-title">Design partners over mass growth</div>
            <div className="value-desc">
              We'd rather work deeply with a small number of founders who have the
              exact problem than ship to thousands who kind of have it.
            </div>
          </div>
        </div>
      </div>

      {/* ── TEAM ── */}
      <div className="section section-border reveal">
        <div className="eyebrow">The team</div>
        <h2>Small team. Focused problem.</h2>
        <p className="body-text">
          OM is built by a small team that has lived this problem personally — as
          founders, as operators, as people who have managed their own opportunities
          through noise.
        </p>
        <div className="team-grid">
          <div className="team-card reveal-child delay-1">
            <div className="team-avatar">CW</div>
            <div className="team-name">Chloe Warnock</div>
            <div className="team-role">Co-Founder &amp; Head of GTM</div>
            <p className="team-bio">
              Building OM because the GTM intelligence problem is real and the
              existing tools are either too big, too manual, or too focused on the
              wrong layer.
            </p>
            <a
              href="https://linkedin.com/in/chloewarnock8/?skipRedirect=true"
              target="_blank"
              rel="noopener noreferrer"
              className="team-li"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>

          <div className="team-card reveal-child delay-2">
            <div className="team-avatar">CK</div>
            <div className="team-name">Chris Kirilov</div>
            <div className="team-role">Co-Founder &amp; CEO</div>
            <p className="team-bio">
              Building the product that opportunity management runs on and the
              company intelligence layer that scales from it.
            </p>
            <a
              href="https://www.linkedin.com/in/chriskirilov/"
              target="_blank"
              rel="noopener noreferrer"
              className="team-li"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>

          <div className="team-card reveal-child delay-3">
            <div className="team-avatar">PC</div>
            <div className="team-name">Paul Cox</div>
            <div className="team-role">GTM &amp; Partnerships</div>
            <p className="team-bio">
              Running our design partner programme and building the repeatable
              playbook for how OM works with early customers before we scale it.
            </p>
            <a
              href="https://www.linkedin.com/in/paul-cox-a0979b49/"
              target="_blank"
              rel="noopener noreferrer"
              className="team-li"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
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
            <div className="cc-label">Company</div>
            <div className="cc-title">OM on LinkedIn</div>
            <div className="cc-sub">Follow us for product updates, GTM thinking, and what we're building.</div>
          </div>
          <div className="cc-right">
            <span className="li-btn">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect width="14" height="14" rx="2.5" fill="#0A66C2" />
                <path d="M2.5 5.5h1.8V10.5H2.5V5.5ZM3.4 4.5a.9.9 0 100-1.8.9.9 0 000 1.8ZM6 5.5h1.7v.7C8 5.8 8.7 5.4 9.5 5.4c1.8 0 2.5 1 2.5 2.8V10.5H10V8.2c0-.7-.2-1.2-.9-1.2-.7 0-1 .5-1 1.2V10.5H6V5.5Z" fill="white" />
              </svg>
              Follow OM
            </span>
          </div>
        </a>
      </div>
    </>
  );
}
