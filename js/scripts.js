  const nav = document.getElementById('main-nav');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const creditsLink = document.getElementById('credits-link');
  const creditsPopup = document.getElementById('credits-popup');
  const closeCreditsBtn = creditsPopup.querySelector('.close');
  const emailMeLink = document.getElementById('email-me-link');
  const emailPopup = document.getElementById('email-popup');
  const closeEmailBtn = emailPopup.querySelector('.close');

  function setAriaExpanded(state) {
    hamburger.setAttribute('aria-expanded', state);
    mobileMenu.setAttribute('aria-hidden', !state);
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > -1) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
      if (mobileMenu.classList.contains('show')) {
        mobileMenu.classList.remove('show');
        setAriaExpanded(false);
      }
    }
  });

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
    const expanded = mobileMenu.classList.contains('show');
    setAriaExpanded(expanded);
  });
  hamburger.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      hamburger.click();
    }
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('show');
      setAriaExpanded(false);
    });
  });

  creditsLink.addEventListener('click', (e) => {
    e.preventDefault();
    creditsPopup.classList.add('show');
    creditsPopup.setAttribute('aria-hidden', 'false');
    creditsLink.setAttribute('aria-expanded', 'true');
  });
  closeCreditsBtn.addEventListener('click', () => {
    creditsPopup.classList.remove('show');
    creditsPopup.setAttribute('aria-hidden', 'true');
    creditsLink.setAttribute('aria-expanded', 'false');
  });
  window.addEventListener('click', (e) => {
    if (e.target === creditsPopup) {
      creditsPopup.classList.remove('show');
      creditsPopup.setAttribute('aria-hidden', 'true');
      creditsLink.setAttribute('aria-expanded', 'false');
    }
  });

  emailMeLink.addEventListener('click', (e) => {
    e.preventDefault();
    emailPopup.classList.add('show');
    emailPopup.setAttribute('aria-hidden', 'false');
    emailMeLink.setAttribute('aria-expanded', 'true');
  });
  closeEmailBtn.addEventListener('click', () => {
    emailPopup.classList.remove('show');
    emailPopup.setAttribute('aria-hidden', 'true');
    emailMeLink.setAttribute('aria-expanded', 'false');
  });
  window.addEventListener('click', (e) => {
    if (e.target === emailPopup) {
      emailPopup.classList.remove('show');
      emailPopup.setAttribute('aria-hidden', 'true');
      emailMeLink.setAttribute('aria-expanded', 'false');
    }
  });

  // Parallax effect for _about background images
 /* window.addEventListener('scroll', () => {
    const contact = document.getElementById('contact_about');
    const offset = window.pageYOffset;
    const contactTop = contact.offsetTop;
    const contactHeight = contact.offsetHeight;

    if(offset + window.innerHeight > contactTop && offset < contactTop + contactHeight) {
      const relativeY = offset - contactTop;
      contact.style.setProperty('--parallax-y', `${relativeY * 0.3}px`);
      contact.style.backgroundPosition = `
        left calc(0px + ${relativeY * 0.1}px) top,
        right calc(0px - ${relativeY * 0.15}px) top,
        center calc(0px + ${relativeY * 0.05}px) top,
        left calc(0px - ${relativeY * 0.1}px) bottom,
        right calc(0px + ${relativeY * 0.15}px) bottom,
        center calc(0px - ${relativeY * 0.05}px) bottom
      `;
    }
  });*/