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

