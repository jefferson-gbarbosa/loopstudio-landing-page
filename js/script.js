const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toogle'),
navClose = document.getElementById('close-btn');
const navLink = document.querySelectorAll('.nav-link');
// MENU SHOW
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    }) 
}
// MENU HIDDEN
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}
// REMOVE MENU MOBILE
// When we click on each nav-link,we remove the show-menu
function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click',linkAction));
// SCROLL FUNCTION
/* change page header when scrolling */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll is greater than header height
    header.classList.add('scroll')
  } else {
    // smaller than header height
    header.classList.remove('scroll')
  }
}
/* When Scroll */
window.addEventListener('scroll', function(){
  changeHeaderWhenScroll()
})