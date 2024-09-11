const showMobileNav = document.querySelector('#show-mobile-nav');
const mobileNav = document.querySelector('#mobile-nav');
let isOpen = false;

function toggleNav(){ //idk why this doesnt work at all sometimes, animations wont go
    isOpen = !isOpen;
    if(isOpen){ 
        // mobileNav.classList.remove('animate-fadeOutLeft');
        // mobileNav.classList.add('animate-fadeInLeft');
        const timeOut = setTimeout(mobileNav.classList.remove('hidden'), 1200);
    }
    else{
        // mobileNav.classList.remove('animate-fadeInLeft');
        // mobileNav.classList.add('animate-fadeOutLeft');
        const timeOut = setTimeout(mobileNav.classList.add('hidden'), 1200);
    }
}

function addWorkout() {
    console.log('add workout')
}

showMobileNav.addEventListener('click', toggleNav);