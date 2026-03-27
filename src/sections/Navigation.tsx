import { Link, useLocation } from 'react-router-dom';

const LogoIcon = ({ size = 32 }: { size?: number }) => (
  <img src="/logo.png" alt="OM" width={size} height={size} style={{borderRadius:8,flexShrink:0}} />
);

export default function Navigation() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav>
      <Link to="/" className="nav-logo">
        <LogoIcon />
        <span style={{fontFamily:"'Geist',monospace",fontSize:15,fontWeight:600,color:'#fff',letterSpacing:'-0.01em'}}>OM</span>
      </Link>
      <div className="nav-right">
        <Link to="/about" className={`nav-link${location.pathname === '/about' ? ' active' : ''}`}>About</Link>
        <Link to="/blog" className={`nav-link${location.pathname === '/blog' ? ' active' : ''}`}>Blog</Link>
        {isHome && (
          <>
            <a href="#signin" className="nav-link">Sign in</a>
          </>
        )}
        {isHome ? (
          <a href="#signup" className="nav-btn btn-white">Get OM free</a>
        ) : (
          <Link to="/#signup" className="nav-btn btn-white">Get OM free</Link>
        )}
      </div>
    </nav>
  );
}
