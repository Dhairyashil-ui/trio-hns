import React, { useState, useEffect } from 'react';
import DnaCanvas from './DnaCanvas';

export default function Hero({ onOpenModal, scrolled }) {
  // Character-by-character typewriter states
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [textRight, setTextRight] = useState('');
  
  // Independent active typing steps for parallel execution
  const [activeStepLeft, setActiveStepLeft] = useState(1);
  const [activeStepRight, setActiveStepRight] = useState(1);
  
  const [buttonVisible, setButtonVisible] = useState(false);
  const [subheadingVisible, setSubheadingVisible] = useState(false);

  useEffect(() => {
    const fullText1 = "The intelligence";
    const fullText2 = "behind";
    const fullText3 = "modern hospitals";
    const fullRight = "TRIO HIMS";

    let timer;

    // -------------------------------------------------------------
    // CHRONOLOGICAL ANIMATION SEQUENCE:
    // 1. "The intelligence"
    // 2. "behind"
    // 3. "modern hospitals"
    // 4. AFTER "hospitals" text ends -> Types "TRIO HIMS"
    // 5. Reveals "All-in-One" Google Card
    // 6. AFTER that -> Reveals "Book a Free Demo" button downside of TRIO & its text
    // -------------------------------------------------------------

    // Step 1: Types "The intelligence"
    const startStep1 = () => {
      let idx = 0;
      setActiveStepLeft(1);
      const interval = setInterval(() => {
        idx++;
        setText1(fullText1.slice(0, idx));
        if (idx >= fullText1.length) {
          clearInterval(interval);
          setActiveStepLeft(2);
          timer = setTimeout(startStep2, 180);
        }
      }, 42);
    };

    // Step 2: Types "behind"
    const startStep2 = () => {
      let idx = 0;
      const interval = setInterval(() => {
        idx++;
        setText2(fullText2.slice(0, idx));
        if (idx >= fullText2.length) {
          clearInterval(interval);
          setActiveStepLeft(3);
          timer = setTimeout(startStep3, 160);
        }
      }, 48);
    };

    // Step 3: Types "modern hospitals"
    const startStep3 = () => {
      let idx = 0;
      const interval = setInterval(() => {
        idx++;
        setText3(fullText3.slice(0, idx));
        if (idx >= fullText3.length) {
          clearInterval(interval);
          setActiveStepLeft(4); // Left typing complete, caretaker off
          // TRIO HIMS starts visible right after "hospitals" text ends
          timer = setTimeout(startRight, 200);
        }
      }, 42);
    };

    // Step 4: Types "TRIO HIMS" (starts after "modern hospitals" ends)
    const startRight = () => {
      let idx = 0;
      setActiveStepRight(1);
      const interval = setInterval(() => {
        idx++;
        setTextRight(fullRight.slice(0, idx));
        if (idx >= fullRight.length) {
          clearInterval(interval);
          setActiveStepRight(2); // Caretaker off
          // Reveal Google All-in-One Box
          timer = setTimeout(() => {
            setSubheadingVisible(true);
            // Button becomes visible after TRIO and its text, downside it
            timer = setTimeout(() => {
              setButtonVisible(true);
            }, 300);
          }, 180);
        }
      }, 55);
    };

    // Initial mount delay starts Step 1
    timer = setTimeout(startStep1, 350);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="hero" className={`hero-stage ${scrolled ? 'scrolled' : ''}`}>
      
      {/* Background 3D WebGL DNA Particle Double Helix */}
      <div className="hero-video-wrapper">
        <DnaCanvas scrolled={scrolled} />
        
        {/* Animated White Cover Applied with Slow Motion & Delay on Scroll (No Blur) */}
        <div className={`hero-white-cover ${scrolled ? 'active' : ''}`}></div>

        {/* Shaded White Bottom Transition (Only active when scrolling down, clean full-page at start) */}
        <div className={`hero-bottom-fade ${scrolled ? 'active' : ''}`}></div>
      </div>

      {/* Hero Editorial Stage Container: Holds Left and Right Parallel at Top */}
      <div className="hero-editorial-stage">

        {/* 1. LEFT CORNER BLOCK: "The intelligence behind modern hospitals" (Left-Aligned, Not Centric) */}
        <div className="hero-left-mid-block">
          
          {/* Line 1: "The intelligence" */}
          <div className="hero-typography-line hero-line-intelligence">
            <span>{text1}</span>
            {activeStepLeft === 1 && <span className="type-caret" />}
          </div>

          {/* Line 2: "behind" */}
          <div className="hero-typography-line hero-line-behind">
            <span>{text2}</span>
            {activeStepLeft === 2 && <span className="type-caret" />}
          </div>

          {/* Line 3: "modern hospitals" */}
          <div className="hero-typography-line hero-line-modern">
            <span>{text3}</span>
            {activeStepLeft === 3 && <span className="type-caret" />}
          </div>

        </div>

        {/* 2. RIGHT CORNER BLOCK: Parallel "TRIO HIMS" Heading + Google-Style "All-in-One" Box + Button Downside */}
        <div className="hero-right-mid-block">
          
          {/* Heading: "TRIO HIMS" in matching luminous heading style (Centric) */}
          <div className="hero-typography-line hero-line-triohms">
            <span>{textRight}</span>
            {activeStepRight === 1 && <span className="type-caret" />}
          </div>

          {/* Subheading Box: Google Card Design with 2-line Text (No logo) */}
          <div className={`hero-subheading-wrap ${subheadingVisible ? 'visible' : ''}`}>
            <div className="hero-google-card">
              <div className="hero-card-text">
                <div className="hero-card-title">
                  All-in-One system to simplify Hospital’s Operational Tasks
                </div>
                <div className="hero-card-subtitle">
                  A Trusted Name in HIMS providing a simple and sustainable system for Healthcare Automation.
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button: Positioned downside of TRIO HIMS and its text, centric */}
          <div className={`hero-cta-btn-wrap ${buttonVisible ? 'visible' : ''}`}>
            <button 
              type="button" 
              className="hero-btn-pill hero-btn-premium"
              onClick={onOpenModal}
            >
              <span className="btn-shimmer-sweep"></span>
              <span className="btn-text">Book a Free Demo</span>
              <i className="bi bi-arrow-right btn-arrow"></i>
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}
