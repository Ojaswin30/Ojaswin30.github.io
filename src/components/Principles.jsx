import React from 'react';
import { principlesData } from '../data/principlesData';

export default function Principles() {
  return (
    <div id="process" className="sec process-alt">
      <div className="sec-inner">
        <div className="sec-header reveal">
          <span className="sec-index">02</span>
          <h2 className="sec-title">Engineering Principles</h2>
          <span className="sec-kicker">How I Work</span>
        </div>
        <div className="principles-grid reveal">
          {principlesData.map((item, index) => (
            <div key={index} className="principle-card">
              <div className="principle-meta">
                <span className="principle-tag">{item.tag}</span>
              </div>
              <div className="principle-title">{item.title}</div>
              <div className="principle-sub">{item.sub}</div>
              <p className="principle-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
