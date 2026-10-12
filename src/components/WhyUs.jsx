import React from 'react';

export default function WhyUs({ onOpenModal }) {
  return (
    <section id="why-us" className="section-padding">
      <div className="container">

        {/* Section Header with limited wording */}
        <div className="section-header-google">
          <div className="section-pill-badge">
            <i className="bi bi-shield-check"></i>
            <span>Why Choose TRIO</span>
          </div>
          <h2 className="section-title-google">
            Simple, Sustainable & <span className="text-gradient-gemini">Scalable</span>
          </h2>
          <p className="section-desc-google">
            Built on 10 years of healthcare domain expertise to eliminate hospital silos and elevate patient care.
          </p>
        </div>

        {/* Google Bento Grid with limited wording & animated boundaries */}
        <div className="bento-container">
          
          {/* Card 1: Heritage & Trust (Span 8) */}
          <div className="bento-box col-span-8">
            <div className="bento-box-beam"></div>
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div className="bento-icon">
                <i className="bx bx-award"></i>
              </div>
              <span className="bento-live-badge">
                <span className="topbar-pulse-dot"></span>
                <span>200+ Live Hospitals</span>
              </span>
            </div>
            <span className="bento-tag">ENTERPRISE PROVEN</span>
            <h3 className="bento-heading">10+ Years Healthcare Trust</h3>
            <p className="bento-text">
              Unified hospital operations powering top institutions across India and abroad with 99.98% uptime.
            </p>
            
            {/* Limited Wording Pills */}
            <div className="bento-pills-row">
              <span className="bento-pill-item">200+ Hospitals Live</span>
              <span className="bento-pill-item">27+ Connected Modules</span>
              <span className="bento-pill-item">24/7 Dedicated Support</span>
              <span className="bento-pill-item">Zero License Cost</span>
            </div>

            {/* Micro Visual: Live System Health Strip */}
            <div className="bento-micro-widget mt-3">
              <div className="d-flex justify-content-between align-items-center fs-8 text-muted mb-1">
                <span>Infrastructure Health</span>
                <span className="text-success fw-medium">Operational (99.98%)</span>
              </div>
              <div className="progress" style={{ height: '6px' }}>
                <div className="progress-bar bg-primary" style={{ width: '99.98%' }}></div>
              </div>
            </div>
          </div>

          {/* Card 2: Technology & Interfacing (Span 4) */}
          <div className="bento-box col-span-4">
            <div className="bento-box-beam"></div>
            <div className="bento-icon">
              <i className="bx bx-rocket"></i>
            </div>
            <span className="bento-tag">CLOUD ARCHITECTURE</span>
            <h3 className="bento-heading">Machine Interfacing</h3>
            <p className="bento-text">
              Direct bi-directional sync with lab auto-analyzers, PACS radiology, and biometrics.
            </p>

            <div className="bento-pills-row">
              <span className="bento-pill-item">Auto-Analyzers</span>
              <span className="bento-pill-item">PACS Imaging</span>
              <span className="bento-pill-item">Zero-Footprint</span>
            </div>

            {/* Micro Visual: Sync Waveform */}
            <div className="bento-micro-widget mt-3 d-flex align-items-center justify-content-between">
              <span className="fs-8 text-muted">Analyzer Signal</span>
              <span className="badge bg-light text-primary border fs-8">Bi-directional</span>
            </div>
          </div>

          {/* Card 3: Finance & Zero Leakage (Span 6) */}
          <div className="bento-box col-span-6">
            <div className="bento-box-beam"></div>
            <div className="bento-icon">
              <i className="bx bx-calculator"></i>
            </div>
            <span className="bento-tag">FINANCIAL GOVERNANCE</span>
            <h3 className="bento-heading">Zero Revenue Leakage</h3>
            <p className="bento-text">
              Real-time 2-way Tally ERP synchronization and automated locks eliminate unbilled pharmacy & lab leaks.
            </p>

            <div className="bento-pills-row">
              <span className="bento-pill-item">2-Way Tally ERP</span>
              <span className="bento-pill-item">Cashless TPA Billing</span>
              <span className="bento-pill-item">Audit Control Locks</span>
            </div>

            {/* Micro Visual: Ledger Sync */}
            <div className="bento-micro-widget mt-3 d-flex align-items-center justify-content-between">
              <span className="fs-8 text-muted">Tally Ledger Sync</span>
              <span className="text-success fs-8 fw-semibold"><i className="bi bi-check2-circle me-1"></i>Synchronized</span>
            </div>
          </div>

          {/* Card 4: Clinical Safety & Patient Care (Span 6) */}
          <div className="bento-box col-span-6">
            <div className="bento-box-beam"></div>
            <div className="bento-icon">
              <i className="bx bx-pulse"></i>
            </div>
            <span className="bento-tag">CLINICAL INTELLIGENCE</span>
            <h3 className="bento-heading">Clinical Decision Support</h3>
            <p className="bento-text">
              Paperless doctor desks, critical panic alerts, vitals trendlines, and NABH-compliant workflows.
            </p>

            <div className="bento-pills-row">
              <span className="bento-pill-item">Paperless OPD/IPD</span>
              <span className="bento-pill-item">Critical Panic Alerts</span>
              <span className="bento-pill-item">WHO OT Checklists</span>
            </div>

            {/* Micro Visual: Clinical Safety */}
            <div className="bento-micro-widget mt-3 d-flex align-items-center justify-content-between">
              <span className="fs-8 text-muted">NABH Clinical Standards</span>
              <span className="text-primary fs-8 fw-semibold"><i className="bi bi-shield-check me-1"></i>Compliant</span>
            </div>
          </div>

        </div>

        {/* Bottom CTA Button */}
        <div className="text-center mt-5">
          <button 
            type="button" 
            className="btn-google-pill"
            onClick={onOpenModal}
          >
            <span>Schedule Hospital Consultation</span>
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>

      </div>
    </section>
  );
}
