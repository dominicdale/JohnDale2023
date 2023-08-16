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
const overlay_minus = document.querySelector('.overlay__minus')
const overlay_plus = document.querySelector('.overlay__plus')

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

let zoom_level = 0;

overlay_minus.addEventListener('click', () => {
    if (zoom_level > 0) {
        zoom_level--;

        if (zoom_level === 0) {
            overlay_img.classList.remove('w-full');
            overlay_img.classList.remove('max-h-none');
            overlay_img.classList.remove('max-w-none');

        }
        else if (zoom_level === 1) {
            overlay_img.classList.remove('w-[200%]');
        }
        console.log(zoom_level);
    }
});

overlay_plus.addEventListener('click', () => {
    if (zoom_level < 2) {
        zoom_level++;

        if (zoom_level === 1) {
            overlay_img.classList.add('w-full');
            overlay_img.classList.add('max-h-none');
            overlay_minus.classList.remove('opacity-60');
        }
        else if (zoom_level === 2) {
            overlay_img.classList.add('w-[200%]');
            overlay_img.classList.add('max-w-none');
            overlay_plus.classList.add('opacity-60');
        }
        console.log(zoom_level);
    }
});
