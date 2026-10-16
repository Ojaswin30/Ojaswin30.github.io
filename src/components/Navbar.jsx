import React from 'react';

export default function Navbar({ activeSection }) {
  return (
    <nav>
      <a href="#" className="logo">Ojaswin Aggarwal</a>
      <ul className="nav-links">
        <li>
          <a
            href="#services"
            className={activeSection === 'services' ? 'active' : ''}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#work"
            className={activeSection === 'work' ? 'active' : ''}
          >
            Work
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={activeSection === 'about' ? 'active' : ''}
          >
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-hire">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
