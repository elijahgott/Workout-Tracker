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
//blur event listener handled under toggleWorkoutMenu()

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

//add new rows to add workout menu
const newExerciseAdd = document.querySelector('#new-exercise-add');
newExerciseAdd.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    const container = document.querySelector('#exercise-container-add');

    const newRow = document.createElement('div');

    newRow.innerHTML = `
        <input id="exercise-name" name="exercise-name" placeholder="Enter Exercise Name" type="text" class="border-2 border-neutral-400 rounded-md
        h-8 w-full px-2
        md:h-10">
        <div class="flex py-2 relative">
            <input id="num-sets" name="num-sets" placeholder="# of Sets" type="number" class="border-2 border-neutral-400 rounded-md
            h-8 w-1/3 px-2
            md:h-10">
            <p class="w-1/3 leading-8 text-lg text-center font-semibold justify-center">x</p>
            <input id="num-reps" name="num-reps" placeholder="# of Reps" type="number" class="mr-0 ml-auto border-2 border-neutral-400 rounded-md
            h-8 w-1/3 px-2
            md:h-10">
            <button id="remove-exercise" class="remove-exercise absolute -right-12 -top-4 h-10 w-10"><img class="remove-exercise" src="../images/x.webp"></button>
        </div>
    `;

    container.appendChild(newRow);
});

//remove rows from add workout menu
const removeExerciseAdd = document.querySelector('#exercise-container-add');
removeExerciseAdd.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if(event.target.classList.contains('remove-exercise')){
        event.target.parentElement.parentElement.parentElement.remove(); //removes exercise name, # of sets, # of reps (SLOPPY)
    }
});

//add new rows to edit workout menu
const newExerciseEdit = document.querySelector('#new-exercise-edit');
newExerciseEdit.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    const container = document.querySelector('#exercise-container-edit');

    const newRow = document.createElement('div');

    newRow.innerHTML = `
        <input id="exercise-name" name="exercise-name" placeholder="Enter Exercise Name" type="text" class="border-2 border-neutral-400 rounded-md
        h-8 w-full px-2
        md:h-10">
        <div class="flex py-2 relative">
            <input id="num-sets" name="num-sets" placeholder="# of Sets" type="number" class="border-2 border-neutral-400 rounded-md
            h-8 w-1/3 px-2
            md:h-10">
            <p class="w-1/3 leading-8 text-lg text-center font-semibold justify-center">x</p>
            <input id="num-reps" name="num-reps" placeholder="# of Reps" type="number" class="mr-0 ml-auto border-2 border-neutral-400 rounded-md
            h-8 w-1/3 px-2
            md:h-10">
            <button id="remove-exercise" class="remove-exercise absolute -right-12 -top-4 h-10 w-10"><img class="remove-exercise" src="../images/x.webp"></button>
        </div>
    `;

    container.appendChild(newRow);
});

//remove rows from edit workout menu
const removeExerciseEdit = document.querySelector('#exercise-container-edit');
removeExerciseEdit.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if(event.target.classList.contains('remove-exercise')){
        event.target.parentElement.parentElement.parentElement.remove(); //removes exercise name, # of sets, # of reps (SLOPPY, but works)
    }
});

//toggle menu to edit profile picture or name
const profileBlur = document.querySelector('#profile-blur');
const profileWorkoutBlur = document.querySelector('#workout-blur');
const profileMenu = document.querySelector('#edit-profile-menu');
let isEditProfileMenuOpen = false;
function toggleEditProfile() {
    profileBlur.classList.toggle('opacity-0');
    profileBlur.classList.toggle('opacity-100');
    profileBlur.classList.toggle('-z-10');
    profileBlur.classList.toggle('z-20');

    profileMenu.classList.toggle('scale-0');
    profileMenu.classList.toggle('scale-100');
}

profileBlur.addEventListener('click', () => {toggleEditProfile()});

function submitProfileChanges(){
    console.log('submitted profile changes (jk)')
}

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
                        <p class="text-neutral-500 text-sm h-fit mt-1.5">${workout.days.join(', ')}</p>
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