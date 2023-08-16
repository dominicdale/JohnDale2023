const dots = document.querySelectorAll('.intro__dot')
const slider = document.querySelector('.intro__slider')
const intro_load = document.querySelector('.intro__load')

dots.forEach(function(e) {
    e.addEventListener('click', () => {
        var slide = e.getAttribute('data-slide')
        activeSlide(slide)

        dots.forEach(function(e) {
            e.classList.remove('bg-white')
        })
        e.classList.add('bg-white')

        intro_load.classList.remove('opacity-0')
    })
})

function activeSlide(slide) {
    var active = document.querySelector('.intro__bg[data-slide="' + slide + '"]')
    var img = active.getAttribute('data-src')
    active.setAttribute('src', img)

    active.onload = function () {
        slider.style.transform = "translateX(" + slide + "vw)"
        intro_load.classList.add('opacity-0')
    }
}