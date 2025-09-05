ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1500,
    delay: 250
  });

ScrollReveal().reveal('h3', {origin: 'top'})
ScrollReveal().reveal('#base img, #discussion img', {origin: 'left'});
ScrollReveal().reveal('figcaption', {origin: 'right'});
ScrollReveal().reveal('section.discussion figcaption', {origin: 'right'})
ScrollReveal().reveal('h1, .system-review h2', {origin: 'bottom'});