document.querySelectorAll('.hover-image').forEach(item => {
    const bubble = document.createElement('div');
    bubble.classList.add('hover-image-bubble');
    bubble.style.backgroundImage = `url(${item.dataset.image})`;
    item.appendChild(bubble);
});
