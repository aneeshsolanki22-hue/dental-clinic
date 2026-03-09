import React from 'react';
import { Star, Play, ArrowRight, Clock, UserCheck } from 'lucide-react';
import './Hero.css';
import heroImg from '../assets/hero_hitech.png';
import dr1 from '../assets/dr1.png';
import dr2 from '../assets/dr2.png';

const Hero = () => {
  return (
    <section id="home" className="hero container">
      <div className="hero-content">
        <div className="rating-badge glass">
          <Star className="star-icon" size={16} fill="#FFD700" color="#FFD700" />
          <span>5.2/450+ Reviews!</span>
        </div>
        
        <h1 className="hero-title">
          Advanced Digital Dentistry, <br />
          <span>In The Heart Of Raipur</span>
        </h1>
        
        <p className="hero-description">
          Experience Chhattisgarh's first 5D Itero Scanner and precise Laser Dentistry. 
          Expert care for a brighter, healthier smile.
        </p>
        
        <div className="hero-btns">
          <button className="btn btn-primary">Book Appointment</button>
          <button className="btn btn-outline-hero">
            <div className="play-icon"><Play size={14} fill="currentColor" /></div>
            Get Started Today
          </button>
        </div>
        
        <div className="hero-floating-cards">
          <div className="hero-card glass">
            <div className="hero-card-img" style={{background: '#fef3f2'}}>
              <Clock size={20} color="#ff8c42" />
            </div>
            <div className="hero-card-info">
              <h4>24/7 Service Available</h4>
              <div className="avatar-group">
                <img src={dr1} alt="Dr 1" />
                <div className="arrow-btn"><ArrowRight size={14} /></div>
              </div>
            </div>
          </div>
          
          <div className="hero-card glass">
            <div className="hero-card-img" style={{background: '#f0f9ff'}}>
              <UserCheck size={20} color="#0087a3" />
            </div>
            <div className="hero-card-info">
              <h4>Find The Best Doctors</h4>
              <div className="avatar-group">
                <img src={dr2} alt="Dr 2" />
                <div className="arrow-btn"><ArrowRight size={14} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-visual">
        <div className="hero-image-container">
          <img src={heroImg} alt="Dental Care" className="hero-main-img" />
          
          <div className="stats-overlay glass">
            <div className="stat-item">
              <h3>200+</h3>
              <p>Expert Doctors</p>
            </div>
            <div className="stat-item">
              <h3>400+</h3>
              <p>Recover Patient</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Satisfied Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
