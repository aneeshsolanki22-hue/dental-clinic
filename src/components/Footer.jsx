import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';
import logo from '../assets/logo_malik.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo white">
            <img src={logo} alt="Malik Dental Clinic" className="logo-img" />
            <span>Malik Dental Clinic</span>
          </div>
          <p className="footer-tagline">Clinical Excellence in Prosthodontics & Implants. <br /> Shanker Nagar, Raipur.</p>
          <p className="footer-address" style={{fontSize: '0.85rem', marginBottom: '20px', opacity: 0.7}}>
            Shop No 4, Block No C, Vineet Estates, <br />
            Shanker Nagar, Raipur, Chhattisgarh 492004
          </p>
          <div className="social-links">
            <button className="social-btn"><Facebook size={18} /></button>
            <button className="social-btn"><Twitter size={18} /></button>
            <button className="social-btn"><Instagram size={18} /></button>
            <button className="social-btn"><Linkedin size={18} /></button>
          </div>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Doctors</a></li>
            </ul>
          </div>
          
          <div className="link-group">
            <h3>Solutions</h3>
            <ul>
              <li><a href="#">Preventive Care</a></li>
              <li><a href="#">Pediatric Dentistry</a></li>
              <li><a href="#">Orthodontics</a></li>
              <li><a href="#">Dental Implants</a></li>
              <li><a href="#">Teeth Whitening</a></li>
            </ul>
          </div>
          
          <div className="link-group">
            <h3>Features</h3>
            <ul>
              <li><a href="#">Expert Care</a></li>
              <li><a href="#">Advanced Technology</a></li>
              <li><a href="#">Affordable Plans</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom container">
        <p>Privacy Policy | Terms & Condition | Created by Toukir Solanki</p>
      </div>
      
    </footer>
  );
};

export default Footer;
