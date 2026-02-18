import { useEffect, useState } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-14 h-16 transition-all duration-200 ${
        scrolled
          ? 'bg-white/94 backdrop-blur-xl border-b border-[var(--border)]'
          : 'bg-transparent'
      }`}
    >
      <a href="#" className="flex items-center gap-2 text-[15px] font-semibold text-[var(--text)] tracking-tight no-underline">
        <div className="w-6 h-6 bg-[var(--text)] rounded-[5px] flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="2.5" fill="white" />
            <circle cx="6" cy="6" r="5" stroke="white" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>
        PipelineOM
      </a>

      <div className="hidden lg:flex items-center gap-10">
        <a href="#product" className="text-[13px] font-normal text-[var(--text-mid)] no-underline transition-colors hover:text-[var(--text)]">
          Pulse
        </a>
        <a href="#how" className="text-[13px] font-normal text-[var(--text-mid)] no-underline transition-colors hover:text-[var(--text)]">
          How it works
        </a>
        <a href="#gmi" className="text-[13px] font-normal text-[var(--text-mid)] no-underline transition-colors hover:text-[var(--text)]">
          Partners
        </a>
        <a
          href="#apply"
          className="text-[13px] font-medium text-white bg-[var(--text)] px-[18px] py-2 rounded-md no-underline transition-opacity hover:opacity-80"
        >
          Apply as design partner
        </a>
      </div>
    </nav>
  );
}
