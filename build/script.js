const showMobileNav = document.querySelector('#show-mobile-nav');
const mobileNav = document.querySelector('#mobile-nav');
let isOpen = false;

function toggleNav(){ //idk why this doesnt work at all sometimes, animations wont go
    isOpen = !isOpen;
    if(isOpen){ 
        mobileNav.classList.remove('-translate-x-full');
        mobileNav.classList.add('translate-x-0');
    }
    else{
        mobileNav.classList.remove('translate-x-0');
        mobileNav.classList.add('-translate-x-full');
    }
}

function addWorkout() {
    console.log('add workout')
}

showMobileNav.addEventListener('click', toggleNav);