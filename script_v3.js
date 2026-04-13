// ========================================
// MOKSH RASTOGI — NETFLIX PORTFOLIO JS
// ========================================

/* ---------- NAVBAR SCROLL ---------- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  updateActiveNav();
});

/* ---------- ACTIVE NAV LINK ---------- */
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if (window.scrollY >= top) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
}

/* ---------- HAMBURGER MENU ---------- */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open');
});
document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ---------- SMOOTH SCROLL ---------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ---------- COUNTER ANIMATION ---------- */
const counters = document.querySelectorAll('.stat-num');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-count'));
      let current = 0;
      const duration = 1500;
      const step = target / (duration / 16);
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          el.textContent = target;
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(current);
        }
      }, 16);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
counters.forEach(c => counterObserver.observe(c));

/* ---------- SVG SKILL RING ANIMATION ---------- */
const CIRCUMFERENCE = 2 * Math.PI * 33; // r=33, viewBox 80x80 → ~207.3
const skillCards = document.querySelectorAll('.skill-card[data-pct]');
const ringObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const card = entry.target;
      const pct = parseInt(card.getAttribute('data-pct')) || 0;
      const ring = card.querySelector('.skill-ring-fill');
      if (ring) {
        const offset = CIRCUMFERENCE - (pct / 100) * CIRCUMFERENCE;
        ring.style.strokeDashoffset = offset;
      }
      ringObserver.unobserve(card);
    }
  });
}, { threshold: 0.25 });
skillCards.forEach(c => ringObserver.observe(c));

/* ---------- TIMELINE ANIMATION ---------- */
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });
timelineItems.forEach(item => timelineObserver.observe(item));

/* ---------- PROJECT DATA ---------- */
const projectData = {
  proj1: {
    title: 'GradLink',
    emoji: '🎓',
    bg: 'linear-gradient(135deg, #2d1b69 0%, #11998e 100%)',
    match: '95% Match',
    year: '2024',
    rating: '★★★★½ 4.8/5',
    stack: 'Python, SQL, HTML, CSS, JavaScript',
    desc: 'GradLink is an alumni networking and management platform that connects graduates with their alma mater. It streamlines alumni registration, event management, and networking — enabling institutions to maintain strong relationships with their alumni community through an intuitive web interface.',
    features: [
      'Alumni registration and profile management',
      'Event creation and RSVP tracking',
      'Alumni directory with search and filters',
      'Database-driven backend with SQL',
      'Responsive web interface',
    ],
    live: '#',
    github: '#',
  },
  proj2: {
    title: 'AI Virtual Assistant',
    emoji: '🤖',
    bg: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
    match: '97% Match',
    year: '2025',
    rating: '★★★★★ 4.9/5',
    stack: 'Python, Speech Recognition, pyttsx3, NLP, Automation',
    desc: 'An AI-powered virtual assistant inspired by JARVIS from Iron Man. This intelligent desktop companion can understand voice commands, perform system operations, browse the web, send emails, play music, deliver news updates, and much more — all through natural language interaction with a futuristic conversational interface.',
    features: [
      'Voice-activated command recognition using Speech Recognition',
      'Natural language processing for intent understanding',
      'System automation: open apps, control volume, shutdown/restart',
      'Web browsing, Wikipedia search, and real-time weather/news updates',
      'Email sending, music playback, and jokes on demand',
    ],
    live: '#',
    github: '#',
  },
  proj3: {
    title: 'EHR System',
    emoji: '🏥',
    bg: 'linear-gradient(135deg, #134e5e 0%, #71b280 100%)',
    match: '96% Match',
    year: '2025',
    rating: '★★★★★ 4.9/5',
    stack: 'C++, Data Structures, OOP, FLTK GUI',
    desc: 'A GUI-based Electronic Health Record system demonstrating the power of core data structures (Graphs, Hash Tables, Doubly Linked Lists) in C++ to manage and visualize healthcare data. It efficiently handles doctor-patient relationships and maintains detailed medical history using the FLTK library.',
    features: [
      'Hash Table (O(1) lookup) for instant doctor/patient access',
      'Graph (Adjacency List) for many-to-many doctor-patient relationships',
      'Doubly Linked List for chronological medical history timeline',
      'FLTK-based graphical user interface',
      'Advanced querying and reporting features',
    ],
    live: '#',
    github: 'https://github.com/Moksh-Rastogi/Electronic-Health-Record-System',
  },
  proj4: {
    title: 'MannMitra',
    emoji: '🧠',
    bg: 'linear-gradient(135deg, #1a1a2e 0%, #e50914 80%)',
    match: '98% Match',
    year: '2026',
    rating: '★★★★★ 5.0/5',
    stack: 'Next.js, TypeScript, CSS, v0',
    desc: 'MannMitra is a mental health and wellness platform built with Next.js and TypeScript. It provides a supportive digital space for users to access mental health resources, track their wellbeing, and connect with helpful tools — all through a modern, responsive web interface.',
    features: [
      'Built with Next.js for fast, server-rendered pages',
      'TypeScript for type-safe, maintainable code',
      'Modern responsive UI with custom components',
      'Mental health resource library',
      'User-friendly wellness tracking',
    ],
    live: '#',
    github: 'https://github.com/Moksh-Rastogi/mannmitra_ui',
  },
};

