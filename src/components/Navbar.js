import React, { useState, useEffect, useRef } from 'react';

const MenuItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
  { href: '#exchange-rates', label: 'Rates' },
  { href: '#weather', label: 'Weather' },
  { href: '#ainews', label: 'AI News' },
  { href: '#kaggledata', label: 'Kaggle News' },
  { href: '#sapnews', label: 'SAP News' },
  { href: '#github-trending', label: 'GitHub News' },
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
    <nav className="bg-gradient-to-r from-white to-gray-200 text-gray-900 fixed w-full top-0 z-50 shadow-lg py-4 transition duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-gray-900 p-2">
            <img src="neurogem-logo.png" alt="NeuroGem Logo" className="w-10 h-10" />
          </div>
          <div className="text-2xl font-semibold tracking-wider mt-2">
            <a href="#home" className="hover:text-gray-600 transition duration-300">NeuroGem</a>
          </div>
        </div>
        <ul className="hidden md:flex justify-center space-x-8 font-medium">
          {MenuItems.map((item) => (
            <li key={item.href} className="relative group">
              <a href={item.href} className="hover:text-gray-600 transition duration-300">{item.label}</a>
              <div className="absolute left-0 top-10 w-full h-1 bg-gray-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="md:hidden flex items-center px-3 py-2 border rounded text-gray-800 border-gray-800 hover:text-gray-600 hover:border-gray-600 transition duration-300"
        >
          <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        ref={menuRef}
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-gray-100 text-gray-800 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out p-8 space-y-4 shadow-lg`}
      >
        <div className="flex justify-end">
          <button
            onClick={toggleMenu}
            aria-label="Close menu"
            className="px-3 py-2 border rounded text-gray-800 border-gray-800 hover:text-gray-600 hover:border-gray-600 transition duration-300"
          >
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Close</title>
              <path d="M10 8.586l4.95-4.95a1 1 0 011.414 1.414L11.414 10l4.95 4.95a1 1 0 01-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 01-1.414-1.414L8.586 10 3.636 5.05a1 1 0 011.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <ul>
          {MenuItems.map((item) => (
            <li key={item.href} className="block">
              <a href={item.href} className="block px-4 py-2 text-2xl hover:text-gray-600 transition duration-300">{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
