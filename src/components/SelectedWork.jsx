import React from 'react';
import { projectsData } from '../data/projectsData';

export default function SelectedWork() {
  return (
    <section id="work" className="sec">
      <div className="sec-inner">
        <div className="sec-header reveal">
          <span className="sec-index">03</span>
          <h2 className="sec-title">Selected Work</h2>
          <span className="sec-kicker">Projects</span>
        </div>
        <div className="work-grid reveal">
          {projectsData.map((project) => {
            const isSingleLinkCard = project.links.length === 1 && !project.links[0].url.startsWith('mailto:') && !project.isWip;
            const cardClass = `wcard ${project.theme || ''}`;

            return (
              <div key={project.id} className={cardClass}>
                <div className="wcard-cat">
                  {project.cat}
                  {project.isWip && <span className="wip-badge" style={{ marginLeft: '0.5rem' }}>In progress</span>}
                </div>
                <div className="wcard-top">
                  <div className="wcard-title">{project.title}</div>
                  <div className="wcard-arrow" style={{ opacity: project.isWip ? 0.3 : 1 }}>↗</div>
                </div>
                <div className="wcard-result">{project.result}</div>
                <p className="wcard-desc">{project.desc}</p>
                <div className="wcard-stack">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="stag">{tech}</span>
                  ))}
                </div>
                <div className="wcard-links">
                  {project.links.map((link, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && <span className="wcard-lnk-sep">·</span>}
                      {link.disabled ? (
                        <span className="wcard-lnk wcard-lnk--muted">{link.label}</span>
                      ) : (
                        <a
                          href={link.url}
                          target={link.external ? '_blank' : undefined}
                          rel={link.external ? 'noopener noreferrer' : undefined}
                          className="wcard-lnk"
                        >
                          {link.label}
                        </a>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
