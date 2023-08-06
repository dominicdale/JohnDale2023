const navToggle = document.querySelector('.nav__toggle')
const nav = document.querySelector('.nav')
const navLink = document.querySelectorAll('.main-link')
const main = document.querySelector('main')

navToggle.addEventListener('click', () => {
    openNav()
})

navLink.forEach(function(link) {
    link.addEventListener('click', () => {
        var page = link.getAttribute('data-page');

        switch(page) {
            case 'home':
                home()
                break
            case 'gallery':
                gallery()
                break
            case 'contact':
                contact()
                break
        }
    })
})

document.addEventListener('click', function(e) {
    if (!nav.contains(e.target)) {
        closeNav()
    }
})

function openNav() {
    nav.classList.toggle('nav--open')
    main.classList.toggle('blur-3xl')
    main.classList.toggle('scale-125')
}

function closeNav() {
    nav.classList.remove('nav--open')
    main.classList.remove('blur-3xl')
    main.classList.remove('scale-125')
}


