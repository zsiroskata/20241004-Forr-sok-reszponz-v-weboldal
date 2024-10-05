const MENU = document.querySelector('.main-nav');
const TRIGGER = document.querySelector('.trigger');

function toggleMenu() {
    MENU.classList.toggle('reveal'); 
    if (MENU.classList.contains('reveal')) {
        TRIGGER.textContent = 'Close menu';
    } else {
        TRIGGER.textContent = 'Open menu'; 
    }
}

TRIGGER.addEventListener('click', toggleMenu);
