const overlay_img = document.querySelector('.overlay__img')
const overlay_title = document.querySelector('.overlay__title')
const overlay_description = document.querySelector('.overlay__description')
const overlay_price = document.querySelector('.overlay__price')
const overlay_width = document.querySelector('.overlay__width')
const overlay_height = document.querySelector('.overlay__height')
const overlay_framed = document.querySelector('.overlay__framed')
const overlay_contact = document.querySelector('.overlay__contact')
const overlay_open = document.querySelector('.overlay__download')
const overlay_close = document.querySelector('.overlay__close')
const contact_message = document.querySelector('#contactMessage')
const overlay_fit = document.querySelector('.overlay__fit')

function populateOverlay(e) {
    var img = e.getAttribute('data-img'),
        title = e.getAttribute('data-title'),
        price = e.getAttribute('data-price'),
        framed = e.getAttribute('data-framed'),
        description = e.getAttribute('data-description'),
        width = e.getAttribute('data-width'),
        height = e.getAttribute('data-height')

    overlay_img.setAttribute('src', img)
    overlay_img.setAttribute('alt', title)
    overlay_img.setAttribute('width', '')

    overlay_img.addEventListener('load', (event) => {
        console.log('width', event.target.width)
        console.log('height', event.target.height)

        event.target.setAttribute('width', event.target.width)
    })


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

    overlay_contact.addEventListener('click', () => {
        contact()
        contact_message.innerHTML = "Enquiring about " + title
    })


}

overlay_fit.addEventListener('click', () => {
    overlay_img.classList.toggle('w-full')
    overlay_img.classList.toggle('max-h-none')
})

