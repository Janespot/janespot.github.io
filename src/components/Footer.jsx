import { useLocation, useNavigate } from 'react-router-dom';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleHashLink = (hash) => (e) => {
    e.preventDefault();
    if (isHome) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: hash } });
    }
  };

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="#home" className="footer-logo" onClick={handleHashLink('#home')}>Janespot</a>
          <p>AI Engineer & Full-stack Developer based in Ottawa, Canada.</p>
        </div>
        <div className="footer-links">
          <a href="#home" onClick={handleHashLink('#home')}>Home</a>
          <a href="#about" onClick={handleHashLink('#about')}>About</a>
          <a href="#portfolio" onClick={handleHashLink('#portfolio')}>Portfolio</a>
          <a href="#contact" onClick={handleHashLink('#contact')}>Contact</a>
        </div>
        <SocialLinks id="footer-socials" />
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Jane Odhiambo. All rights reserved.
      </div>
    </footer>
  );
}
