document.querySelectorAll('.hover-image').forEach(item => {
    const bubble = document.createElement('div');
    bubble.classList.add('hover-image-bubble');
    bubble.style.backgroundImage = `url(${item.dataset.image})`;
    item.appendChild(bubble);
});

document.addEventListener('DOMContentLoaded', () => {
    const arrow = document.getElementById('hoverArrow');
  
    if (!arrow) return;
    window.addEventListener('scroll', function onFirstScroll() {
      arrow.classList.add('visible');
      arrow.classList.remove('hidden');
      setTimeout(() => {
        arrow.classList.remove('visible'); 
        arrow.classList.add('hidden');
      }, 3000);

      window.removeEventListener('scroll', onFirstScroll);
    }, { once: true });
  });
  
