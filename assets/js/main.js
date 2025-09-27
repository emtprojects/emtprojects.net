(function () {
  // Mobile nav toggle
  const toggle = document.querySelector('[data-nav-toggle]');
  const links = document.querySelector('[data-nav-links]');
  const navbar = document.querySelector('.navbar');
  
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.contains('nav-open');
      if (isOpen) {
        links.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      } else {
        links.classList.add('nav-open');
        toggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      }
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 800 && links && navbar) {
      if (!navbar.contains(e.target) && links.classList.contains('nav-open')) {
        links.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    }
  });

  // Ensure menu hidden on desktop on resize
  const updateMenuVisibility = () => {
    if (window.innerWidth > 800 && links) {
      links.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  };
  window.addEventListener('resize', updateMenuVisibility);

  // Simple slider (autoplay + arrows). Expect structure: .slider > .slides > .slide
  document.querySelectorAll('.slider').forEach((slider) => {
    const slidesEl = slider.querySelector('.slides');
    const slideEls = slider.querySelectorAll('.slide');
    if (!slidesEl || slideEls.length === 0) return;

    let index = 0;
    const go = (i) => {
      index = (i + slideEls.length) % slideEls.length;
      slidesEl.style.transform = `translateX(-${index * 100}%)`;
    };

    const prev = slider.querySelector('[data-prev]');
    const next = slider.querySelector('[data-next]');
    prev && prev.addEventListener('click', () => go(index - 1));
    next && next.addEventListener('click', () => go(index + 1));

    let timer = setInterval(() => go(index + 1), 4500);
    slider.addEventListener('mouseenter', () => clearInterval(timer));
    slider.addEventListener('mouseleave', () => (timer = setInterval(() => go(index + 1), 4500)));
  });

  // Avatar photo handling
  document.querySelectorAll('.avatar img').forEach((img) => {
    img.addEventListener('load', () => {
      img.parentElement.classList.add('has-photo');
    });
    
    // If image is already loaded (cached)
    if (img.complete && img.naturalHeight !== 0) {
      img.parentElement.classList.add('has-photo');
    }
  });

  // Team filtering functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  const teamMembers = document.querySelectorAll('.member[data-team]');
  
  if (filterButtons.length > 0 && teamMembers.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const selectedTeam = button.getAttribute('data-team');
        
        // Filter team members
        teamMembers.forEach(member => {
          const memberTeam = member.getAttribute('data-team');
          
          if (selectedTeam === 'all' || memberTeam === selectedTeam) {
            member.classList.remove('hidden');
          } else {
            member.classList.add('hidden');
          }
        });
      });
    });
  }
})();