/* ---------- MODAL ---------- */
function openModal(projId) {
  const data = projectData[projId];
  if (!data) return;

  const modal = document.getElementById('projectModal');
  const backdrop = document.getElementById('modalBackdrop');

  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalMatch').textContent = data.match;
  document.getElementById('modalYear').textContent = data.year;
  document.getElementById('modalRating').textContent = data.rating;
  document.getElementById('modalStack').textContent = data.stack;
  document.getElementById('modalDesc').textContent = data.desc;
  document.getElementById('modalLiveLink').href = data.live;
  document.getElementById('modalGithubLink').href = data.github;

  const thumb = document.getElementById('modalThumb');
  thumb.style.background = data.bg;
  thumb.textContent = data.emoji;
  thumb.style.fontSize = '5rem';

  const featuresEl = document.getElementById('modalFeatures');
  featuresEl.innerHTML = data.features.map(f => `<div class="modal-feature">${f}</div>`).join('');

  modal.classList.add('active');
  backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('projectModal').classList.remove('active');
  document.getElementById('modalBackdrop').classList.remove('active');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ---------- CONTACT FORM ---------- */
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  btn.innerHTML = '<span class="btn-icon">⏳</span> Sending...';
  btn.disabled = true;
  setTimeout(() => {
    showToast('✅ Message sent! I\'ll respond ASAP.');
    btn.innerHTML = '<span class="btn-icon">✓</span> Sent!';
    btn.style.background = '#46d369';
    this.reset();
    setTimeout(() => {
      btn.innerHTML = '<span class="btn-icon">▶</span> Send Message';
      btn.style.background = '';
      btn.disabled = false;
    }, 3000);
  }, 1800);
});

/* ---------- TOAST ---------- */
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

/* ---------- SOCIAL CARD INTERACTION ---------- */
document.querySelectorAll('.social-card').forEach(card => {
  card.addEventListener('click', function(e) {
    const name = this.querySelector('.social-name').textContent;
    if (this.getAttribute('href') === '#') {
      e.preventDefault();
      if (name === 'Resume') showToast('📄 Resume download starting...');
    }
  });
});

/* ---------- SKILLS HOVER GLOW ---------- */
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 12px 40px rgba(229, 9, 20, 0.25)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '';
  });
});

/* ---------- NETFLIX INTRO ANIMATION ---------- */
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  requestAnimationFrame(() => {
    document.body.style.transition = 'opacity 0.8s ease';
    document.body.style.opacity = '1';
  });
});

/* ---------- PARALLAX HERO ---------- */
window.addEventListener('scroll', () => {
  const heroImg = document.querySelector('.hero-bg-img');
  if (heroImg && window.scrollY < window.innerHeight) {
    heroImg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
  }
});

/* ---------- PROJECT CARD ADD LIST ---------- */
const addedProjects = new Set();
document.querySelectorAll('.proj-btn.add').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    const card = this.closest('.project-card');
    const name = card.querySelector('.project-name').textContent;
    if (addedProjects.has(name)) {
      addedProjects.delete(name);
      this.textContent = '+ List';
      showToast(`Removed "${name}" from your list`);
    } else {
      addedProjects.add(name);
      this.textContent = '✓';
      this.style.borderColor = '#46d369';
      this.style.color = '#46d369';
      showToast(`Added "${name}" to your list! 👍`);
    }
  });
});

document.querySelectorAll('.proj-btn.like').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    showToast('👍 Thanks for the love!');
    this.style.transform = 'scale(1.3)';
    setTimeout(() => { this.style.transform = ''; }, 300);
  });
});

/* ---------- TYPED EFFECT ON HERO ROLE ---------- */
const roleEl = document.querySelector('.hero-role');
if (roleEl) {
  const roles = ['Software Engineer', 'Full Stack Developer', 'Open Source Contributor', 'Problem Solver'];
  let ri = 0, ci = 0, deleting = false;
  function typeRole() {
    const current = roles[ri];
    if (!deleting) {
      roleEl.textContent = current.slice(0, ci + 1);
      ci++;
      if (ci === current.length) {
        deleting = true;
        setTimeout(typeRole, 2200);
        return;
      }
    } else {
      roleEl.textContent = current.slice(0, ci - 1);
      ci--;
      if (ci === 0) {
        deleting = false;
        ri = (ri + 1) % roles.length;
      }
    }
    setTimeout(typeRole, deleting ? 60 : 90);
  }
  setTimeout(typeRole, 1500);
}
