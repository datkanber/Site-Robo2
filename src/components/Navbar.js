import React, { useState, useEffect, useRef } from 'react';
import { FaMusic } from 'react-icons/fa';
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
  const [isPlaying, setIsPlaying] = useState(false);
  const menuRef = useRef();
  const menuToggleRef = useRef();
  const audioRef = useRef(new Audio('/music.mp3')); // Müzik dosyasının yolunu belirtin

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

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current; // Referansı bir değişkene kopyalayın
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      audio.pause(); // Cleanup fonksiyonunda değişkeni kullanın
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
        <div className="music-container pt-1" onClick={toggleMusic}>
          <FaMusic className="music-icon" />
          <div className="music-label">live music</div>
        </div>
        <div className="menu-toggle pr-4" id="mobile-menu" onClick={toggleMenu} ref={menuToggleRef}>
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
