import { Link, useLocation } from 'react-router-dom';

const FooterLogoIcon = () => (
  <img src="/logo.png" alt="OM" width={26} height={26} style={{borderRadius:6,flexShrink:0}} />
);

export default function Footer() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <footer>
      {/* CTA band */}
      <div className="footer-cta-band">
        <div className="footer-cta-inner">
          <div>
            <div className="footer-cta-title">Ready to see what's real in your pipeline?</div>
            <div className="footer-cta-desc">Join the waitlist and get early access to OM.</div>
          </div>
          {isHome ? (
            <a href="#waitlist" className="cta-main">Join the waitlist &rarr;</a>
          ) : (
            <Link to="/#waitlist" className="cta-main">Join the waitlist &rarr;</Link>
          )}
        </div>
      </div>

      {/* Footer columns */}
      <div className="footer-grid">
        <div>
          <Link to="/" style={{display:'flex',alignItems:'center',gap:8,textDecoration:'none',marginBottom:4}}>
            <FooterLogoIcon />
            <span style={{fontSize:14,fontWeight:600,color:'#fff'}}>OM</span>
          </Link>
          <p className="footer-tagline">Opportunity management that learns how you win.</p>
        </div>
        <div>
          <div className="footer-col-title">Product</div>
          {isHome ? (
            <>
              <a href="#how-it-works" className="footer-link">How it works</a>
              <a href="#waitlist" className="footer-link">Pricing</a>
              <a href="#waitlist" className="footer-link">Waitlist</a>
            </>
          ) : (
            <>
              <Link to="/#how-it-works" className="footer-link">How it works</Link>
              <Link to="/#waitlist" className="footer-link">Pricing</Link>
              <Link to="/#waitlist" className="footer-link">Waitlist</Link>
            </>
          )}
        </div>
        <div>
          <div className="footer-col-title">Company</div>
          <Link to="/about" className="footer-link">About</Link>
          <Link to="/blog" className="footer-link">Blog</Link>
          <a href="https://www.linkedin.com/company/pipelineom/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span className="f-note">&copy; 2026 OM &middot; Opportunity Management</span>
      </div>
    </footer>
  );
}
