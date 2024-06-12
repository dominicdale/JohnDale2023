const galleryPanel = document.querySelector('.panel--gallery')
const contactPanel = document.querySelector('.panel--contact')
const introPanel = document.querySelector('.panel--intro')
const overlayPanel = document.querySelector('.panel--overlay')

function home() {
    closeNav()
    closeGallery()
    closeContact()
    closeOverlay()
    introPanel.classList.remove('scale-75')
}

function gallery() {
    closeNav()
    closeContact()
    closeOverlay()
    introScale()
    galleryPanel.classList.remove('translate-x-full')
}

function closeGallery() {
    galleryPanel.classList.add('translate-x-full')
}

function contact() {
    closeNav()
    closeGallery()
    closeOverlay()
    introScale()
    contactPanel.classList.remove('translate-y-full')
}

function closeContact() {
    closeOverlay()
    contactPanel.classList.add('translate-y-full')
}

function openOverlay() {
    galleryPanel.classList.add('scale-75')
    overlayPanel.classList.remove('-translate-x-full')
    overlayPanel.classList.add('overlay--show')
}

function closeOverlay() {
    overlayPanel.classList.add('-translate-x-full')
    galleryPanel.classList.remove('scale-75', 'overlay--show')
    overlay.img.classList.remove('!w-full')
    overlay.img.classList.add('opacity-0', 'md:max-h-[100vh]', 'md:scale-90')
    overlay.img.style.width = ''
    overlay.price.innerText = ''
    overlay.height.innerText = ''
    overlay.width.innerText = ''
    overlay.load.classList.remove('opacity-0')
    overlay.box.classList.add('translate-y-40', 'opacity-0')
    overlay.price.classList.remove('hidden')
    overlay.contact.classList.remove('hidden')
    zoomLevel = 0
}

