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

function overlay() {
    galleryPanel.classList.add('scale-75')
    overlayPanel.classList.remove('-translate-x-full')
}

function closeOverlay() {
    overlayPanel.classList.add('-translate-x-full')
    galleryPanel.classList.remove('scale-75')
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
const loading = document.querySelector('.loading')
dots.forEach(function(e) {
    e.addEventListener('click', () => {
        var slide = e.getAttribute('data-slide')
        activeSlide(slide)
        dots.forEach(function(e) {
            e.classList.remove('bg-white')
        })
        e.classList.add('bg-white')
        loading.classList.remove('opacity-0')
    })
})

function activeSlide(slide) {
    var active = document.querySelector('.intro__bg[data-slide="' + slide + '"]')
    var img = active.getAttribute('data-src')
    active.setAttribute('src', img)
    active.onload = function() {
        slider.style.transform = "translateX(" + slide + "vw)"
        loading.classList.add('opacity-0')
    }
}
const gallery_filter = document.querySelectorAll('.gallery__filter')
const item = document.querySelectorAll('.grid__item')
gallery_filter.forEach(function(el) {
    el.addEventListener('click', function() {
        const filter = el.getAttribute('data-filter')
        gallery_filter.forEach(function(e) {
            e.classList.remove('gallery__filter--active')
        })
        el.classList.add('gallery__filter--active')
        item.forEach(function(e) {
            showItems(e)
            e.classList.remove('grid__item--active')
        })
        item.forEach(function(e) {
            if (e.getAttribute('data-id') == filter) {
                activeItems(e)
            } else {
                e.classList.add('grid__item--hide')
            }
        })
        if (el.getAttribute('data-filter') == 'all') {
            item.forEach(function(e) {
                activeItems(e)
                showItems(e)
            })
        }
    })
})
item.forEach(function(e) {
    e.addEventListener('click', () => {
        overlay()
        populateOverlay(e)
    })
})

function showItems(e) {
    e.classList.remove('grid__item--hide')
}

function activeItems(e) {
    e.classList.add('grid__item--active')
}
const overlay_img = document.querySelector('.overlay__img')
const overlay_title = document.querySelector('.overlay__title')
const overlay_description = document.querySelector('.overlay__description')
const overlay_price = document.querySelector('.overlay__price')
const overlay_width = document.querySelector('.overlay__width')
const overlay_height = document.querySelector('.overlay__height')
const overlay_framed = document.querySelector('.overlay__framed')
const overlay_contact = document.querySelector('.overlay__contact')
const overlay_open = document.querySelector('.overlay__fullscreen')
const overlay_close = document.querySelector('.overlay__close')
const contact_message = document.querySelector('#contactMessage')
const overlay_fit = document.querySelector('.overlay__fit')

function populateOverlay(e) {
    var img = e.getAttribute('data-img'),
        img_crop = e.getAttribute('data-img-crop'),
        title = e.getAttribute('data-title'),
        price = e.getAttribute('data-price'),
        framed = e.getAttribute('data-framed'),
        description = e.getAttribute('data-description'),
        imgWidth = e.getAttribute('data-imgWidth'),
        imgHeight = e.getAttribute('data-imgHeight'),
        width = e.getAttribute('data-width'),
        height = e.getAttribute('data-height')
    overlay_img.setAttribute('src', img_crop)
    overlay_img.setAttribute('alt', title)
    overlay_img.setAttribute('width', imgWidth)
    overlay_img.setAttribute('height', imgHeight)
    overlay_title.innerText = title
    overlay_description.innerText = description
    if (price > 0) {
        overlay_price.innerText = price
    }
    if (width > 0) {
        overlay_width.innerText = width + 'cm'
    }
    if (height > 0) {
        overlay_height.innerText = height + 'cm'
    }
    overlay_framed.innerText = framed
    overlay_open.setAttribute('href', img)
    contact_message.innerHTML = "Enquiring about " + title
    overlay_contact.addEventListener('click', () => {
        contact()
    })
}
overlay_fit.addEventListener('click', () => {
    overlay_img.classList.toggle('max-w-[50vw]')
})
