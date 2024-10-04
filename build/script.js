//variables for mobile nav 
const showMobileNav = document.querySelector('#show-mobile-nav');
const mobileNav = document.querySelector('#mobile-nav');
const navBlur = document.querySelector('#nav-blur');
let isNavOpen = false;

//variables for menu to add a workout
const workoutBlur = document.querySelector('#workout-blur');
const workoutMenu = document.querySelector('#workout-menu');
let isWorkoutMenuOpen = false;

function toggleNav(){
    isNavOpen = !isNavOpen;
    if(isNavOpen){ 
        mobileNav.classList.remove('-translate-x-full');
        mobileNav.classList.add('translate-x-0');

        navBlur.classList.remove('opacity-0');
        navBlur.classList.remove('hidden');
        navBlur.classList.add('opacity-100');
        navBlur.classList.add('absolute');

    }
    else{
        mobileNav.classList.remove('translate-x-0');
        mobileNav.classList.add('-translate-x-full');

        navBlur.classList.remove('opacity-100');
        navBlur.classList.remove('absolute');
        navBlur.classList.add('opacity-0');
        navBlur.classList.add('hidden');
    }
}

function toggleWorkoutMenu() {
    isWorkoutMenuOpen = !isWorkoutMenuOpen;
    if(isWorkoutMenuOpen){ 
        workoutMenu.classList.remove('scale-0');
        workoutMenu.classList.add('scale-100');

        workoutBlur.classList.remove('opacity-0');
        workoutBlur.classList.remove('hidden');
        workoutBlur.classList.add('opacity-100');
        workoutBlur.classList.add('absolute');
    }
    else{
        workoutMenu.classList.remove('scale-100');
        workoutMenu.classList.add('scale-0');

        workoutBlur.classList.remove('opacity-100');
        workoutBlur.classList.remove('absolute');
        workoutBlur.classList.add('opacity-0');
        workoutBlur.classList.add('hidden');
    }
}

function submitWorkout() {
    console.log('add workout');
    toggleWorkoutMenu();
}

function selectWorkout() {
    console.log('select workout');
}

showMobileNav.addEventListener('click', toggleNav);
navBlur.addEventListener('click', () => { isNavOpen ? toggleNav() : ''}); 
workoutBlur.addEventListener('click', () => { isWorkoutMenuOpen ? toggleWorkoutMenu() : ''}); 