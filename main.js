const button_open = document.querySelector('[data-toggle="open"]');
const button_close = document.querySelector('[data-toggle="close"]');
const overlayEL = document.querySelector('.nav_overlay');
const menuEL = document.querySelector('.nav_menu');

const toggleMenu = () => {
    menuEL.classList.toggle('active');
    overlayEL.classList.toggle('active');
    document.body.classList.toggle('scroll-false')
}

button_open.addEventListener('click', toggleMenu);
button_close.addEventListener('click', toggleMenu);
overlayEL.addEventListener('click', toggleMenu);
