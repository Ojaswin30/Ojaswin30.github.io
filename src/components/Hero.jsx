import React from 'react';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-left">
        <div className="hero-label a1">AI &amp; Data Engineer &middot; Production Systems</div>

        <h1 className="a2">
          I turn messy data into<br />
          working systems.<br />
          <em>Ask me about the pipeline.</em>
        </h1>

        <p className="hero-sub a3">
          Most AI projects work fine inside a Jupyter notebook and fall apart the second they meet uncooperative real-world data. I specialize in bridging that gap &mdash; whether that means parsing chaotic medical PDFs into strict HL7 FHIR without PHI leaks, or building high-concurrency event-driven backends.
        </p>

        <div className="hero-actions a4">
          <a href="#contact" className="btn btn-primary">Start a Conversation</a>
          <a href="#work" className="btn btn-outline">Explore Selected Work</a>
        </div>

        {/* Asymmetric proof callout */}
        <div className="hero-context-block a5">
          <div className="hero-context-item">
            <span className="hc-tag">Production Pipeline</span>
            <div className="hc-title">Medical PDF-to-FHIR</div>
            <div className="hc-meta">700+ records shipped at Winniio &middot; 100% offline</div>
          </div>
          <div className="hero-context-divider"></div>
          <div className="hero-context-item">
            <span className="hc-tag">Scientific ML</span>
            <div className="hc-title">Exoplanet Transit PINN</div>
            <div className="hc-meta">Kepler/TESS physics embedded directly in loss</div>
          </div>
          <div className="hero-context-divider"></div>
          <div className="hero-context-item">
            <span className="hc-tag">Availability</span>
            <div className="hc-title">Open for Select Projects</div>
            <div className="hc-meta">Remote-first &middot; worldwide &middot; direct contact</div>
          </div>
        </div>
      </div>
    </section>
  );
}
