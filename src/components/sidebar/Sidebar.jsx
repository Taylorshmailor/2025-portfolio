import React, { useState, useEffect } from 'react';
import './sidebar.css';
import Logo from '../../assets/Taylor_Logo.svg';

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
  const sections = document.querySelectorAll('section');

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset + window.innerHeight / 2;
    let closestSection = '';
    let closestDistance = Infinity;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionMiddle = sectionTop + sectionHeight / 2;

      const distance = Math.abs(scrollPosition - sectionMiddle);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestSection = section.getAttribute('id');
      }
    });

    setActiveSection(closestSection);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  
  return (
    <>
      <aside className={toggle ? 'aside show-menu' : 'aside'}>
        <a href="#home" className="nav_logo">
          <img src={Logo} alt="logo" />
        </a>

        <nav className="nav">
          <div className="nav_menu">
            <ul className="nav_list">
              <li className={`nav_item ${activeSection === 'home' ? 'active' : ''}`}>
                <a href="#home" className="nav_link">
                  <i className="icon-home"></i>
                </a>
              </li>
              <li className={`nav_item ${activeSection === 'about' ? 'active' : ''}`}>
                <a href="#about" className="nav_link">
                  <i className="icon-user-following"></i>
                </a>
              </li>
              <li className={`nav_item ${activeSection === 'services' ? 'active' : ''}`}>
                <a href="#services" className="nav_link">
                  <i className="icon-briefcase"></i>
                </a>
              </li>
              <li className={`nav_item ${activeSection === 'resume' ? 'active' : ''}`}>
                <a href="#resume" className="nav_link">
                  <i className="icon-graduation"></i>
                </a>
              </li>
              <li className={`nav_item ${activeSection === 'portfolio' ? 'active' : ''}`}>
                <a href="#portfolio" className="nav_link">
                  <i className="icon-layers"></i>
                </a>
              </li>
              <li className={`nav_item ${activeSection === 'blog' ? 'active' : ''}`}>
                <a href="#blog" className="nav_link">
                  <i className="icon-notebook"></i>
                </a>
              </li>
              <li className={`nav_item ${activeSection === 'contact' ? 'active' : ''}`}>
                <a href="#contact" className="nav_link">
                  <i className="icon-bubbles"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav_footer">
          <span className="copyright">&copy; 2024 - 2025.</span>
        </div>
      </aside>

      <div
        className={toggle ? 'nav_toggle nav_toggle-open' : 'nav_toggle'}
        onClick={() => showMenu(!toggle)}
      >
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar;
