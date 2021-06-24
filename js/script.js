window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger'),
    btns = document.querySelectorAll('.click-btn'),
    modal = document.querySelector('.overlay'),
    modalClose = document.querySelector('.modal__close'),
    body = document.querySelector('body');

    btns.forEach(item => {
        item.addEventListener('click', () => {
            modal.classList.add('overlay-active');
            body.style.overflow = 'hidden';
        });
    });
    modalClose.addEventListener('click', () => {
        modal.classList.remove('overlay-active');
        body.style.overflow = 'visible';
    });

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});

