const overlay_img =  document.querySelector('.overlay__img')
const overlay_title =  document.querySelector('.overlay__title')
const overlay_description =  document.querySelector('.overlay__description')
const overlay_price =  document.querySelector('.overlay__price')
const overlay_width = document.querySelector('.overlay__width')
const overlay_height = document.querySelector('.overlay__height')
const overlay_framed = document.querySelector('.overlay__framed')
const overlay_contact =  document.querySelector('.icon--mail')
const overlay_open =  document.querySelector('.icon--fullscreen')
const overlay_close = document.querySelector('.overlay__close')

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
    // contact_message.innerHTML = "Enquiring about " + title

    // Once image loaded, open overlay
    // overlay_img.onload = function() {
    //     overlay.classList.add('overlay--active') 
    // }

    // Contact button
    // overlay_contact.addEventListener('click', function() {
    //     closeOverlay()
    //     layout.className = ''
    //     layout.classList.add('layout--Contact')
    // })

    // Close overlay
    // overlay_close.addEventListener('click', function() {
    //     closeOverlay()
    //     contact_message.innerHTML = ''
    // })
}