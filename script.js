// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.07 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Active nav
const secs = document.querySelectorAll('section[id], div[id]');
const links = document.querySelectorAll('.nav-links a:not(.nav-hire)');
window.addEventListener('scroll', () => {
  let cur = '';
  secs.forEach(s => { if (window.scrollY >= s.offsetTop - 160) cur = s.id; });
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
}, { passive: true });

// Service card expand / collapse
document.querySelectorAll('.svc-expand-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const svc   = btn.closest('.svc');
    const detail = svc.querySelector('.svc-detail');
    const open  = btn.getAttribute('aria-expanded') === 'true';

    // Collapse any other open panels first
    document.querySelectorAll('.svc-detail').forEach(d => {
      if (d !== detail) {
        d.hidden = true;
        d.closest('.svc').querySelector('.svc-expand-btn').setAttribute('aria-expanded', 'false');
        d.closest('.svc').querySelector('.svc-expand-btn').textContent =
          d.closest('.svc').querySelector('.svc-expand-btn').textContent.replace('↑', '↓') || 'Learn more ↓';
      }
    });

    if (open) {
      detail.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
      btn.innerHTML = 'Learn more &#8595;';
    } else {
      detail.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
      btn.innerHTML = 'Show less &#8593;';
      // smooth scroll to keep card in view
      setTimeout(() => {
        svc.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 50);
    }
  });
});