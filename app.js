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
}

function closeOverlay() {
    overlayPanel.classList.add('-translate-x-full')
    galleryPanel.classList.remove('scale-75')
    overlay.img.classList.remove('w-full', 'max-h-none', 'w-[200%]')
    overlay.img.classList.add('opacity-0')
    overlay.price.innerText = ''
    overlay.height.innerText = ''
    overlay.width.innerText = ''
    overlay.plus.classList.remove('opacity-60')
    overlay.minus.classList.add('opacity-60')
    overlay.load.classList.remove('opacity-0')
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
    }
    if (width > 0) {
        overlay.width.innerText = width + 'cm'
    }
    if (height > 0) {
        overlay.height.innerText = height + 'cm'
    }
    overlay.img.addEventListener('load', () => {
        overlay.img.setAttribute('width', overlay.img.width)
        overlay.img.setAttribute('height', overlay.img.height)
        overlay.img.classList.remove('opacity-0')
        overlay.load.classList.add('opacity-0')
    })
    overlay.contact.addEventListener('click', () => {
        contact()
        overlay.contactMessage.innerHTML = `Enquiring about ${title}`
    })
}
let zoomLevel = 0
overlay.minus.addEventListener('click', () => {
    if (zoomLevel > 0) {
        zoomLevel--
        if (zoomLevel === 0) {
            overlay.img.classList.remove('w-full', 'max-h-none', 'max-w-none')
            overlay.minus.classList.add('opacity-60')
        } else if (zoomLevel === 1) {
            overlay.img.classList.add('w-full')
            overlay.img.classList.remove('w-[200%]')
            overlay.plus.classList.remove('opacity-60')
        }
    }
})
overlay.plus.addEventListener('click', () => {
    if (zoomLevel < 2) {
        zoomLevel++
        if (zoomLevel === 1) {
            overlay.img.classList.add('w-full', 'max-h-none')
            overlay.minus.classList.remove('opacity-60')
        } else if (zoomLevel === 2) {
            overlay.img.classList.remove('w-full')
            overlay.img.classList.add('w-[200%]', 'max-w-none')
            overlay.plus.classList.add('opacity-60')
        }
    }
})
// const overlay_img = document.querySelector('.overlay__img')
// const overlay_title = document.querySelector('.overlay__title')
// const overlay_description = document.querySelector('.overlay__description')
// const overlay_price = document.querySelector('.overlay__price')
// const overlay_width = document.querySelector('.overlay__width')
// const overlay_height = document.querySelector('.overlay__height')
// const overlay_framed = document.querySelector('.overlay__framed')
// const overlay_contact = document.querySelector('.overlay__contact')
// const overlay_open = document.querySelector('.overlay__download')
// const overlay_close = document.querySelector('.overlay__close')
// const contact_message = document.querySelector('#contactMessage')
// const overlay_minus = document.querySelector('.overlay__minus')
// const overlay_plus = document.querySelector('.overlay__plus')
// const overlay_load  = document.querySelector('.overlay__load')
// function populateOverlay(e) {
//     const img = e.getAttribute('data-img')
//     const title = e.getAttribute('data-title')
//     const price = e.getAttribute('data-price')
//     const framed = e.getAttribute('data-framed')
//     const description = e.getAttribute('data-description')
//     const width = e.getAttribute('data-width')
//     const height = e.getAttribute('data-height')
//     overlay_img.setAttribute('src', img)
//     overlay_img.setAttribute('alt', title)
//     overlay_img.setAttribute('width', '')
//     overlay_img.setAttribute('height', '')
//     overlay_img.addEventListener('load', () => {
//         overlay_img.setAttribute('width', overlay_img.width)
//         overlay_img.setAttribute('height', overlay_img.height)
//         overlay_img.classList.remove('opacity-0')
//         overlay_load.classList.add('opacity-0')
//     })
//     overlay_title.innerText = title
//     overlay_description.innerText = description
//     if (price > 0) {
//         overlay_price.innerText = price
//     }
//     if (width > 0) {
//         overlay_width.innerText = width + 'cm'
//     }
//     if (height > 0) {
//         overlay_height.innerText = height + 'cm'
//     }
//     overlay_framed.innerText = framed
//     overlay_open.setAttribute('href', img)
//     overlay_contact.addEventListener('click', () => {
//         contact()
//         contact_message.innerHTML = `Enquiring about ${title}`
//     })
// }
// let zoom_level = 0
// overlay_minus.addEventListener('click', () => {
//     if (zoom_level > 0) {
//         zoom_level--
//         if (zoom_level === 0) {
//             overlay_img.classList.remove('w-full', 'max-h-none', 'max-w-none')
//             overlay_minus.classList.add('opacity-60')
//         } else if (zoom_level === 1) {
//             overlay_img.classList.add('w-full')
//             overlay_img.classList.remove('w-[200%]')
//             overlay_plus.classList.remove('opacity-60')
//         }
//         console.log(zoom_level)
//     }
// })
// overlay_plus.addEventListener('click', () => {
//     if (zoom_level < 2) {
//         zoom_level++
//         if (zoom_level === 1) {
//             overlay_img.classList.add('w-full', 'max-h-none')
//             overlay_minus.classList.remove('opacity-60')
//         } else if (zoom_level === 2) {
//             overlay_img.classList.remove('w-full')
//             overlay_img.classList.add('w-[200%]', 'max-w-none')
//             overlay_plus.classList.add('opacity-60')
//         }
//         console.log(zoom_level)
//     }
// })
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
        item.classList.remove('translate-y-8')
        item.classList.remove('opacity-0')
    })
}
