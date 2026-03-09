import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header glass">
      <div className="container header-container">
        <div className="logo">
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L4 6V11C4 16.5 7.5 21.5 12 23C16.5 21.5 20 16.5 20 11V6L12 2Z" fill="#005a64"/>
              <path d="M12 5V19M12 5L9 8M12 5L15 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="logo-text">Hi-Tech Dental Care</span>
        </div>
        
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#doctors">Doctors</a></li>
            <li><a href="#appointments">Appointments</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;
