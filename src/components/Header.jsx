import React from 'react';
import './Header.css';
import logo from '../assets/logo_malik.jpg';

const Header = () => {
  return (
    <header className="header glass">
      <div className="container header-container">
        <div className="logo">
          <img src={logo} alt="Malik Dental Clinic" className="logo-img" />
          <span className="logo-text">Malik Dental Clinic</span>
        </div>
        
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#doctors">Doctors</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;
