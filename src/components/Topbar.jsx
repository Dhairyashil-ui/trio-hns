import React from 'react';

export default function Topbar() {
  return (
    <div id="topbar" className="d-flex align-items-center fixed-top">
      <div className="container d-flex justify-content-between align-items-center">
        
        {/* Left: Live Status Indicator */}
        <div className="d-flex align-items-center gap-2">
          <span className="topbar-pulse-dot"></span>
          <span className="text-light fs-8 fw-medium">99.98% System Uptime</span>
          <span className="opacity-25 mx-1">|</span>
          <span className="d-none d-sm-inline fs-8">200+ Hospitals Live</span>
        </div>

        {/* Right: Direct Contacts */}
        <div className="d-flex align-items-center gap-4">
          <a href="mailto:info@triocorporation.in" className="topbar-link fs-8 d-none d-md-inline-flex align-items-center gap-1">
            <i className="bi bi-envelope"></i>
            <span>info@triocorporation.in</span>
          </a>
          <a href="tel:+919021023456" className="topbar-link fs-8 d-inline-flex align-items-center gap-1">
            <i className="bi bi-telephone"></i>
            <span>+91 902 10 23456</span>
          </a>
        </div>

      </div>
    </div>
  );
}
