const openMenuButton = document.querySelector('.menu-button');
const closeMenuButton = document.querySelector('.menu-close');
const menu = document.querySelector('.nav-menu');

openMenuButton.addEventListener('click', ()=>{
    menu.classList.toggle('is-active')
    closeMenuButton.classList.toggle('is-active')
});

closeMenuButton.addEventListener('click', () => {
    menu.classList.toggle('is-active')
    closeMenuButton.classList.toggle('is-active')
});
