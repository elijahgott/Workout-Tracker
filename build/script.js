//variables for mobile nav 
const showMobileNav = document.querySelector('#show-mobile-nav');
const mobileNav = document.querySelector('#mobile-nav');
const navBlur = document.querySelector('#nav-blur');
let isNavOpen = false;

//need to delay adding -z-10 class
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
            navBlur.classList.add('z-10');
        }, 200);

    }
    else{
        //slide mobile nav out of frame
        mobileNav.classList.remove('translate-x-0');
        mobileNav.classList.add('-translate-x-full');
        //remove blur from background
        navBlur.classList.remove('opacity-100');
        setTimeout(() =>{
            navBlur.classList.remove('z-10');
        }, 200);
        navBlur.classList.add('opacity-0');
        navBlur.classList.add('-z-10');
    }
}
showMobileNav.addEventListener('click', toggleNav);
navBlur.addEventListener('click', () => { isNavOpen ? toggleNav : ''}); 

//variables for menu to add a workout
const workoutBlur = document.querySelector('#workout-blur');
const workoutMenu = document.querySelector('#workout-menu');
let isWorkoutMenuOpen = false;

function toggleWorkoutMenu() {
    isWorkoutMenuOpen = !isWorkoutMenuOpen;
    if(isWorkoutMenuOpen){ 
        //display workout menu
        workoutMenu.classList.remove('scale-0');
        workoutMenu.classList.add('scale-100');
        //add blur to background
        workoutBlur.classList.remove('opacity-0');
        workoutBlur.classList.remove('hidden');
        workoutBlur.classList.add('opacity-100');
        workoutBlur.classList.add('absolute');
    }
    else{
        //hide workout menu
        workoutMenu.classList.remove('scale-100');
        workoutMenu.classList.add('scale-0');
        //remove blur from background
        workoutBlur.classList.remove('opacity-100');
        workoutBlur.classList.remove('absolute');
        workoutBlur.classList.add('opacity-0');
        workoutBlur.classList.add('hidden');
    }
}
workoutBlur.addEventListener('click', () => { isWorkoutMenuOpen ? toggleWorkoutMenu : ''}); 

//toggle workout dropdown menu (From ChatGPT) 
function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.classList.toggle('hidden');
  }

  // Close the dropdown if clicked outside
  window.onclick = function(event) {
    if (!event.target.matches('#dropdownButton')) {
      const dropdownMenu = document.getElementById('dropdownMenu');
      if (!dropdownMenu.classList.contains('hidden')) {
        dropdownMenu.classList.add('hidden');
      }
    }
  }


function submitWorkout() {
    console.log('add workout');
    toggleWorkoutMenu();
}

function selectWorkout() {
    console.log('select workout');
}