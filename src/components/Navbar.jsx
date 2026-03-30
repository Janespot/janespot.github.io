import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const handleHashLink = (hash) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (!isHome) {
      window.location.href = `/${hash}`;
      return;
    }
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const hashLinks = [
    { label: 'Home', hash: '#home' },
    { label: 'About', hash: '#about' },
    { label: 'Skills', hash: '#skills' },
    { label: 'Experience', hash: '#experience' },
    { label: 'Portfolio', hash: '#portfolio' },
    { label: 'Contact', hash: '#contact' },
  ];

  return (
    <nav>
      <Link to="/" className="nav-brand" onClick={() => setMenuOpen(false)}>
        Janespot
      </Link>
      <div className="nav-right">
        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          <i className="material-icons">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</i>
        </button>
        <button
          className="nav-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <i className="material-icons">{menuOpen ? 'close' : 'menu'}</i>
        </button>
      </div>
      <div className={`nav-links${menuOpen ? ' open' : ''}`}>
        {hashLinks.map(({ label, hash }) => (
          <a key={label} href={hash} onClick={handleHashLink(hash)}>
            {label}
          </a>
        ))}
        <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
      </div>
    </nav>
  );
}
