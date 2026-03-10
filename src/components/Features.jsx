import React from 'react';
import { ChevronRight, Video, ShieldCheck, Clock, Mic, PhoneOff } from 'lucide-react';
import './Features.css';
import consultationImg from '../assets/consultation_malik.jpg';

const Features = () => {
  const featureList = [
    "Dental Implants",
    "Cosmetic Dentistry",
    "Full Mouth Rehab",
    "Laser RCT & Surgery"
  ];

  return (
    <section id="services" className="features-section container">
      <div className="features-left">
        <h2 className="section-title">Features <br /> & Services</h2>
        <div className="feature-items">
          {featureList.map((item, index) => (
            <div key={index} className="feature-item glass">
              <span>{item}</span>
              <ChevronRight size={18} className="feature-arrow" />
            </div>
          ))}
        </div>
      </div>
      
      <div className="features-right">
        <div className="consultation-card glass">
          <div className="card-header">
            <h3 className="card-title">Online Consultation</h3>
            <p className="card-subtitle">Your Gateway To Smarter Dental Care By Telehealth</p>
          </div>
          
          <div className="call-preview">
            <img src={consultationImg} alt="Online Consultation" className="call-img" />
            <div className="call-status">
              <span className="status-dot"></span>
              Live
            </div>
            <div className="call-controls">
              <button className="control-btn mute"><Mic size={16} /></button>
              <button className="control-btn end"><PhoneOff size={16} /></button>
              <button className="control-btn video"><Video size={16} /></button>
            </div>
          </div>
          
          <div className="consultation-info">
            <div className="info-item">
              <div className="info-icon blue"><ShieldCheck size={20} /></div>
              <div className="info-text">
                <h4>Safe & Protected</h4>
                <div className="info-arrow"><ChevronRight size={14} /></div>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon green"><Clock size={20} /></div>
              <div className="info-text">
                <h4>24/7 Service</h4>
                <div className="info-arrow"><ChevronRight size={14} /></div>
              </div>
            </div>
          </div>
          <button className="consultation-action">
            <Video size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
