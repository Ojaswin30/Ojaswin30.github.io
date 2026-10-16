import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';

export default function Services() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className="sec">
      <div className="sec-inner">
        <div className="sec-header reveal">
          <span className="sec-index">01</span>
          <h2 className="sec-title">What I Build</h2>
          <span className="sec-kicker">Capabilities</span>
        </div>
        <div className="services-grid reveal">
          {servicesData.map((svc) => {
            const isExpanded = expandedId === svc.id;
            return (
              <div
                key={svc.id}
                className={`svc ${svc.theme === 'teal' ? 't' : ''}`}
                data-key={svc.id}
              >
                <div className="svc-header-row">
                  <span className="svc-tag">{svc.tag}</span>
                  <span className="svc-subtag">{svc.subtag}</span>
                </div>
                <div className="svc-name">{svc.name}</div>
                <p className="svc-desc">{svc.desc}</p>
                <div className="svc-items">
                  {svc.items.map((item, i) => (
                    <div key={i} className="svc-item">
                      <strong>{item.strong}</strong>
                      {item.text}
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  className="svc-expand-btn"
                  aria-expanded={isExpanded}
                  onClick={() => toggleExpand(svc.id)}
                >
                  {isExpanded ? 'Show less ↑' : 'Read technical notes ↓'}
                </button>
                {isExpanded && <div className="svc-detail">{svc.detail}</div>}
                <a href="#contact" className="svc-cta-link">
                  Discuss your use case ↗
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
