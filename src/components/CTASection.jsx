import React from 'react';
import './CTASection.css';
import dr1 from '../assets/dr_ravi.jpg';
import dr2 from '../assets/dr_anandita.jpg';
import dr3 from '../assets/hero_malik.jpg';

const CTASection = () => {
  return (
    <section className="cta-section container">
      <div className="cta-box glass">
        <h2 className="cta-title">Get In Touch With Us</h2>
        
        <div className="cta-patient-info">
          <div className="cta-avatars">
            <img src={dr1} alt="Patient 1" />
            <img src={dr2} alt="Patient 2" />
            <img src={dr3} alt="Patient 3" />
          </div>
          <p>5000+ Satisfied Patients</p>
        </div>
        
        <div className="cta-btns">
          <button className="btn btn-outline">Get Started Today</button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
