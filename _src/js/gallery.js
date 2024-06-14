const gallery_filter = document.querySelectorAll('.gallery__filter')
const items = document.querySelectorAll('.grid__item')
let clickedElement = null;


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
    e.addEventListener('click', (event) => {
        openOverlay()
        populateOverlay(e)

        clickedElement = event.target.closest('.grid__item');
        console.log('Clicked element:', clickedElement);
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
