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
workoutBlur.addEventListener('click', () => {
    if(isWorkoutMenuOpen){
        toggleWorkoutMenu();
    }
    else if(isEditWorkoutMenuOpen){
        toggleEditWorkoutMenu();
    }
    else if(isDeleteWorkoutMenuOpen){
        toggleDeleteWorkoutMenu();
    }
});

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

//toggle menu to delete workout
const deleteWorkoutMenu = document.querySelector('#delete-workout-menu');
let isDeleteWorkoutMenuOpen = false;

function toggleDeleteWorkoutMenu() {
    isDeleteWorkoutMenuOpen = !isDeleteWorkoutMenuOpen;
    if(isDeleteWorkoutMenuOpen){
        //display delete workout menu
        deleteWorkoutMenu.classList.remove('scale-0');
        deleteWorkoutMenu.classList.add('scale-100');
        //add blur to background
        workoutBlur.classList.remove('opacity-0');
        workoutBlur.classList.remove('-z-10');
        workoutBlur.classList.add('opacity-100');
        setTimeout(()=> {
            workoutBlur.classList.add('z-20');
        }, 200);
    }
    else{
        //hide delete workout menu
        deleteWorkoutMenu.classList.remove('scale-100');
        deleteWorkoutMenu.classList.add('scale-0');
        //remove blur from background
        workoutBlur.classList.remove('opacity-100');
        setTimeout(() =>{
            workoutBlur.classList.remove('z-20');
        }, 200);
        workoutBlur.classList.add('opacity-0');
        workoutBlur.classList.add('-z-10');
    }
}

//delete workout from database
function deleteWorkout(){
    toggleDeleteWorkoutMenu();
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

// !!workouts sent as string, cant parse name, exercises, etc
//testing server -> workouts
fetch('http://localhost:5000/api/workouts')
    .then(response => response.text())
    .then(text => JSON.parse(text))
    .then(data => {
        console.log(data);
        displayWorkouts(data)})
    .catch(err => console.error('Error fetching data: ', err));

function displayWorkouts(workouts){
    const container = document.getElementById('workout-container');
    // container.innerHTML = `<h1 class="text-center">Loading Workouts...</h1>`;

    workouts.forEach(workout => {
        const workoutDiv = document.createElement('div');
        workoutDiv.className = 'grid bg-neutral-100 w-full rounded-md border-2 border-neutral-200 px-4 py-4 shadow-md shadow-neutral-300';

        //workout name
        const name = `<div class="flex relative text-center">
                        <h1 class="w-fit text-neutral-800 font-bold tracking-wider text-xl text-left pb-2 mr-2">${workout.name}</h1>
                        <p class="text-neutral-500 text-sm h-fit mt-1">${workout.days.join(', ')}</p>
                        <button id="optionsButton" onclick="toggleOptionsMenu('optionsMenu4')" class="absolute z-0 items-center w-8 h-8 rounded-full bg-neutral-100 font-bold top-0 right-0
                        hover:border-2 hover:border-neutral-300"><img id="optionsButton" class="w-5 h-5 mx-auto" src="../images/horizontal-dots.webp"/></button>
                        <!-- 'edit' and 'delete' menu -->
                        <div id="optionsMenu4" class="hidden absolute right-2 bottom-12 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="optionsButton">
                                <button onclick="toggleEditWorkoutMenu()" class="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100" role="menuitem">Edit Workout</button>
                                <button onclick="deleteWorkout()" class="block w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-red-100" role="menuitem">Delete Workout</button>
                            </div>
                        </div>
                    </div>`;

        //exercises
        const exercises = workout.exercises.map(exercise => `
            <div class="grid grid-cols-3 text-sm text-neutral-700
            md:gap-1
            lg:gap-2">
                <p class="text-left py-1">${exercise.name}</p>
                <p class="text-center py-1">${exercise.sets} x ${exercise.reps}</p>
                <p class="text-right py-1">${exercise.weight} lbs</p>
            </div>`).join('');

        //combine all parts
        workoutDiv.innerHTML = `
            ${name}
            ${exercises}
        `;

        container.appendChild(workoutDiv);
    });
}