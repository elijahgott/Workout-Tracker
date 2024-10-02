const showMobileNav = document.querySelector('#show-mobile-nav');
const mobileNav = document.querySelector('#mobile-nav');
const navBlur = document.querySelector('#nav-blur');
const body = document.querySelector('#body');
let isNavOpen = false;

function toggleNav(){
    isNavOpen = !isNavOpen;
    if(isNavOpen){ 
        mobileNav.classList.remove('-translate-x-full');
        mobileNav.classList.add('translate-x-0');

        navBlur.classList.remove('opacity-0');
        navBlur.classList.add('opacity-100');
    }
    else{
        mobileNav.classList.remove('translate-x-0');
        mobileNav.classList.add('-translate-x-full');

        navBlur.classList.remove('opacity-100');
        navBlur.classList.add('opacity-0');
    }
}

function addWorkout() {
    console.log('add workout');
}

function selectWorkout() {
    console.log('select workout');
}

showMobileNav.addEventListener('click', toggleNav);
navBlur.addEventListener('click', () => { isNavOpen ? toggleNav() : ''}); 