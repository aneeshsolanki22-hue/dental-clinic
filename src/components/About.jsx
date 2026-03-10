import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './About.css';
import g1 from '../assets/about1.jpg';
import g2 from '../assets/about2.jpg';
import g3 from '../assets/about3.jpg';
import g4 from '../assets/about4.jpg';
import g5 from '../assets/about5.jpg';

const About = () => {
  const points = [
    "Advanced Dental Care For Every Smile",
    "Personalized Treatment Tailored To You",
    "Modern Technology For Better Results",
    "Comfort, Safety, And Quality Guaranteed",
    "Your Smile, Our Responsibility"
  ];

  return (
    <section id="about" className="about-section container">
      <div className="about-content">
        <h2 className="section-title">28 Years of Excellence in <br /> Prosthodontics & Implants</h2>
        <p className="section-desc">
          Malik Dental Clinic And Implant Centre, led by Dr. Ravi Malik (MDS), 
          has been a trusted name in Shanker Nagar, Raipur since 2000. 
          With 28 years of clinical experience, we specialize in high-quality 
          dental implants and aesthetic oral rehabilitation.
        </p>
        
        <ul className="about-points">
          <li className="about-point">
            <CheckCircle2 className="check-icon" size={20} />
            <span>MDS - Specialized Prosthodontist & Implantologist</span>
          </li>
          <li className="about-point">
            <CheckCircle2 className="check-icon" size={20} />
            <span>28+ Years of Clinical Expertise</span>
          </li>
          <li className="about-point">
            <CheckCircle2 className="check-icon" size={20} />
            <span>Advanced Dental Implant Procedures</span>
          </li>
          <li className="about-point">
            <CheckCircle2 className="check-icon" size={20} />
            <span>Full Mouth Rehabilitation & Smile Design</span>
          </li>
          <li className="about-point">
            <CheckCircle2 className="check-icon" size={20} />
            <span>Pain-Free Laser RCT & Surgical Solutions</span>
          </li>
        </ul>
      </div>
      
      <div className="about-gallery">
        <div className="gallery-grid">
          <div className="gallery-item item-1"><img src={g1} alt="Clinic Interior 1" /></div>
          <div className="gallery-item item-2"><img src={g2} alt="Clinic Treatment" /></div>
          <div className="gallery-item item-3"><img src={g3} alt="Dental Chair" /></div>
          <div className="gallery-item item-4"><img src={g4} alt="Modern Clinic Room" /></div>
          <div className="gallery-item item-5"><img src={g5} alt="Clinic Entrance" /></div>
        </div>
      </div>
    </section>
  );
};

export default About;
