import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './About.css';
import g1 from '../assets/interior1.jpg';
import g2 from '../assets/interior2.jpg';
import hero from '../assets/hero_hitech.png';
import dr1 from '../assets/dr_prateek.png';
import dr2 from '../assets/patient1.png';
import consultation from '../assets/patient2.png';

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
        <h2 className="section-title">Chhattisgarh's First <br /> 5D Itero Studio</h2>
        <p className="section-desc">
          Established in 2019 in Katora Talab, Raipur, Hi-Tech Dental Care is 
          dedicated to bringing digital precision to dentistry. We are proud 
          to be the only clinic in Chhattisgarh equipped with the 5D Itero Scanner.
        </p>
        
        <ul className="about-points">
          <li className="about-point">
            <CheckCircle2 className="check-icon" size={20} />
            <span>Exclusive 5D Itero Scanner Technology</span>
          </li>
          <li className="about-point">
            <CheckCircle2 className="check-icon" size={20} />
            <span>Advanced Laser Dentistry Solutions</span>
          </li>
          <li className="about-point">
            <CheckCircle2 className="check-icon" size={20} />
            <span>9+ Years Specialized Expertise</span>
          </li>
          <li className="about-point">
            <CheckCircle2 className="check-icon" size={20} />
            <span>Digital Smile Designing (DSD)</span>
          </li>
          <li className="about-point">
            <CheckCircle2 className="check-icon" size={20} />
            <span>Pain-Free Laser RCT Treatments</span>
          </li>
        </ul>
      </div>
      
      <div className="about-gallery">
        <div className="gallery-grid">
          <div className="gallery-item item-1"><img src={g1} alt="Gallery 1" /></div>
          <div className="gallery-item item-3"><img src={g2} alt="Gallery 3" /></div>
          <div className="gallery-item item-4"><img src={dr1} alt="Gallery 4" /></div>
          <div className="gallery-item item-5"><img src={dr2} alt="Gallery 5" /></div>
          <div className="gallery-item item-6"><img src={consultation} alt="Gallery 6" /></div>
        </div>
      </div>
    </section>
  );
};

export default About;
