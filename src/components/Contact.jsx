import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch (err) {}
    }, 500);
  };

  return (
    <section id="contact" className="section-padding section-bg-subtle">
      <div className="container">

        {/* Section Header */}
        <div className="section-header-google">
          <div className="section-pill-badge">
            <i className="bi bi-geo-alt-fill"></i>
            <span>Headquarters</span>
          </div>
          <h2 className="section-title-google">
            Get in <span className="text-gradient-gemini">Touch</span>
          </h2>
          <p className="section-desc-google">
            Connect with our healthcare technology specialists to discuss your hospital requirements.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          
          {/* Left Cards */}
          <div className="col-lg-4">
            <div className="d-flex flex-column gap-3">
              
              <div className="bento-box p-4">
                <span className="bento-tag">Corporate Office</span>
                <h5 className="fs-6 fw-bold mb-1">Pune Headquarters</h5>
                <p className="text-secondary fs-7 mb-0">
                  Dhruta Complex, Office 104 & 105, Narayan Peth, Pune, Maharashtra.
                </p>
              </div>

              <div className="bento-box p-4">
                <span className="bento-tag">Electronic Mail</span>
                <h5 className="fs-6 fw-bold mb-1">Direct Inquiries</h5>
                <p className="text-secondary fs-7 mb-0">
                  <a href="mailto:info@triocorporation.in">info@triocorporation.in</a>
                </p>
              </div>

              <div className="bento-box p-4">
                <span className="bento-tag">Telephony</span>
                <h5 className="fs-6 fw-bold mb-1">Direct Helpline</h5>
                <p className="text-secondary fs-7 mb-0">
                  <a href="tel:+919021023456">+91 9021 023 456</a>
                </p>
              </div>

            </div>
          </div>

          {/* Right Message Form */}
          <div className="col-lg-7">
            <div className="bento-box h-100 p-4 p-md-5">
              
              {submitted ? (
                <div className="text-center py-5">
                  <i className="bi bi-check-circle-fill text-success fs-1 mb-2 d-block"></i>
                  <h4 className="fs-5 fw-bold text-success mb-2">Message Sent Successfully!</h4>
                  <p className="text-secondary fs-7">
                    Thank you, <strong>{formData.name}</strong>. Our team will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-primary rounded-pill px-4 fs-7 mt-3"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h4 className="fs-6 fw-bold text-main mb-3">Send a Message</h4>
                  <div className="row g-3">
                    
                    <div className="col-md-6">
                      <label className="material-label">Full Name *</label>
                      <input
                        type="text"
                        className="material-input"
                        placeholder="Dr. / Mr. Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="material-label">Email Address *</label>
                      <input
                        type="email"
                        className="material-input"
                        placeholder="doctor@hospital.org"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="material-label">Phone Number</label>
                      <input
                        type="tel"
                        className="material-input"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="material-label">Subject *</label>
                      <input
                        type="text"
                        className="material-input"
                        placeholder="Hospital Software Quote"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>

                    <div className="col-12">
                      <label className="material-label">Message *</label>
                      <textarea
                        className="material-input"
                        rows="3"
                        placeholder="Tell us about your hospital setup..."
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>

                    <div className="col-12 text-end mt-3">
                      <button
                        type="submit"
                        className="btn-google-pill"
                        disabled={loading}
                      >
                        {loading ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>

                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
