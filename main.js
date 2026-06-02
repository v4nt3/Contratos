function toggle(header) {
  const item = header.parentElement;
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.acc-item.open').forEach(el => el.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

// Tooltip positioning — follow cursor
document.querySelectorAll('.tip').forEach(tip => {
  tip.addEventListener('mouseenter', (e) => {
    const pseudo = window.getComputedStyle(tip, '::after');
  });
  tip.addEventListener('mousemove', (e) => {
    tip.style.setProperty('--tx', (e.clientX - 115) + 'px');
    tip.style.setProperty('--ty', (e.clientY - 90) + 'px');
  });
});
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

function closeMobileNav() {
  hamburger.classList.remove('open');
  mobileNav.classList.remove('open');
}

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open');
});

// Close on outside click
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
    closeMobileNav();
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id], div[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 130) current = s.id; });
  navLinks.forEach(a => {
    const href = a.getAttribute('href').replace('#','');
    a.style.background = href === current ? 'var(--blue-light)' : '';
    a.style.color = href === current ? 'var(--blue)' : '';
  });
});