import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo white">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L4 6V11C4 16.5 7.5 21.5 12 23C16.5 21.5 20 16.5 20 11V6L12 2Z" fill="#ffffff"/>
                <path d="M12 5V19M12 5L9 8M12 5L15 8" stroke="#005a64" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span>Hi-Tech Dental Care</span>
          </div>
          <p className="footer-tagline">Chhattisgarh's First 5D Itero Scanner Studio. <br /> Katora Talab, Raipur.</p>
          <p className="footer-address" style={{fontSize: '0.85rem', marginBottom: '20px', opacity: 0.7}}>
            Opposite IDBI Bank, Katora Talab Main Rd, <br />
            Rajendra Nagar, Raipur, Chhattisgarh 492001
          </p>
          <div className="newsletter">
            <input type="email" placeholder="Email Address" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
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
              <li><a href="#">Appointments</a></li>
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
        <p>Privacy Policy | Terms & Condition | Cookies Settings</p>
      </div>
      
      <div className="footer-bg-text">Denty</div>
    </footer>
  );
};

export default Footer;
