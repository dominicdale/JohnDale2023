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
    overlay.img.classList.remove('!w-full', 'md:max-h-[100vh]')
    overlay.img.classList.add('opacity-0', 'md:max-h-[90vh]')
    overlay.img.style.width = ''
    overlay.price.innerText = ''
    overlay.height.innerText = ''
    overlay.width.innerText = ''
    overlay.load.classList.remove('opacity-0')
    zoomLevel = 0
}

function introScale() {
    introPanel.classList.add('scale-75')
}
