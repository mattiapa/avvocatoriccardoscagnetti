const navToggle = document.querySelector('.nav-toggle')
const mainNav = document.querySelector('.main-nav')
const hamburger = document.querySelector('.hamburger')

navToggle.addEventListener("click", () => {

    mainNav.toggleAttribute('is-open')
    hamburger.toggleAttribute('is-open')
    navToggle.toggleAttribute('is-open')
})

const navLink = document.querySelectorAll('.nav-item')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-toggle')
    // When we click on each nav__link, we remove the show-menu class
    mainNav.removeAttribute('is-open')
    hamburger.removeAttribute('is-open')
    navToggle.removeAttribute('is-open')
}
navLink.forEach(n => n.addEventListener('click', linkAction))