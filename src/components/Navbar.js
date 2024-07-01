import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import ReactLogo from './ReactLogo'; 

const MenuItems = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#blog', label: 'Blog' },
  { href: '#ainews', label: 'AI' },
  { href: '#sapnews', label: 'SAP' },
  { href: '#coding', label: 'Coding' },
  { href: '#weather', label: 'Weather' },
  { href: '#exchange-rates', label: 'Rates' },
  { href: '#livestream', label: 'Stream' },
  { href: '#kaggledata', label: 'Kaggle' },
  { href: '#github-trending', label: 'GitHub' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const menuToggleRef = useRef();

  const toggleMenu = (event) => {
    setIsOpen(!isOpen);
    event.stopPropagation();
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current && !menuRef.current.contains(event.target) &&
      menuToggleRef.current && !menuToggleRef.current.contains(event.target)
    ) {
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
            <ReactLogo />
          </div>
          <a href="#home" className="brand-name">
            burakkanber<span className="brand-dev">.dev</span>
          </a>
        </div>
        <div className="menu-toggle" id="mobile-menu" onClick={toggleMenu} ref={menuToggleRef}>
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
