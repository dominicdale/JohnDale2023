const nav = document.querySelector('.nav')
const navToggle = document.querySelector('.nav__toggle')
const navLink = document.querySelectorAll('.nav__link')
const main = document.querySelector('main')

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--open')
    main.classList.toggle('blur-3xl')
})

navLink.forEach(function(e) {
    e.addEventListener('click', () => {
        var target = e.getAttribute('href').replace('#', '');

        console.log(target)
    })
})

function closeNav() {
    nav.classList.remove('nav--open')
    main.classList.remove('blur-3xl')
}