import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Services.css';
import s1 from '../assets/gallery1.png';
import s2 from '../assets/gallery2.png';
import s3 from '../assets/hero.png';

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
            <h3>5D Digital Scanning</h3>
            <p>Chhattisgarh's first 5D Itero scanner for precise 3D digital impressions and smile simulations.</p>
            <div className="service-arrow"><ArrowUpRight size={20} /></div>
          </div>
          <div className="service-image">
            <img src={s1} alt="5D Digital Scanning" />
          </div>
        </div>
        
        <div className="service-card glass">
          <div className="service-info">
            <h3>Laser Dentistry</h3>
            <p>Advanced laser precision for pain-free RCT, gum treatments, and aesthetic surgery.</p>
            <div className="service-arrow"><ArrowUpRight size={20} /></div>
          </div>
          <div className="service-image">
            <img src={s2} alt="Laser Dentistry" />
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
