import React from 'react';
import { credentialsData, focusAreasData, socialLinksData } from '../data/aboutData';

export default function About() {
  return (
    <section id="about" className="sec">
      <div className="sec-inner">
        <div className="sec-header reveal">
          <span className="sec-index">05</span>
          <h2 className="sec-title">About Me</h2>
          <span className="sec-kicker">Background &amp; Philosophy</span>
        </div>
        <div className="about-grid">
          <div className="about-body reveal">
            <p>
              I’m <strong>Ojaswin Aggarwal</strong> — a software engineer focusing on AI/ML systems, data pipelines, and distributed backends, based in India.
            </p>
            <p>
              I started programming early in university, but quickly grew restless with tutorial projects that only run on squeaky-clean CSV files. My real technical obsession started when I dove into scientific machine learning: building <strong>Physics-Informed Neural Networks (PINNs)</strong> to model Kepler and TESS exoplanetary transit light curves. Rather than letting a deep network hallucinate curves through noise, I embedded Keplerian orbital mechanics and limb-darkening physics equations directly into the PyTorch loss function. That project permanently shaped how I look at machine learning: models are only as trustworthy as the real-world constraints you enforce on them.
            </p>
            <p>
              That same mindset carried straight into industry engineering. At <strong>Winniio</strong>, I built an end-to-end medical data pipeline from scratch — an OCR and NLP system that converted hundreds of messy, multi-layout clinical PDFs into strictly validated <strong>HL7 FHIR R4 JSON</strong> with 92% accuracy, running 100% offline with zero PHI leakage. At <strong>OHSL</strong>, I trained CNN models on 5,000 MRI scans to identify brain tumors, cutting training cycles by 40% while preserving clinical precision.
            </p>
            <p>
              Day to day, I care about the unglamorous engineering that makes software actually dependable: schema stability, idempotency under concurrent writes, error budgets, and whether a pipeline fails gracefully or corrupts silently at 3 AM. I write code that other developers can step into without needing an interpreter.
            </p>

            <div className="cred-header">Academic &amp; Certified Credentials</div>
            <div className="cred-list">
              {credentialsData.map((cred, i) => (
                <div key={i} className="cred">
                  <div className="cred-dot"></div>
                  {cred}
                </div>
              ))}
            </div>
          </div>

          <div className="about-aside reveal d1">
            <div className="focus-card">
              <div className="focus-card-header">Current Technical Obsessions</div>
              <div className="focus-items">
                {focusAreasData.map((item, i) => (
                  <div key={i} className="focus-item">
                    <span className="focus-item-label">{item.label}</span>
                    <p className="focus-item-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="aside-links">
              {socialLinksData.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aside-lnk"
                >
                  <div>
                    <span className="aside-lnk-lbl">{link.label}</span>
                    {link.handle}
                  </div>
                  <span>↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
