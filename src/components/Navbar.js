import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css'; // Ensure your CSS file is imported

const MenuItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
  { href: '#exchange-rates', label: 'Rates' },
  { href: '#weather', label: 'Weather' },
  { href: '#ainews', label: 'AI' },
  { href: '#kaggledata', label: 'Kaggle' },
  { href: '#sapnews', label: 'SAP' },
  { href: '#github-trending', label: 'GitHub' },
  { href: '#livestream', label: 'Stream' },
  { href: '#coding', label: 'Coding' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand">
          <div className="animated-logo">
            <img src="/logo.png" alt="burakkanber logo" />
          </div>
          <a href="#home" className="brand-name">
            burakkanber<span className="brand-dev">.dev</span>
          </a>
        </div>
        <div className="menu-toggle" id="mobile-menu" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`menu ${isOpen ? 'open' : ''}`} ref={menuRef}>
          {MenuItems.map((item) => (
            <li key={item.href} className="menu-item">
              <a href={item.href} className="menu-link" onClick={() => setIsOpen(false)}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
