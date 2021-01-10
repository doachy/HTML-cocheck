const menuBtn = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const settingBtn = document.querySelector('.setting');
const setting = document.querySelector('.menu2');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

settingBtn.addEventListener('click', () => {
    setting.classList.toggle('active');
});
