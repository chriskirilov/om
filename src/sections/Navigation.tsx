import { Link, useLocation } from 'react-router-dom';

const LogoIcon = () => (
  <div style={{width:32,height:32,background:'#1B2A4A',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="7.5" stroke="white" strokeWidth="1.2" opacity="0.25"/>
      <circle cx="9" cy="9" r="5" stroke="white" strokeWidth="1.2" opacity="0.55"/>
      <circle cx="9" cy="9" r="2.5" stroke="white" strokeWidth="1.4"/>
      <circle cx="9" cy="9" r="1" fill="white"/>
    </svg>
  </div>
);

export default function Navigation() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav>
      <Link to="/" className="nav-logo">
        <LogoIcon />
        <span style={{fontFamily:"'Geist',monospace",fontSize:15,fontWeight:600,color:'#fff',letterSpacing:'-0.01em'}}>p(om)</span>
      </Link>
      <div className="nav-right">
        <Link to="/about" className={`nav-link${location.pathname === '/about' ? ' active' : ''}`}>About</Link>
        <Link to="/blog" className={`nav-link${location.pathname === '/blog' ? ' active' : ''}`}>Blog</Link>
        {isHome && (
          <>
            <a href="#signin" className="nav-link">Sign in</a>
            <a href="#om-waitlist" className="nav-btn btn-ghost-nav">Join OM waitlist</a>
          </>
        )}
        {isHome ? (
          <a href="#pom-signup" className="nav-btn btn-white">Get p(om) free</a>
        ) : (
          <Link to="/#pom-signup" className="nav-btn btn-white">Get p(om) free</Link>
        )}
      </div>
    </nav>
  );
}
