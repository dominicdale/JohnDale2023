const nav = document.querySelector('.nav')
const navLink = document.querySelectorAll('.nav__link')
const main = document.querySelector('main')

function openNav() {
    nav.classList.toggle('nav--open')
    main.classList.toggle('blur-3xl')
}

function closeNav() {
    nav.classList.remove('nav--open')
    main.classList.remove('blur-3xl')
}

