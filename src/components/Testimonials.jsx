import React from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';
import p1 from '../assets/patient1.png';
import p2 from '../assets/patient2.png';
import p3 from '../assets/patient3.png';
import p4 from '../assets/patient4.png';
import p5 from '../assets/patient5.png';

const Testimonials = () => {
  const reviews = [
    {
      name: "Amit S.",
      role: "Verified Patient",
      text: "The 5D scanner and laser RCT experience at Hi-Tech was amazing. Dr. Prateek explained everything digitally before starting. Highly recommended in Raipur!",
      img: p1
    },
    {
      name: "Sriya P.",
      role: "Verified Patient",
      text: "I was scared of dental visits, but the laser treatment here was absolutely painless. The clinic's hygiene and tech are top-notch.",
      img: p2
    },
    {
      name: "Rajesh K.",
      role: "Verified Patient",
      text: "Digital smile designing changed my confidence. Best cosmetic dental care in Chhattisgarh. Staff is very cooperative and professional.",
      img: p3
    },
    {
      name: "Neha V.",
      role: "Verified Patient",
      text: "Quick and efficient service. The Itero scan was so much better than traditional moulds. Truly a hi-tech experience as the name suggests!",
      img: p4
    },
    {
      name: "Vikram R.",
      role: "Verified Patient",
      text: "Highly skilled doctors and very reasonable costs for the advanced technology they use. My family's go-to dental clinic now.",
      img: p5
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section container">
      <div className="testimonials-header">
        <h2 className="section-title">Healing Stories From <br /> Our Patients</h2>
        <p className="section-subtitle">
          Authentic Experiences Shared By Real Patients Who Found Healing, 
          Comfort, And Trust Through Our Expert Care — Transforming Lives, 
          One Treatment At A Time at Hi-Tech Dental Care.
        </p>
      </div>
      
      <div className="testimonials-grid">
        {reviews.map((rev, index) => (
          <div key={index} className="testimonial-card glass">
            <p className="testimonial-text">"{rev.text}"</p>
            <div className="testimonial-footer">
              <div className="author-info">
                <img src={rev.img} alt={rev.name} className="author-img" />
                <div>
                  <h4>{rev.name}</h4>
                  <p>{rev.role}</p>
                </div>
              </div>
              <div className="quote-icon"><Quote size={20} fill="currentColor" /></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="testimonial-pagination">
        <button className="page-btn prev"><ChevronLeft size={18} /></button>
        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn next"><ChevronRight size={18} /></button>
      </div>
    </section>
  );
};

export default Testimonials;
