import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function DemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 70,
          spread: 70,
          origin: { y: 0.5 }
        });
      } catch (err) {}
    }, 550);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-dialog-box" onClick={(e) => e.stopPropagation()}>
        
        {/* Google-Style Modal Header */}
        <div className="modal-header-google">
          <div className="modal-title-wrap">
            <div className="modal-header-icon-badge">
              <i className="bi bi-calendar2-check"></i>
            </div>
            <div>
              <h4 className="modal-title-main">Request a Live Demo</h4>
              <p className="modal-subtitle-text">See TRIO HIMS in action with a tailored hospital walkthrough</p>
            </div>
          </div>
          <button 
            type="button" 
            className="modal-close-btn"
            onClick={handleClose}
            title="Close dialog"
            aria-label="Close dialog"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        {/* Modal Body */}
        {submitted ? (
          <div className="modal-body-google">
            <div className="text-center py-4">
              <div className="modal-success-icon-wrap mb-3">
                <i className="bi bi-check-lg"></i>
              </div>
              <h4 className="fs-5 fw-bold text-main mb-1">Demo Request Received!</h4>
              <p className="text-secondary fs-7 mb-4 px-2">
                Thank you, <strong>{formData.name}</strong>. Our hospital solutions specialist will contact you at <strong>{formData.phone}</strong> shortly to confirm your scheduled walkthrough.
              </p>
              <button
                type="button"
                className="btn-modal-submit mx-auto"
                onClick={handleClose}
              >
                <i className="bi bi-check2"></i>
                <span>Done</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="modal-form-layout">
            <div className="modal-body-google">
              {/* Header Preview Showcase Card - Fully Visible Image */}
              <div className="modal-banner-card">
                <img 
                  src="/assets/img/modal_image_1.png" 
                  alt="THE COMPLETE HOSPITAL MANAGEMENT SOFTWARE - TRIO Corporation" 
                  className="modal-banner-img"
                />
              </div>

              <div className="row g-2">
                {/* Your Name */}
                <div className="col-6">
                  <div className="google-field-group">
                    <label className="google-field-label">
                      Your Name <span className="text-danger">*</span>
                    </label>
                    <div className="google-input-box">
                      <i className="bi bi-person google-input-icon"></i>
                      <input
                        type="text"
                        className="google-text-input"
                        placeholder="Dr. / Mr. Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {/* Your Email */}
                <div className="col-6">
                  <div className="google-field-group">
                    <label className="google-field-label">
                      Your Email <span className="text-danger">*</span>
                    </label>
                    <div className="google-input-box">
                      <i className="bi bi-envelope google-input-icon"></i>
                      <input
                        type="email"
                        className="google-text-input"
                        placeholder="doctor@hospital.org"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {/* Your Phone */}
                <div className="col-6">
                  <div className="google-field-group">
                    <label className="google-field-label">
                      Your Phone <span className="text-danger">*</span>
                    </label>
                    <div className="google-input-box">
                      <i className="bi bi-telephone google-input-icon"></i>
                      <input
                        type="tel"
                        className="google-text-input"
                        placeholder="10-digit mobile number"
                        pattern="[1-9]{1}[0-9]{9}"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {/* Hospital Requirements / Notes */}
                <div className="col-6">
                  <div className="google-field-group">
                    <label className="google-field-label">
                      Hospital Notes / Requirements
                    </label>
                    <div className="google-input-box">
                      <i className="bi bi-building google-input-icon"></i>
                      <input
                        type="text"
                        className="google-text-input"
                        placeholder="Bed capacity, modules needed..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions Footer - Always Visible & Pinned */}
            <div className="modal-footer-google">
              <button
                type="button"
                className="btn-modal-cancel"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-modal-submit"
                disabled={loading}
              >
                <span className="btn-shimmer-sweep"></span>
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-1" role="status"></span>
                    <span>Scheduling...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Request</span>
                    <i className="bi bi-arrow-right"></i>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
