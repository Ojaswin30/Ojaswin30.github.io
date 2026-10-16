import React from 'react';
import { stackData } from '../data/stackData';

export default function Stack() {
  return (
    <div id="tools" className="sec stack-alt">
      <div className="sec-inner">
        <div className="sec-header reveal">
          <span className="sec-index">04</span>
          <h2 className="sec-title">My Stack</h2>
          <span className="sec-kicker">Tools &amp; Tech</span>
        </div>
        <div className="stack-categories reveal">
          {stackData.map((group, index) => (
            <div key={index} className="stack-cat">
              <div className="stack-cat-label">{group.category}</div>
              <div className="stack-pills">
                {group.pills.map((pill, i) => (
                  <span key={i} className="spill">{pill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
