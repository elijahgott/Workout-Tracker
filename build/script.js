const showMobileNav = document.querySelector('#show-mobile-nav');
const mobileNav = document.querySelector('#mobile-nav');
const body = document.querySelector('#body');
let isNavOpen = false;

function toggleNav(){
    isNavOpen = !isNavOpen;
    if(isNavOpen){ 
        mobileNav.classList.remove('-translate-x-full');
        mobileNav.classList.add('translate-x-0');
    }
    else{
        mobileNav.classList.remove('translate-x-0');
        mobileNav.classList.add('-translate-x-full');
    }
}

function addWorkout() {
    console.log('add workout');
}

function selectWorkout() {
    console.log('select workout');
}

showMobileNav.addEventListener('click', toggleNav);
body.addEventListener('click', () => { isNavOpen ? toggleNav() : ''}); 