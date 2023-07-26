const dots = document.querySelectorAll('.intro__dot')
const slider = document.querySelector('.intro__slider')
const loading = document.querySelector('.loading')

dots.forEach(function(e) {
    e.addEventListener('click', () => {
        var slide = e.getAttribute('data-slide')
        activeSlide(slide)

        dots.forEach(function(e) {
            e.classList.remove('bg-white')
        })
        e.classList.add('bg-white')

        loading.classList.remove('opacity-0')
    })
})

function activeSlide(slide) {
    var active = document.querySelector('.intro__bg[data-slide="' + slide + '"]')
    var img = active.getAttribute('data-src')
    active.setAttribute('src', img)

    active.onload = function () {
        slider.style.transform = "translateX(" + slide + "vw)"
        loading.classList.add('opacity-0')
    }
}