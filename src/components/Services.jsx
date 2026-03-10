import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Services.css';
import s1 from '../assets/about3.jpg';
import s2 from '../assets/about2.jpg';
import s3 from '../assets/dr_ravi.jpg';

const Services = () => {
  return (
    <section id="services-grid" className="services-section container">
      <div className="services-header">
        <h2 className="section-title">Comprehensive Dental Services <br /> For A Healthy Smile</h2>
        <p className="section-subtitle">
          Whether you need routine check-ups, cosmetic enhancements, or advanced 
          dental solutions, our expert team provides comprehensive care tailored 
          to make your smile healthy.
        </p>
      </div>
      
      <div className="services-grid">
        <div className="service-card glass">
          <div className="service-info">
            <h3>Advanced Dental Implants</h3>
            <p>Specialized implant procedures for permanent tooth replacement with 28 years of surgical expertise.</p>
            <div className="service-arrow"><ArrowUpRight size={20} /></div>
          </div>
          <div className="service-image">
            <img src={s1} alt="Advanced Dental Implants" />
          </div>
        </div>
        
        <div className="service-card glass">
          <div className="service-info">
            <h3>Laser & Cosmetic Care</h3>
            <p>Painless RCT, laser gum treatments, and aesthetic smile enhancements by MDS experts.</p>
            <div className="service-arrow"><ArrowUpRight size={20} /></div>
          </div>
          <div className="service-image">
            <img src={s2} alt="Laser & Cosmetic Care" />
          </div>
        </div>
        
        <div className="service-card special-card">
          <div className="special-content">
            <h3>More Services For Your Perfect Smile</h3>
            <img src={s3} alt="Perfect Smile" className="smiling-img" />
            <button className="btn btn-primary explore-btn">Explore More Service</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
