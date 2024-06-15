const overlay = {
    box: document.querySelector('.overlay__box'),
    img: document.querySelector('.overlay__img'),
    title: document.querySelector('.overlay__title'),
    description: document.querySelector('.overlay__description'),
    price: document.querySelector('.overlay__price'),
    width: document.querySelector('.overlay__width'),
    height: document.querySelector('.overlay__height'),
    // framed: document.querySelector('.overlay__framed'),
    contact: document.querySelector('.overlay__contact'),
    open: document.querySelector('.overlay__download'),
    close: document.querySelector('.overlay__close'),
    contactMessage: document.querySelector('#contactMessage'),
    minus: document.querySelector('.overlay__minus'),
    plus: document.querySelector('.overlay__plus'),
    load: document.querySelector('.overlay__load'),
    next: document.querySelector('.overlay__next'),
    prev: document.querySelector('.overlay__prev')
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
    // overlay.framed.innerText = framed
    overlay.open.setAttribute('href', img)
    overlay.price.innerText = price


    // if (price > 0) {
    //     overlay.price.innerText = price
    // } else {
    //     overlay.price.classList.add('hidden')
    //     // overlay.contact.classList.add('hidden')
    // }

    overlay.width.innerText = width
    overlay.height.innerText = height

    overlay.img.addEventListener('load', () => {
        imgWidth = overlay.img.offsetWidth
        overlay.img.setAttribute('width', overlay.img.width)
        overlay.img.setAttribute('height', overlay.img.height)
        overlay.img.style.width = imgWidth + 'px'
        overlay.img.classList.remove('opacity-0')
        overlay.load.classList.add('opacity-0')
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
document.body.addEventListener('click', function (event) {
    if (overlay.img.contains(event.target)) {
        if (zoomLevel === 0) {
            zoomIn()
        } else {
            zoomOut()
        }
    }
})

const updateNavigationButtons = () => {
    overlay.next.classList.toggle('cursor-not-allowed', !clickedElement.nextElementSibling);
    overlay.next.classList.toggle('opacity-50', !clickedElement.nextElementSibling);
    overlay.prev.classList.toggle('cursor-not-allowed', !clickedElement.previousElementSibling);
    overlay.prev.classList.toggle('opacity-50', !clickedElement.previousElementSibling);
};

const navigateOverlay = (direction) => {
    let sibling = direction === 'next' ? clickedElement.nextElementSibling : clickedElement.previousElementSibling;

    if (sibling) {
        clickedElement = sibling;
        populateOverlay(sibling);
        updateNavigationButtons();
    }
};

overlay.next.addEventListener('click', () => navigateOverlay('next'));
overlay.prev.addEventListener('click', () => navigateOverlay('prev'));


function zoomIn() {
    zoomLevel = 1
    overlay.img.classList.remove('md:max-h-[100vh]', 'md:scale-90')

    overlay.img.classList.add('!w-full')
    overlay.img.style.cursor = 'zoom-out'
    overlay.img.classList.remove('delay-1000')
    overlay.img.classList.remove('rounded-lg')
    overlay.box.classList.add('md:translate-x-[130%]')
}

function zoomOut() {
    zoomLevel = 0
    overlay.img.classList.remove('!w-full')
    overlay.img.classList.add('md:scale-90')
    // overlay.img.classList.remove('md:max-h-[100vh]')
    overlay.img.classList.add('md:max-h-[100vh]')
    overlay.img.style.cursor = 'zoom-in'
    overlay.img.classList.add('rounded-lg')
    overlay.box.classList.remove('md:translate-x-[130%]')
}