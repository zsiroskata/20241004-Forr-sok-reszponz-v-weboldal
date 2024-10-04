const SITE = document.querySelector('.site');
const TRIGGER = document.querySelector('.trigger');
console.log(TRIGGER);

function revealMenu() {
    SITE.classList.toggle('reveal');
   TRIGGER.innerHTML == 'Close menu' ? TRIGGER.innerHTML = 'Open menu' : TRIGGER.innerHTML = 'Close menu';
}

TRIGGER.addEventListener('click', revealMenu, false);

