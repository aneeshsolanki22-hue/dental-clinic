import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Doctors.css';
import dr1 from '../assets/dr_ravi.jpg';
import dr2 from '../assets/dr_anandita.jpg';

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Ravi Malik",
      specialty: "MDS - Prosthodontics & Implantologist",
      experience: "31+ Years",
      img: dr1
    },
    {
      name: "Dr. Anandita Malik",
      specialty: "BDS - Dentist, Cosmetic/Aesthetic Dentist",
      experience: "29+ Years",
      img: dr2
    }
  ];

  return (
    <section id="doctors" className="doctors-section container">
      <div className="doctors-header">
        <h2 className="section-title">Meet Our Expert Doctors</h2>
        <p className="section-subtitle">28+ Years of Clinical Excellence in Shanker Nagar</p>
      </div>

      <div className="doctors-grid central-grid">
        {doctors.map((doc, index) => (
          <div key={index} className={`doctor-card ${doc.active ? 'active' : ''}`}>
            <div className="doctor-image">
              <img src={doc.img} alt={doc.name} />
              <button className="doctor-arrow">
                <ArrowRight size={18} />
              </button>
            </div>
            <div className="doctor-info">
              <h3>{doc.name}</h3>
              <p className="doc-specialty">{doc.specialty}</p>
              <p className="doc-exp">{doc.experience} Experience</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;
