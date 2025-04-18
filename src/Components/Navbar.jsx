 import React, { useState, useEffect } from 'react';
 import { Link } from 'react-router-dom';

 const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed z-50 transition-all duration-300 ease-in-out
      ${scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow-lg py-2' : 'bg-white dark:bg-gray-900 py-4'}`}>
      
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
          Push Garments
        </Link>

        {/* Hamburger + Theme (Mobile) */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setDarkMode(!darkMode)} className="text-2xl">
            {darkMode ? '🌞' : '🌙'}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-800 dark:text-white font-medium">
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/AboutUs" className="hover:text-blue-500">AboutUs</Link></li>
          <li><Link to="/Products" className="hover:text-blue-500">Products</Link></li>
          <li><Link to="/Sustainability" className="hover:text-blue-500">Sustainability</Link></li>
          <li><Link to="/Career" className="hover:text-blue-500">Career</Link></li>
          <li><Link to="/Blog" className="hover:text-blue-500">Blog</Link></li>
          <li>
            <button onClick={() => setDarkMode(!darkMode)} className="hover:text-blue-500">
            {darkMode ? '🌞' : '🌙'}
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 bg-white dark:bg-gray-900">
          <ul className="flex flex-col gap-4 text-gray-800 dark:text-white font-medium">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/AboutUs" className="hover:text-blue-500">AboutUs</Link></li>
            <li><Link to="/Products" className="hover:text-blue-500">Products</Link></li>
            <li><Link to="/Sustainability" className="hover:text-blue-500">Sustainability</Link></li>
            <li><Link to="/Career" className="hover:text-blue-500">Career</Link></li>
            <li><Link to="/Blog" className="hover:text-blue-500">Blog</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
 };

 export default Navbar;
