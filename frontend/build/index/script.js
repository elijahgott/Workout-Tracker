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

//testing server -> index
fetch('http://localhost:5000/api/')
    .then(response => response.text())
    .then(data => {
        console.log(data);
        const container = document.getElementById('data-container');
        container.innerHTML = `<p class="text-red-500">${data}</p>`;
    })
    .catch(err => {
        console.error('Error fetching data: ', err);
        
        const container = document.getElementById('data-container');
        container.innerHTML = `<p>Failed to load content! ${err}</p>`;
    });