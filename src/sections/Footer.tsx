import { Link } from 'react-router-dom';

const FooterLogoIcon = () => (
  <div style={{width:26,height:26,background:'#1B2A4A',borderRadius:6,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
    <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="7.5" stroke="white" strokeWidth="1.2" opacity="0.25"/>
      <circle cx="9" cy="9" r="5" stroke="white" strokeWidth="1.2" opacity="0.55"/>
      <circle cx="9" cy="9" r="2.5" stroke="white" strokeWidth="1.4"/>
      <circle cx="9" cy="9" r="1" fill="white"/>
    </svg>
  </div>
);

export default function Footer() {
  return (
    <footer>
      <div className="f-left">
        <Link to="/" style={{display:'flex',alignItems:'center',gap:8,textDecoration:'none'}}>
          <FooterLogoIcon />
          <span style={{fontFamily:"'Geist',monospace",fontSize:13,fontWeight:600,color:'var(--ink)',letterSpacing:'-0.01em'}}>p(om)</span>
        </Link>
        <Link to="/about" className="f-link">About</Link>
        <Link to="/blog" className="f-link">Blog</Link>
        <a href="https://www.linkedin.com/company/pipelineom/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="f-link">LinkedIn</a>
      </div>
      <span className="f-note">&copy; 2026 OM &middot; Opportunity Management</span>
    </footer>
  );
}
