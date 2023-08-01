const gallery_filter = document.querySelectorAll('.gallery__filter')
const item = document.querySelectorAll('.grid__item')


gallery_filter.forEach(function(el) {
    el.addEventListener('click', function(){
        const filter = el.getAttribute('data-filter')

        gallery_filter.forEach(function(e) {
            e.classList.remove('gallery__filter--active')
        })
        el.classList.add('gallery__filter--active')

        item.forEach(function(e) {
            showItems(e)
            e.classList.remove('grid__item--active')
        })

        item.forEach(function(e) {
            if (e.getAttribute('data-id') == filter) {
                activeItems(e)
            }
            else {
                e.classList.add('grid__item--hide')
            }
        })

        if (el.getAttribute('data-filter') == 'all') {
            item.forEach(function(e) {
                activeItems(e)
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

function showItems(e) {
    e.classList.remove('grid__item--hide')
}

function activeItems(e) {
    e.classList.add('grid__item--active')
}