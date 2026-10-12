import React, { useState } from "react";
import { faqData } from "../data/faqData";

export default function Faq() {
  const [openId, setOpenId] = useState(1);
  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  // split into two balanced columns
  const half = Math.ceil(faqData.length / 2);
  const leftCol = faqData.slice(0, half);
  const rightCol = faqData.slice(half);

  const renderItem = (item) => {
    const isOpen = openId === item.id;
    return (
      <div
        key={item.id}
        className={`faq-acc-card ${isOpen ? "faq-acc-card--open" : ""}`}
      >
        <button
          className="faq-acc-header"
          onClick={() => toggle(item.id)}
          aria-expanded={isOpen}
        >
          <span className="faq-acc-question">{item.question}</span>
          <span className="faq-acc-icon-circle">
            <i className={`bi ${isOpen ? "bi-dash" : "bi-plus"}`} />
          </span>
        </button>
        {isOpen && (
          <div className="faq-acc-body">
            <p className="faq-acc-answer">{item.answer}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="faq" className="faq-cinematic-section">
      <div className="container">

        {/* Clean Header: Frequently Asked Questions (No Eyebrow, No Subheading, Exact Google Standard) */}
        <div className="google-modules-header text-center mb-4">
          <h2 className="section-title-google">
            Frequently Asked <span className="text-gradient-gemini">Questions</span>
          </h2>
        </div>

        {/* Compact Two-Column Accordion Layout (Fits on One Page) */}
        <div className="faq-two-cols-wrap">
          <div className="faq-acc-column">{leftCol.map(renderItem)}</div>
          <div className="faq-acc-column">{rightCol.map(renderItem)}</div>
        </div>

      </div>
    </section>
  );
}