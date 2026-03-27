import { Link } from 'react-router-dom';

const FooterLogoIcon = () => (
  <img src="/logo.png" alt="OM" width={26} height={26} style={{borderRadius:6,flexShrink:0}} />
);

export default function Footer() {
  return (
    <footer>
      <div className="f-left">
        <Link to="/" style={{display:'flex',alignItems:'center',gap:8,textDecoration:'none'}}>
          <FooterLogoIcon />
          <span style={{fontFamily:"'Geist',monospace",fontSize:13,fontWeight:600,color:'var(--ink)',letterSpacing:'-0.01em'}}>OM</span>
        </Link>
        <Link to="/about" className="f-link">About</Link>
        <Link to="/blog" className="f-link">Blog</Link>
        <a href="https://www.linkedin.com/company/pipelineom/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="f-link">LinkedIn</a>
      </div>
      <span className="f-note">&copy; 2026 OM &middot; Opportunity Management</span>
    </footer>
  );
}
