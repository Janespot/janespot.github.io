import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">Janespot</a>
          <p>AI Engineer & Full-stack Developer based in Ottawa, Canada.</p>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
        <SocialLinks id="footer-socials" />
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Jane Odhiambo. All rights reserved.
      </div>
    </footer>
  );
}
