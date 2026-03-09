import React from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import './Doctors.css';
import dr1 from '../assets/dr_prateek.png';
import dr2 from '../assets/dr2.png';
import dr3 from '../assets/hero.png'; // Reusing hero as a doctor
import dr4 from '../assets/consultation.png'; // Reusing consultation as a doctor

const Doctors = () => {
  const doctors = [
    { name: "Dr. Prateek G Gupta", specialty: "Cosmetic Dentist & Oral Surgeon", img: dr1, active: true },
    { name: "Specialized Staff", specialty: "Laser RCT Expert", img: dr2 },
    { name: "Digital Associate", specialty: "Itero Scan Specialist", img: dr3 },
    { name: "Care Coordinator", specialty: "Patient Experience", img: dr4 }
  ];

  return (
    <section id="doctors" className="doctors-section container">
      <div className="doctors-header">
        <h2 className="section-title">Meet Our Experts Doctors</h2>
        <p className="section-subtitle">Find Industry Experts</p>
        
        <div className="carousel-controls">
          <button className="carousel-btn prev"><ChevronLeft size={20} /></button>
          <button className="carousel-btn next"><ChevronRight size={20} /></button>
        </div>
      </div>
      
      <div className="doctors-grid">
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
              <p>{doc.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;
