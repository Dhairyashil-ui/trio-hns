import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Counts from './components/Counts';
import TrustedBy from './components/TrustedBy';
import Modules from './components/Modules';
import AppointmentSection from './components/AppointmentSection';
import Workflows from './components/Workflows';
import Faq from './components/Faq';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // 1. Initialize Lenis Buttery Smooth Momentum Scrolling
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
      infinite: false,
    });

    window.__lenis = lenis;

    let animId;
    function raf(time) {
      lenis.raf(time);
      animId = requestAnimationFrame(raf);
    }
    animId = requestAnimationFrame(raf);

    // 2. Adaptive Scroll Transition Handling
    const handleScroll = () => {
      const intelligenceEl = document.querySelector('.hero-line-intelligence') || document.querySelector('.hero-left-mid-block');
      const whiteSectionEl = document.querySelector('.stats-strip-white') || document.getElementById('counts');

      if (intelligenceEl && whiteSectionEl) {
        const intelRect = intelligenceEl.getBoundingClientRect();
        const whiteRect = whiteSectionEl.getBoundingClientRect();

        setScrolled((prev) => {
          if (prev) {
            return (whiteRect.top <= intelRect.bottom + 45) || (intelRect.bottom <= 85);
          } else {
            return (whiteRect.top <= intelRect.bottom + 25) || (intelRect.bottom <= 72);
          }
        });
      } else {
        const threshold = window.innerHeight * 0.5 + 30;
        setScrolled(window.scrollY >= threshold);
      }
    };

    lenis.on('scroll', handleScroll);
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      cancelAnimationFrame(animId);
      lenis.destroy();
      window.__lenis = null;
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (window.__lenis) {
      if (isModalOpen) {
        window.__lenis.stop();
      } else {
        window.__lenis.start();
      }
    }
  }, [isModalOpen]);

  return (
    <div className="trio-app-root">
      {/* 1. Header (Google Header, adaptive scroll) */}
      <Navbar scrolled={scrolled} onOpenModal={() => setIsModalOpen(true)} />
      
      <main id="main">
        {/* Dark Hero Stage with animated white cover */}
        <Hero scrolled={scrolled} onOpenModal={() => setIsModalOpen(true)} />

        {/* =========================================================
            CLEAN WHITE GOOGLE CANVAS (BELOW HERO BOUNDARY)
            ========================================================= */}
        
        {/* Live Metrics Strip */}
        <Counts />

        {/* Cinematic 3D Floating Carousel */}
        <TrustedBy />

        {/* 18 Hospital Modules - Google Minimalist Catalog */}
        <Modules onOpenModal={() => setIsModalOpen(true)} />

        {/* Interactive HIMS Workflows */}
        <Workflows onOpenModal={() => setIsModalOpen(true)} />

        {/* Inline Appointment Booking - Google Material Form */}
        <AppointmentSection />

        {/* Doctor Testimonials - Google Stories */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <Faq />

        {/* Contact & Headquarters */}
        <Contact />
      </main>

      {/* Global Clean Footer */}
      <Footer onOpenModal={() => setIsModalOpen(true)} />

      {/* Interactive Demo Modal Dialog */}
      <DemoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloat />
    </div>
  );
}
