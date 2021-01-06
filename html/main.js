const menuBtn = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});