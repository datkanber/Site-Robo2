import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaStop } from 'react-icons/fa'; // Importing play and stop icons
import { Link } from 'react-router-dom';
import './Navbar.css';
import ReactLogo from './ReactLogo';
import Banner from './Banner'; // Banner bileşenini ekliyoruz

const MenuItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/chatbot', label: 'Chatbot' },
  { to: '/coding', label: 'Coding' },
  { to: '/weather', label: 'Weather' },
  { to: '/kaggledata', label: 'Kaggle' },
  { to: '/Arnews', label: 'AI' },
  { to: '/sapnews', label: 'SAP' },
  { to: '/github-trending', label: 'GitHub' },
  { to: '/exchange-rates', label: 'Rates' },
  { to: '/livestream', label: 'Stream' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const menuRef = useRef();
  const menuToggleRef = useRef();
  const audioRef = useRef(new Audio('/music.mp3'));

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
    const audio = audioRef.current;
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      audio.pause();
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="brand">
            <div className="animated-logo">
              <ReactLogo />
            </div>
            <Link to="/" className="brand-name">
              burakkanber<span className="brand-dev pr-7">.dev</span>
            </Link>
          </div>
          <button 
            aria-label={isPlaying ? "Stop Music" : "Play Music"} 
            className={`music-icon ${isPlaying ? 'playing' : ''}`} 
            onClick={toggleMusic}
          >
            {isPlaying ? <FaStop /> : <FaPlay />}
          </button>
          <button 
            aria-label="Toggle Menu" 
            className="menu-toggle pr-4" 
            id="mobile-menu" 
            onClick={toggleMenu} 
            ref={menuToggleRef}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <ul className={`menu ${isOpen ? 'open' : ''}`} ref={menuRef}>
            {MenuItems.map((item) => (
              <li key={item.to} className="menu-item">
                <Link to={item.to} className="menu-link" onClick={() => setIsOpen(false)}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <Banner /> {/* Banner bileşenini burada ekliyoruz */}
    </>
  );
};

export default Navbar;
