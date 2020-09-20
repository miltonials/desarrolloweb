const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger-menu');


console.log(menu);

burgerButton.addEventListener('click', hideShow);

function hideShow() {
    if (menu.classList.contains('is-active')){
        menu.classList.remove('is-active');
    }
    else {
        menu.classList.add('is-active');
    }
}