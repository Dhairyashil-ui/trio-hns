import React, { useState, useEffect } from 'react';
import { workflowsData } from '../data/workflowsData';

export default function Workflows({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState(workflowsData[0].id);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const activeIndex = workflowsData.findIndex(w => w.id === activeTab);
  const activeWorkflow = workflowsData[activeIndex] || workflowsData[0];

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
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
  }, [isLightboxOpen]);

  return (
    <section id="workflows" className="workflows-cinematic-section">
      <div className="container">

        {/* Clean Header: Exact Same Size, No Subtitle, No Eyebrow Pill */}
        <div className="google-modules-header text-center">
          <h2 className="section-title-google">
            HIMS <span className="text-gradient-gemini">Work Flows</span>
          </h2>
        </div>

        <div className="row g-4 align-items-stretch">
          
          {/* Left Column: 6 Flow Navigation Tabs */}
          <div className="col-lg-4 col-md-5">
            <div className="workflow-tabs-stack" role="tablist" aria-label="Hospital Workflows">
              {workflowsData.map((workflow, idx) => {
                const isActive = activeTab === workflow.id;
                return (
                  <div
                    key={workflow.id}
                    className={`workflow-tab-card ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveTab(workflow.id)}
                    role="tab"
                    aria-selected={isActive}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveTab(workflow.id);
                      }
                    }}
                    title={`View ${workflow.title} flow`}
                  >
                    {/* Active Accent Bar */}
                    <div className="workflow-tab-active-bar" aria-hidden="true"></div>

                    {/* Left Icon Squircle */}
                    <div className="workflow-tab-icon-box" aria-hidden="true">
                      <i className={`bx ${workflow.icon || 'bx-layer'}`}></i>
                    </div>

                    {/* Middle Info */}
                    <div className="workflow-tab-text">
                      <div className="workflow-tab-title">{workflow.title}</div>
                      <div className="workflow-tab-sub">{workflow.subtitle}</div>
                    </div>

                    {/* Right Index & Arrow */}
                    <div className="workflow-tab-end" aria-hidden="true">
                      <span className="workflow-tab-index">0{idx + 1}</span>
                      <i className="bi bi-chevron-right workflow-tab-arrow"></i>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Architectural Flow Showcase (Big Image, Clean & Professional) */}
          <div className="col-lg-8 col-md-7">
            <div className="workflow-stage-card">
              
              {/* Professional Executive Top Header Bar */}
              <div className="workflow-card-top-bar">
                <div className="workflow-heading-wrap">
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <span className="workflow-counter-badge">0{activeIndex + 1} / 0{workflowsData.length}</span>
                    <span className="workflow-blueprint-badge">Architecture Blueprint</span>
                  </div>
                  <h3 className="workflow-card-heading">{activeWorkflow.title}</h3>
                  <p className="workflow-card-desc">{activeWorkflow.description}</p>
                </div>
                
                <div className="workflow-actions-wrap">
                  <button
                    type="button"
                    className="workflow-zoom-action-btn"
                    onClick={() => setIsLightboxOpen(true)}
                    title="Expand Fullscreen"
                    aria-label="Expand Diagram Fullscreen"
                  >
                    <i className="bi bi-arrows-fullscreen"></i>
                  </button>
                  <button
                    type="button"
                    className="workflow-walkthrough-btn"
                    onClick={onOpenModal}
                  >
                    <span>Schedule Walkthrough</span>
                    <i className="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>

              {/* Big, High-Definition Architecture Image Stage */}
              <div className="workflow-visual-stage">
                <div 
                  className="workflow-visual-stage-inner"
                  onClick={() => setIsLightboxOpen(true)}
                  title="Click to zoom architecture diagram in high resolution"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') setIsLightboxOpen(true);
                  }}
                >
                  <img 
                    src={activeWorkflow.image} 
                    alt={`${activeWorkflow.title} Workflow Architecture Diagram`}
                    className="workflow-visual-img"
                    loading="lazy"
                  />
                  <div className="visual-zoom-overlay">
                    <i className="bi bi-arrows-angle-expand"></i>
                    <span>Click to View Full Resolution</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* High-Resolution Diagram Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="workflow-lightbox-backdrop"
          onClick={() => setIsLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeWorkflow.title} Architecture Diagram`}
        >
          <div 
            className="workflow-lightbox-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="workflow-lightbox-header">
              <div>
                <h3 className="workflow-lightbox-title">{activeWorkflow.title} Architecture Blueprint</h3>
                <p className="workflow-lightbox-sub">{activeWorkflow.description}</p>
              </div>
              <button 
                type="button" 
                className="google-modal-close-btn"
                onClick={() => setIsLightboxOpen(false)}
                aria-label="Close Diagram"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>

            <div className="workflow-lightbox-body">
              <img 
                src={activeWorkflow.image} 
                alt={`${activeWorkflow.title} Full Architecture`}
                className="workflow-lightbox-full-img"
              />
            </div>

            <div className="workflow-lightbox-footer">
              <span className="lightbox-flow-info">
                <strong>Flow 0{activeIndex + 1}:</strong> {activeWorkflow.title}
              </span>
              <button 
                type="button"
                className="workflow-walkthrough-btn"
                onClick={() => {
                  setIsLightboxOpen(false);
                  if (onOpenModal) onOpenModal();
                }}
              >
                <span>Book Live Demonstration</span>
                <i className="bi bi-arrow-right ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