function introScale() {
    introPanel.classList.add('scale-75')
}
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
        switch (page) {
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
const dots = document.querySelectorAll('.intro__dot')
const slider = document.querySelector('.intro__slider')
const intro_load = document.querySelector('.intro__load')
dots.forEach(function(e) {
    e.addEventListener('click', () => {
        var slide = e.getAttribute('data-slide')
        activeSlide(slide)
        dots.forEach(function(e) {
            e.classList.remove('bg-white')
        })
        e.classList.add('bg-white')
        intro_load.classList.remove('opacity-0')
    })
})

function activeSlide(slide) {
    var active = document.querySelector('.intro__bg[data-slide="' + slide + '"]')
    var img = active.getAttribute('data-src')
    active.setAttribute('src', img)
    active.onload = function() {
        slider.style.transform = "translateX(" + slide + "vw)"
        intro_load.classList.add('opacity-0')
    }
}
const gallery_filter = document.querySelectorAll('.gallery__filter')
const items = document.querySelectorAll('.grid__item')
gallery_filter.forEach((el) => {
    el.addEventListener('click', () => {
        const filter = el.getAttribute('data-filter')
        gallery_filter.forEach((e) => {
            e.classList.remove('gallery__filter--active')
        })
        el.classList.add('gallery__filter--active')
        items.forEach((e) => {
            showItems(e)
            e.classList.remove('grid__item--animate')
        })
        items.forEach((e) => {
            if (e.getAttribute('data-id') == filter) {
                animateItems(e)
            } else {
                hideItems(e)
            }
        })
        if (el.getAttribute('data-filter') == 'all') {
            items.forEach((e) => {
                animateItems(e)
                showItems(e)
            })
        }
    })
})
items.forEach((e) => {
    e.addEventListener('click', () => {
        openOverlay()
        populateOverlay(e)
    })
})

function hideItems(e) {
    e.classList.add('hidden', 'pointer-events-none', 'opacity-0')
}

function showItems(e) {
    e.classList.remove('hidden', 'pointer-events-none', 'opacity-0')
}

function animateItems(e) {
    e.classList.add('grid__item--animate')
}
const overlay = {
    box: document.querySelector('.overlay__box'),
    img: document.querySelector('.overlay__img'),
    title: document.querySelector('.overlay__title'),
    description: document.querySelector('.overlay__description'),
    price: document.querySelector('.overlay__price'),
    width: document.querySelector('.overlay__width'),
    height: document.querySelector('.overlay__height'),
    framed: document.querySelector('.overlay__framed'),
    contact: document.querySelector('.overlay__contact'),
    open: document.querySelector('.overlay__download'),
    close: document.querySelector('.overlay__close'),
    contactMessage: document.querySelector('#contactMessage'),
    minus: document.querySelector('.overlay__minus'),
    plus: document.querySelector('.overlay__plus'),
    load: document.querySelector('.overlay__load'),
}

function populateOverlay(e) {
    const img = e.getAttribute('data-img')
    const title = e.getAttribute('data-title')
    const price = e.getAttribute('data-price')
    const framed = e.getAttribute('data-framed')
    const description = e.getAttribute('data-description')
    const width = e.getAttribute('data-width')
    const height = e.getAttribute('data-height')
    var imgWidth = ''
    overlay.img.setAttribute('src', img)
    overlay.img.setAttribute('alt', title)
    overlay.img.removeAttribute('width')
    overlay.img.removeAttribute('height')
    overlay.title.innerText = title
    overlay.description.innerText = description
    overlay.framed.innerText = framed
    overlay.open.setAttribute('href', img)
    if (price > 0) {
        overlay.price.innerText = price
    } else {
        overlay.price.classList.add('hidden')
        overlay.contact.classList.add('hidden')
    }
    if (width > 0) {
        overlay.width.innerText = width + 'cm'
    }
    if (height > 0) {
        overlay.height.innerText = height + 'cm'
    }
    overlay.img.addEventListener('load', () => {
        imgWidth = overlay.img.offsetWidth
        overlay.img.setAttribute('width', overlay.img.width)
        overlay.img.setAttribute('height', overlay.img.height)
        overlay.img.style.width = imgWidth + 'px'
        overlay.img.classList.remove('opacity-0')
        overlay.load.classList.add('opacity-0')
        console.log(imgWidth)
    })
    overlay.contact.addEventListener('click', () => {
        contact()
        overlay.contactMessage.innerHTML = `Enquiring about ${title}`
    })
    setTimeout(() => {
        overlay.box.classList.remove('translate-y-40', 'opacity-0')
    }, 700)
}
// Zoom
let zoomLevel = 0
document.body.addEventListener('click', function(event) {
    if (overlay.img.contains(event.target)) {
        if (zoomLevel === 0) {
            zoomIn()
        } else {
            zoomOut()
        }
    }
})

function zoomIn() {
    zoomLevel = 1
    overlay.img.classList.remove('md:max-h-[100vh]', 'md:scale-90')
    overlay.img.classList.add('!w-full')
    overlay.img.style.cursor = 'zoom-out'
}

function zoomOut() {
    zoomLevel = 0
    overlay.img.classList.remove('!w-full')
    overlay.img.classList.add('md:scale-90')
    // overlay.img.classList.remove('md:max-h-[100vh]')
    overlay.img.classList.add('md:max-h-[100vh]')
    overlay.img.style.cursor = 'zoom-in'
}
const loading = document.querySelector('.loading')
const layout = document.querySelector('.layout')
const animate = document.querySelectorAll('.animate')
window.addEventListener('load', () => {
    setTimeout(() => {
        loading.classList.add('translate-y-full')
    }, 500)
    setTimeout(() => {
        layout.classList.remove('scale-75')
    }, 700)
    setTimeout(() => {
        loaded()
    }, 900)
})

function loaded() {
    animate.forEach((item) => {
        item.classList.remove('translate-y-40', 'opacity-0', 'translate-y-8')
    })
}
