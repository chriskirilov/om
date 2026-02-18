export default function Footer() {
  return (
    <footer className="bg-white border-t border-[var(--border)] px-6 lg:px-14 py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
        <div className="text-sm font-semibold text-[var(--text)] tracking-tight">OM</div>
        <ul className="flex flex-wrap gap-6 list-none">
          <li>
            <a
              href="#product"
              className="text-[13px] text-[var(--text-dim)] no-underline transition-colors hover:text-[var(--text)]"
            >
              Pulse
            </a>
          </li>
          <li>
            <a
              href="#apply"
              className="text-[13px] text-[var(--text-dim)] no-underline transition-colors hover:text-[var(--text)]"
            >
              Design Partners
            </a>
          </li>
          <li>
            <a
              href="#gmi"
              className="text-[13px] text-[var(--text-dim)] no-underline transition-colors hover:text-[var(--text)]"
            >
              GMI Cloud
            </a>
          </li>
          <li>
            <a
              href="mailto:hello@pipelineom.com"
              className="text-[13px] text-[var(--text-dim)] no-underline transition-colors hover:text-[var(--text)]"
            >
              hello@pipelineom.com
            </a>
          </li>
        </ul>
      </div>
      <div className="text-xs text-[var(--text-dim)]">© 2026 OM</div>
    </footer>
  );
}
