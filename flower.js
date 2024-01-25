script.js
document.addEventListener('DOMContentLoaded', () => {
    const flowers = document.querySelectorAll('.flower');

    flowers.forEach(flower => {
        flower.addEventListener('click', () => {
            flower.style.backgroundColor = 'lightpink';
        });
    });
});
