import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';
const Testimonials = () => {
  const reviews = [
    {
      name: "Amit S.",
      role: "Verified Patient",
      text: "The dental implant procedure at Malik Dental Clinic was truly professional. Dr. Ravi Malik's 31 years of experience is evident in his expertise. Highly recommended in Shanker Nagar!",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Sriya P.",
      role: "Verified Patient",
      text: "I was looking for a specialized prosthodontist, and Dr. Ravi Malik provided excellent care for my bridge treatment. The clinic environment is very comfortable.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Rajesh K.",
      role: "Verified Patient",
      text: "Expert implantologist and a very helpful team. My smile restoration was handled with great precision. The best cosmetic dental care in Raipur.",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Neha V.",
      role: "Verified Patient",
      text: "Quick and efficient service. Dr. Malik's consultation was very thorough, and he explained all implant options clearly. Truly value his experience!",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Vikram R.",
      role: "Verified Patient",
      text: "Highly skilled MDS doctor and very reasonable costs for such specialized treatments. Shanker Nagar's most trusted dental clinic.",
      img: "https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?auto=format&fit=crop&w=150&q=80"
    }
  ];

  const ITEMS_PER_PAGE = 3;
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(reviews.length / ITEMS_PER_PAGE);
  const visible = reviews.slice(page * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE + ITEMS_PER_PAGE);

  return (
    <section id="testimonials" className="testimonials-section container">
      <div className="testimonials-header">
        <h2 className="section-title">Healing Stories From <br /> Our Patients</h2>
        <p className="section-subtitle">
          Authentic Experiences Shared By Real Patients Who Found Healing, 
          Comfort, And Trust Through Our Expert Care — Transforming Lives, 
          One Treatment At A Time at Malik Dental Clinic.
        </p>
      </div>
      
      <div className="testimonials-grid">
        {visible.map((rev, index) => (
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
        <button className="page-btn prev" onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0}>
          <ChevronLeft size={18} />
        </button>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button key={i} className={`page-btn ${page === i ? 'active' : ''}`} onClick={() => setPage(i)}>
            {i + 1}
          </button>
        ))}
        <button className="page-btn next" onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))} disabled={page === totalPages - 1}>
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
