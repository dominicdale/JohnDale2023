const galleryBtn = document.querySelector('.gallery__btn')
const galleryPanel = document.querySelector('.panel--gallery')
const contactBtn = document.querySelector('.contact__btn')
const contactPanel = document.querySelector('.panel--contact')
const introPanel = document.querySelector('.panel--intro')
const overlayPanel = document.querySelector('.panel--overlay')
const close = document.querySelector('.overlay__close')

galleryBtn.addEventListener('click', () => {
    gallery()
})

contactBtn.addEventListener('click', () => {
    introPanel.classList.add('scale-75')
    contactPanel.classList.remove('translate-y-full')
})

close.addEventListener('click', () => {
    overlayPanel.classList.add('-translate-x-full')
    galleryPanel.classList.remove('scale-75')
})

function gallery() {
    introPanel.classList.add('scale-75')
    galleryPanel.classList.remove('translate-x-full')
}