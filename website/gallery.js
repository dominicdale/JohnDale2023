const gallery_filter = document.querySelectorAll('.gallery__filter'),
    contact_message = document.querySelector('#contactMessage'),
    item = document.querySelectorAll('.grid__item')


gallery_filter.forEach(function(el) {
    el.addEventListener('click', function(){
        const filter = el.getAttribute('data-filter');

        // Remove and apply filter active class
        gallery_filter.forEach(function(e) {
            e.classList.remove('gallery__filter--active');
        });
        el.classList.add('gallery__filter--active');

        // Remove card hide and animation classes
        item.forEach(function(e) {
            e.classList.remove('grid__item--hide');
            e.classList.remove('grid__item--active');
        });

        // Add card hide and animation classes
        item.forEach(function(e) {
            if (e.getAttribute('data-id') == filter) {
                e.classList.add('grid__item--active')
            }
            else {
                e.classList.add('grid__item--hide');
            }
        });

        // Remove all filters
        if (el.getAttribute('data-filter') == 'all') {
            item.forEach(function(e) {
                e.classList.add('grid__item--active')
                e.classList.remove('grid__item--hide');
            });
        }

    })
})

item.forEach(function(e) {
    e.addEventListener('click', ()=> {
        galleryPanel.classList.add('scale-75')
        overlayPanel.classList.remove('-translate-x-full')
    })
})