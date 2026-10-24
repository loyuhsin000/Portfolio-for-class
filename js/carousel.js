/* Small, accessible carousel interaction: the only purpose is switching preview items. */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-carousel]').forEach(root => {
    const slides = [...root.querySelectorAll('[data-slide]')];
    const dots = root.querySelector('[data-dots]');
    let index = 0;
    function show(next) {
      index = (next + slides.length) % slides.length;
      slides.forEach((slide, i) => { slide.hidden = i !== index; });
      [...dots.children].forEach((button, i) => {
        button.setAttribute('aria-current', i === index ? 'true' : 'false');
        button.setAttribute('aria-label', `Show item ${i+1} of ${slides.length}`);
      });
    }
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'ed-dot';
      dot.addEventListener('click', () => show(i));
      dots.appendChild(dot);
    });
    root.querySelector('[data-prev]')?.addEventListener('click', () => show(index - 1));
    root.querySelector('[data-next]')?.addEventListener('click', () => show(index + 1));
    show(0);
  });
});
