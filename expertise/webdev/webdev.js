ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1500,
    delay: 250
  });

ScrollReveal().reveal('h3, .img-container', {origin: 'top'})
ScrollReveal().reveal('figcaption, section.discussion figcaption, .book-bind img', {origin: 'right'});
ScrollReveal().reveal('#base img, #discussion img, #final-defense img', {origin: 'left'});
ScrollReveal().reveal('h1, .system-review h2, .final-defense h2', {origin: 'bottom'});