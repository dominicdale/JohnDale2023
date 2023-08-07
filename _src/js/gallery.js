const gallery_filter = document.querySelectorAll('.gallery__filter')
const item = document.querySelectorAll('.grid__item')


gallery_filter.forEach(function(el) {
    el.addEventListener('click', ()=> {
        const filter = el.getAttribute('data-filter')

        gallery_filter.forEach(function(e) {
            e.classList.remove('gallery__filter--active')
        })
        el.classList.add('gallery__filter--active')

        item.forEach(function(e) {
            showItems(e)
            e.classList.remove('grid__item--animate')
        })

        item.forEach(function(e) {
            if (e.getAttribute('data-id') == filter) {
                animateItems(e)
            }
            else {
                hideItems(e)
            }
        })

        if (el.getAttribute('data-filter') == 'all') {
            item.forEach(function(e) {
                animateItems(e)
                showItems(e)
            })
        }
    })
})

item.forEach(function(e) {
    e.addEventListener('click', ()=> {
        overlay()
        populateOverlay(e)
    })
})

function hideItems (e) {
    e.classList.add('hidden')
    e.classList.add('pointer-events-none')
    e.classList.add('opacity-0')
}

function showItems(e) {
    e.classList.remove('hidden')
    e.classList.remove('pointer-events-none')
    e.classList.remove('opacity-0')
}

function animateItems(e) {
    e.classList.add('grid__item--animate')
}