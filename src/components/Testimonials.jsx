import React, { useState, useEffect } from "react";
import { testimonialsData } from "../data/testimonialsData";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const total = testimonialsData.length;

  const goTo = (idx) => {
    if (animating || idx === currentIndex) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex(idx);
      setAnimating(false);
    }, 220);
  };

  const prev = () => goTo(currentIndex === 0 ? total - 1 : currentIndex - 1);
  const next = () => goTo(currentIndex === total - 1 ? 0 : currentIndex + 1);

  useEffect(() => {
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, [currentIndex]);

  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="testi-cinematic-section">
      <div className="container">

        {/* Clean Header: Doctor Testimonials (No Eyebrow, No Subtitle, Exact Google Standard) */}
        <div className="google-modules-header text-center mb-4">
          <h2 className="section-title-google">
            Doctor <span className="text-gradient-gemini">Testimonials</span>
          </h2>
        </div>

        {/* Compact Single-Page Executive Testimonial Showcase */}
        <div className="testi-showcase-wrapper">
          <div className="testi-spotlight-card">

            {/* Top Toolbar: Verified Status + Nav Controls */}
            <div className="testi-card-top-bar">
              <div className="testi-meta-left">
                <div className="testi-stars-row">
                  {[...Array(current.rating)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill text-warning" />
                  ))}
                </div>
                <span className="testi-verified-tag">
                  <i className="bi bi-patch-check-fill text-primary me-1" />
                  Verified Hospital Partner
                </span>
              </div>

              <div className="testi-nav-controls">
                <button
                  className="testi-nav-arrow-btn"
                  onClick={prev}
                  title="Previous Testimonial"
                  aria-label="Previous Testimonial"
                >
                  <i className="bi bi-chevron-left" />
                </button>
                <span className="testi-counter-badge">
                  <strong>{String(currentIndex + 1).padStart(2, '0')}</strong> / {String(total).padStart(2, '0')}
                </span>
                <button
                  className="testi-nav-arrow-btn"
                  onClick={next}
                  title="Next Testimonial"
                  aria-label="Next Testimonial"
                >
                  <i className="bi bi-chevron-right" />
                </button>
              </div>
            </div>

            {/* Card Body: Quote */}
            <div className={`testi-quote-body ${animating ? "testi-fade-out" : "testi-fade-in"}`}>
              <div className="testi-quote-mark">
                <i className="bi bi-quote" />
              </div>
              <blockquote className="testi-quote-content">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
            </div>

            {/* Card Footer: Doctor Attribution */}
            <div className={`testi-doctor-bar ${animating ? "testi-fade-out" : "testi-fade-in"}`}>
              <div className="testi-avatar-wrapper">
                <img
                  src={current.image}
                  alt={current.name}
                  className="testi-avatar-img"
                  onError={(e) => { e.target.src = "/assets/img/testimonials/dr.satish.png"; }}
                />
              </div>
              <div className="testi-doctor-details">
                <div className="testi-doctor-name">{current.name}</div>
                <div className="testi-doctor-role">{current.designation}</div>
                <div className="testi-doctor-location">
                  <i className="bi bi-geo-alt-fill text-muted me-1" />
                  {current.location}
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Doctor Dock - 1-Click Select Any Clinician */}
          <div className="testi-doctor-dock">
            {testimonialsData.map((doc, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={doc.id}
                  className={`testi-dock-pill ${isActive ? "active" : ""}`}
                  onClick={() => goTo(idx)}
                  title={doc.name}
                >
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="testi-dock-avatar"
                    onError={(e) => { e.target.src = "/assets/img/testimonials/dr.satish.png"; }}
                  />
                  <span className="testi-dock-name">{doc.name.replace("Hospital", "Hosp.")}</span>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}