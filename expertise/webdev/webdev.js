ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1500,
    delay: 250
  });

ScrollReveal().reveal('.section-title, .link-description', {origin: 'top'})
ScrollReveal().reveal('.image-wrapper, .content-text p', {origin: 'right'});
ScrollReveal().reveal('.content-text h2', {origin: 'left'});
ScrollReveal().reveal('#header h1, .gallery-item, .achievement-card a img, .masonry-item, .bookbind figure, .link-container, .image-grid', {origin: 'bottom'});