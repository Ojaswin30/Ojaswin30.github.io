import React from 'react';

export default function Contact() {
  return (
    <div id="contact" className="contact-sec">
      <div className="contact-inner">
        <div className="contact-left reveal">
          <h2>
            Let’s build<br />
            <em>something</em><br />
            that lasts.
          </h2>
          <p>
            Have an interesting problem? Whether you need an ML pipeline that doesn’t hallucinate, a messy data migration sorted out, or a full-stack tool built from scratch, send me a note. I’ll give you an honest technical assessment within 24 hours.
          </p>
          <a href="mailto:aggarwalojaswin3@gmail.com" className="btn btn-primary">
            Send Me a Message
          </a>
        </div>
        <div className="contact-items reveal d1">
          <a href="mailto:aggarwalojaswin3@gmail.com" className="ci">
            <div>
              <div className="ci-label">Email — fastest response</div>
              <div className="ci-val">aggarwalojaswin3@gmail.com</div>
            </div>
            <div className="ci-arrow">↗</div>
          </a>
          <a
            href="https://www.linkedin.com/in/ojaswin-aggarwal/"
            target="_blank"
            rel="noopener noreferrer"
            className="ci"
          >
            <div>
              <div className="ci-label">LinkedIn</div>
              <div className="ci-val">linkedin.com/in/ojaswin-aggarwal</div>
            </div>
            <div className="ci-arrow">↗</div>
          </a>
          <a
            href="https://github.com/Ojaswin30"
            target="_blank"
            rel="noopener noreferrer"
            className="ci"
          >
            <div>
              <div className="ci-label">GitHub</div>
              <div className="ci-val">github.com/Ojaswin30</div>
            </div>
            <div className="ci-arrow">↗</div>
          </a>
        </div>
      </div>
    </div>
  );
}
