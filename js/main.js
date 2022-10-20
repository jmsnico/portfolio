// Select
const menu = document.querySelector('.menu');
const menu_btn = document.querySelector('.menu-btn');
const menu_nav = document.querySelector('.menu-nav');
const menu_brand = document.querySelector('.menu-branding');
//Main
const main_wrapper = document.querySelectorAll('.main-wrapper');

const nav_items = document.querySelectorAll('.nav-item')

// set initial menu
let showMenu = false;

menu_btn.addEventListener('click',toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menu_btn.classList.add('close');
        menu.classList.add('show');
        menu_nav.classList.add('show');
        menu_brand.classList.add('show');
       //main_wrapper.forEach(items => items.classList.add('show'));
        nav_items.forEach(items => items.classList.add('show'));

        //Reset menu state
        showMenu = true;
    } else {
        menu_btn.classList.remove('close');
        menu.classList.remove('show');
        menu_nav.classList.remove('show');
        menu_brand.classList.remove('show');
        //main_wrapper.forEach(items => items.classList.remove('show'));
        nav_items.forEach(items => items.classList.remove('show'));

        //Reset menu state
        showMenu = false;
    }
    
}