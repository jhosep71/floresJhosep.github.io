document.addEventListener('DOMContentLoaded', () => {
    const heartContainer = document.querySelector('.heart-container');
    const numberOfHearts = 50;

    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw'; // Position horizontally
        heart.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`;
        heartContainer.appendChild(heart);
    }
});
