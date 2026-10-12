import React, { useState, useEffect } from 'react';
import { modulesData } from '../data/modulesData';

export default function Modules({ onOpenModal }) {
  const [selectedModule, setSelectedModule] = useState(null);

  const currentIndex = selectedModule ? modulesData.findIndex(m => m.id === selectedModule.id) : -1;

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    if (currentIndex > 0) {
      setSelectedModule(modulesData[currentIndex - 1]);
    } else {
      setSelectedModule(modulesData[modulesData.length - 1]);
    }
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    if (currentIndex < modulesData.length - 1) {
      setSelectedModule(modulesData[currentIndex + 1]);
    } else {
      setSelectedModule(modulesData[0]);
    }
  };

  // Keyboard navigation: Escape to close, ArrowLeft / ArrowRight to flip modules
  useEffect(() => {
    if (!selectedModule) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedModule(null);
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    if (window.__lenis) window.__lenis.stop();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      if (window.__lenis) window.__lenis.start();
    };
  }, [selectedModule, currentIndex]);

  return (
    <section id="modules" className="google-modules-section">
      <div className="container">

        {/* Clean Header: Hospital Modules (No Subheading, Exact Same Size as Given) */}
        <div className="google-modules-header text-center">
          <h2 className="section-title-google">
            Hospital <span className="text-gradient-gemini">Modules</span>
          </h2>
        </div>

        {/* =========================================================
            18 MODULES IN A 5-COLUMN ARCHITECTURE (SLIGHTLY LARGER)
            ========================================================= */}
        <div className="google-modules-grid">
          {modulesData.map((module) => (
            <div
              key={module.id}
              className="google-module-tile"
              onClick={() => setSelectedModule(module)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedModule(module);
                }
              }}
              title={`View ${module.shortTitle} details`}
            >
              {/* Top Row: Squircle Icon + Index Indicator */}
              <div className="google-tile-top-row">
                <div className="google-tile-icon-circle" aria-hidden="true">
                  <i className={`bx ${module.icon}`}></i>
                </div>
                <div className="google-tile-index" aria-hidden="true">
                  <span className="tile-idx-num">{String(module.id).padStart(2, '0')}</span>
                  <i className="bi bi-arrow-up-right tile-idx-arrow"></i>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="google-tile-content">
                <h3 className="google-tile-title">{module.shortTitle}</h3>
                <div className="google-tile-subtitle">{module.subtitle}</div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* =========================================================
          PREMIUM MODULE DETAIL MODAL (HIGH-END EXECUTIVE DIALOG)
          ========================================================= */}
      {selectedModule && (
        <div 
          className="google-module-modal-overlay"
          onClick={() => setSelectedModule(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-module-title"
          data-lenis-prevent="true"
        >
          <div 
            className="google-module-modal-card"
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent="true"
          >
            {/* Modal Header */}
            <div className="google-modal-header">
              <div className="d-flex align-items-center gap-3">
                <div className="google-modal-icon-badge">
                  <i className={`bx ${selectedModule.icon}`}></i>
                </div>
                <div>
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <span className="google-modal-idx-pill">
                      Module {String(selectedModule.id).padStart(2, '0')} of 18
                    </span>
                    <span className="google-modal-cat-badge">
                      {selectedModule.category}
                    </span>
                  </div>
                  <h3 id="modal-module-title" className="google-modal-title">
                    {selectedModule.title}
                  </h3>
                </div>
              </div>

              {/* Quick Header Actions: Prev / Next / Close */}
              <div className="google-modal-header-actions">
                <button
                  type="button"
                  className="google-modal-nav-arrow"
                  onClick={handlePrev}
                  title="Previous Module (←)"
                  aria-label="Previous Module"
                >
                  <i className="bi bi-chevron-left"></i>
                </button>
                <button
                  type="button"
                  className="google-modal-nav-arrow"
                  onClick={handleNext}
                  title="Next Module (→)"
                  aria-label="Next Module"
                >
                  <i className="bi bi-chevron-right"></i>
                </button>
                <button
                  type="button"
                  className="google-modal-close-btn"
                  onClick={() => setSelectedModule(null)}
                  title="Close (Esc)"
                  aria-label="Close dialog"
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="google-modal-body">
              {/* Summary Description */}
              <p className="google-modal-desc">
                {selectedModule.description}
              </p>

              {/* Architectural Highlights Meta Strip */}
              <div className="google-modal-meta-strip">
                <div className="meta-tag-item">
                  <i className="bi bi-shield-check text-primary me-1"></i>
                  <span>Zero Data Silos</span>
                </div>
                <div className="meta-tag-item">
                  <i className="bi bi-lightning-charge-fill text-warning me-1"></i>
                  <span>Real-time Cloud Sync</span>
                </div>
                <div className="meta-tag-item">
                  <i className="bi bi-patch-check-fill text-success me-1"></i>
                  <span>NABH & NABL Ready</span>
                </div>
              </div>

              {/* Core Capabilities & Workflows */}
              <div className="google-modal-features-box">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h4 className="google-features-heading m-0">
                    <i className="bi bi-stars text-primary me-2"></i>
                    Core Capabilities & Workflows
                  </h4>
                  <span className="features-count-pill">
                    {selectedModule.features.length} Features
                  </span>
                </div>
                <div className="google-features-grid">
                  {selectedModule.features.map((feat, fIdx) => (
                    <div key={fIdx} className="google-feature-item">
                      <i className="bi bi-check-circle-fill google-check-icon"></i>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="google-modal-footer">
              <div className="google-modal-footer-nav">
                <button
                  type="button"
                  className="btn btn-sm btn-google-nav-btn"
                  onClick={handlePrev}
                  title="Previous Module"
                >
                  <i className="bi bi-arrow-left me-1"></i> Prev
                </button>
                <span className="footer-nav-counter">
                  {String(selectedModule.id).padStart(2, '0')} / 18
                </span>
                <button
                  type="button"
                  className="btn btn-sm btn-google-nav-btn"
                  onClick={handleNext}
                  title="Next Module"
                >
                  Next <i className="bi bi-arrow-right ms-1"></i>
                </button>
              </div>

              <div className="d-flex align-items-center gap-2">
                <button
                  type="button"
                  className="btn btn-google-outline"
                  onClick={() => setSelectedModule(null)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-google-primary"
                  onClick={() => {
                    setSelectedModule(null);
                    if (onOpenModal) onOpenModal();
                  }}
                >
                  <i className="bi bi-calendar-check me-2"></i>
                  Book Free Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
