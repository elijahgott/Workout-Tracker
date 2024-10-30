//general vars
var pathname = window.location.pathname;

//toggle mobile nav 
const showMobileNav = document.querySelector('#show-mobile-nav');
const mobileNav = document.querySelector('#mobile-nav');
const navBlur = document.querySelector('#nav-blur');
let isNavOpen = false;

function toggleNav(){
    isNavOpen = !isNavOpen;
    if(isNavOpen){
        //slide mobile nav into frame
        mobileNav.classList.remove('-translate-x-full');
        mobileNav.classList.add('translate-x-0');
        //blur the background
        navBlur.classList.remove('opacity-0');
        navBlur.classList.remove('-z-10');
        navBlur.classList.add('opacity-100');
        setTimeout(()=> {
            navBlur.classList.add('z-20');
        }, 200);

    }
    else{
        //slide mobile nav out of frame
        mobileNav.classList.remove('translate-x-0');
        mobileNav.classList.add('-translate-x-full');
        //remove blur from background
        navBlur.classList.remove('opacity-100');
        setTimeout(() =>{
            navBlur.classList.remove('z-20');
        }, 200);
        navBlur.classList.add('opacity-0');
        navBlur.classList.add('-z-10');
    }
}
showMobileNav.addEventListener('click', toggleNav);
navBlur.addEventListener('click', () => { isNavOpen ? toggleNav() : ''}); 

//toggle menu to add workout
const workoutBlur = document.querySelector('#workout-blur');
const workoutMenu = document.querySelector('#workout-menu');
let isWorkoutMenuOpen = false;

function toggleWorkoutMenu() {
    isWorkoutMenuOpen = !isWorkoutMenuOpen;
    if(isWorkoutMenuOpen){ 
        //display workout menu
        workoutMenu.classList.remove('scale-0');
        workoutMenu.classList.add('scale-100');
        //blur the background
        workoutBlur.classList.remove('opacity-0');
        workoutBlur.classList.remove('-z-10');
        workoutBlur.classList.add('opacity-100');
        setTimeout(()=> {
            workoutBlur.classList.add('z-20');
        }, 200);
    }
    else{
        //hide workout menu
        workoutMenu.classList.remove('scale-100');
        workoutMenu.classList.add('scale-0');
        //remove blur from background
        workoutBlur.classList.remove('opacity-100');
        setTimeout(() =>{
            workoutBlur.classList.remove('z-20');
        }, 200);
        workoutBlur.classList.add('opacity-0');
        workoutBlur.classList.add('-z-10');
    }
}
//only look for workoutBlur if on workouts page
if(pathname.endsWith('myworkouts.html')){ 
    workoutBlur.addEventListener('click', () => { isWorkoutMenuOpen ? toggleWorkoutMenu() : ''}); 
}

//submit workout to database
function submitWorkout() {
    console.log('add workout');
    //toggleWorkoutMenu();
}

//edit workout
const editWorkoutMenu = document.querySelector('#edit-workout-menu');
let isEditWorkoutMenuOpen = false;
function toggleEditWorkoutMenu() {
    isEditWorkoutMenuOpen = !isEditWorkoutMenuOpen;
    if(isEditWorkoutMenuOpen){ 
        //display edit workout menu
        editWorkoutMenu.classList.remove('scale-0');
        editWorkoutMenu.classList.add('scale-100');
        //blur the background
        workoutBlur.classList.remove('opacity-0');
        workoutBlur.classList.remove('-z-10');
        workoutBlur.classList.add('opacity-100');
        setTimeout(()=> {
            workoutBlur.classList.add('z-20');
        }, 200);
    }
    else{
        //hide edit workout menu
        editWorkoutMenu.classList.remove('scale-100');
        editWorkoutMenu.classList.add('scale-0');
        //remove blur from background
        workoutBlur.classList.remove('opacity-100');
        setTimeout(() =>{
            workoutBlur.classList.remove('z-20');
        }, 200);
        workoutBlur.classList.add('opacity-0');
        workoutBlur.classList.add('-z-10');
    }
}
//only look for workoutBlur if on workouts page
if(!pathname.endsWith('index.html')){ 
    workoutBlur.addEventListener('click', () => { isEditWorkoutMenuOpen ? toggleEditWorkoutMenu() : ''}); 
}

//delete workout from database
function deleteWorkout(){
    console.log('delete this mf')
}

//toggle menu to edit or delete workout
function toggleOptionsMenu(menuId) {
    const optionsMenu = document.getElementById(menuId);
    document.querySelectorAll('[id^="optionsMenu"]').forEach((el) => {
        if(el !== optionsMenu){
            el.classList.add('hidden');
        }
    });
    optionsMenu.classList.toggle('hidden');
}

//close all options menus if clicked outside of button or menu
window.onclick = function(e) {
    if(e.target.id !== 'optionsButton' ) {
        document.querySelectorAll('[id^=optionsMenu]').forEach((el) => {
            el.classList.add('hidden');
        })
    }
};

//toggle menu to edit profile picture or name
function toggleEditProfile() {
    console.log('edit profile');
}