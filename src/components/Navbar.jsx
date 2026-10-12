import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenModal, scrolled: externalScrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [internalScrolled, setInternalScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const scrolled = externalScrolled !== undefined ? externalScrolled : internalScrolled;

  useEffect(() => {
    const handleScroll = () => {
      const intelligenceEl = document.querySelector('.hero-line-intelligence') || document.querySelector('.hero-left-mid-block');
      const whiteSectionEl = document.querySelector('.stats-strip-white') || document.getElementById('counts');

      if (intelligenceEl && whiteSectionEl) {
        const intelRect = intelligenceEl.getBoundingClientRect();
        const whiteRect = whiteSectionEl.getBoundingClientRect();
        setInternalScrolled((prev) => {
          if (prev) {
            return (whiteRect.top <= intelRect.bottom + 45) || (intelRect.bottom <= 85);
          } else {
            return (whiteRect.top <= intelRect.bottom + 25) || (intelRect.bottom <= 72);
          }
        });
      } else {
        setInternalScrolled(window.scrollY >= (window.innerHeight * 0.5 + 30));
      }

      const sections = ['hero', 'counts', 'trusted-by', 'modules', 'workflows', 'testimonials', 'faq', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      if (window.__lenis) {
        window.__lenis.scrollTo(element, { offset: -74, duration: 1.15 });
      } else {
        const topOffset = 74;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header id="header" className={`fixed-top d-flex align-items-center ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container d-flex align-items-center justify-content-between">
        
        {/* TRIO Logo */}
        <div className="logo">
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
            <img 
              src="/assets/img/trio-logo.png" 
              alt="TRIO Corporation Pvt. Ltd." 
              title="TRIO Corporation Pvt Ltd" 
              className="trio-header-logo"
            />
          </a>
        </div>

        {/* Navigation Links with Google-grade typography and subtle chevrons */}
        <nav id="navbar" className={`navbar ${mobileMenuOpen ? 'navbar-mobile' : ''}`}>
          <ul>
            <li>
              <a 
                href="#hero" 
                className={activeSection === 'hero' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#trusted-by" 
                className={activeSection === 'trusted-by' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo('trusted-by'); }}
              >
                Trusted By
              </a>
            </li>
            <li>
              <a 
                href="#modules" 
                className={activeSection === 'modules' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo('modules'); }}
              >
                <span>Modules</span>
                <i className="bi bi-chevron-down nav-chevron"></i>
              </a>
            </li>
            <li>
              <a 
                href="#workflows" 
                className={activeSection === 'workflows' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo('workflows'); }}
              >
                <span>Work Flows</span>
                <i className="bi bi-chevron-down nav-chevron"></i>
              </a>
            </li>
            <li>
              <a 
                href="#testimonials" 
                className={activeSection === 'testimonials' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo('testimonials'); }}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a 
                href="#faq" 
                className={activeSection === 'faq' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo('faq'); }}
              >
                FAQ
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
              >
                Contact
              </a>
            </li>
          </ul>

          <i 
            className={`bi ${mobileMenuOpen ? 'bi-x' : 'bi-list'} mobile-nav-toggle`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          ></i>
        </nav>

        {/* Right Google Actions: Minimal monochrome icons + Google Blue Pill CTA */}
        <div className="google-nav-actions d-flex align-items-center gap-3">
          <div className="google-nav-icons d-none d-lg-flex align-items-center gap-2">
            <a 
              href="https://wa.me/918459424217" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="google-icon-link" 
              title="Chat on WhatsApp"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
            <a 
              href="tel:+918459424217" 
              className="google-icon-link" 
              title="Call Us"
            >
              <i className="bi bi-telephone"></i>
            </a>
            <a 
              href="mailto:info@triocorporation.in" 
              className="google-icon-link" 
              title="Email Us"
            >
              <i className="bi bi-envelope"></i>
            </a>
          </div>

          <button 
            type="button"
            className="btn-google-pill"
            onClick={onOpenModal}
          >
            <span>Book a Demo</span>
          </button>
        </div>

      </div>
    </header>
  );
}
