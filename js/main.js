(() => {
  // Sticky nav background on scroll
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Mobile nav toggle
  const toggle = nav && nav.querySelector('.nav__toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scroll reveal observer — fade-in, stagger, reveal-row, reveal-up, zoom-in
  const targets = document.querySelectorAll('.fade-in, .stagger, .reveal-row, .reveal-up, .zoom-in');
  if ('IntersectionObserver' in window && targets.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    targets.forEach(el => io.observe(el));
  } else {
    targets.forEach(el => el.classList.add('is-visible'));
  }

  // Hero load-in
  const hero = document.querySelector('.hero');
  if (hero) {
    requestAnimationFrame(() => requestAnimationFrame(() => hero.classList.add('is-loaded')));
  }

  // Discipline cycler
  const cycler = document.querySelector('.cycler__words');
  if (cycler) {
    const words = Array.from(cycler.querySelectorAll('.cycler__word'));
    if (words.length > 1) {
      let i = 0;
      setInterval(() => {
        const current = words[i];
        const next = words[(i + 1) % words.length];
        current.classList.remove('is-active');
        current.classList.add('is-leaving');
        next.classList.add('is-active');
        setTimeout(() => current.classList.remove('is-leaving'), 800);
        i = (i + 1) % words.length;
      }, 2400);
    }
  }
})();
