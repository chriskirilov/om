import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const LogoIcon = ({ size = 32 }: { size?: number }) => (
  <img src="/logo.png" alt="OM" width={size} height={size} style={{borderRadius:8,flexShrink:0}} />
);

export default function Navigation() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  return (
    <nav className={scrolled ? 'nav-scrolled' : ''}>
      <Link to="/" className="nav-logo">
        <LogoIcon />
        <span style={{fontFamily:"'Geist',monospace",fontSize:15,fontWeight:600,color:'#fff',letterSpacing:'-0.01em'}}>OM</span>
      </Link>

      {/* Desktop nav */}
      <div className="nav-right nav-desktop">
        <Link to="/pom" className={`nav-link${location.pathname === '/pom' ? ' active' : ''}`}>POM</Link>
        <Link to="/om" className={`nav-link${location.pathname === '/om' ? ' active' : ''}`}>OM</Link>
        <Link to="/about" className={`nav-link${location.pathname === '/about' ? ' active' : ''}`}>About</Link>
        <Link to="/blog" className={`nav-link${location.pathname === '/blog' ? ' active' : ''}`}>OM World</Link>
        {isHome ? (
          <a href="#waitlist" className="nav-btn btn-white">Join waitlist</a>
        ) : (
          <Link to="/#waitlist" className="nav-btn btn-white">Join waitlist</Link>
        )}
      </div>

      {/* Mobile hamburger */}
      <button className="nav-hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
        <span className={`hamburger-line${mobileOpen ? ' open' : ''}`} />
        <span className={`hamburger-line${mobileOpen ? ' open' : ''}`} />
      </button>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="nav-mobile-panel">
          <Link to="/pom" className="nav-mobile-link" onClick={() => setMobileOpen(false)}>POM</Link>
          <Link to="/om" className="nav-mobile-link" onClick={() => setMobileOpen(false)}>OM</Link>
          <Link to="/about" className="nav-mobile-link" onClick={() => setMobileOpen(false)}>About</Link>
          <Link to="/blog" className="nav-mobile-link" onClick={() => setMobileOpen(false)}>OM World</Link>
          {isHome ? (
            <a href="#waitlist" className="nav-btn btn-white" style={{marginTop:8,textAlign:'center',justifyContent:'center'}} onClick={() => setMobileOpen(false)}>Join waitlist</a>
          ) : (
            <Link to="/#waitlist" className="nav-btn btn-white" style={{marginTop:8,textAlign:'center',justifyContent:'center'}} onClick={() => setMobileOpen(false)}>Join waitlist</Link>
          )}
        </div>
      )}
    </nav>
  );
}
