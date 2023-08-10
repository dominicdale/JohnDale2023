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
    overlay_img.classList.remove('w-full')
    overlay_img.classList.remove('max-h-none')
    overlay_price.innerText = ''
    overlay_height.innerText = ''
    overlay_width.innerText = ''
}

function introScale() {
    introPanel.classList.add('scale-75')
}