const loading = document.querySelector('.loading')
const layout = document.querySelector('.layout')
const animate = document.querySelectorAll('.animate')

window.addEventListener('load', () => {
    setTimeout(() => {
        loading.classList.add('translate-y-full')
    }, 500)
    setTimeout(() => {                  
        layout.classList.remove('scale-75')
    }, 700)
    setTimeout(() => {                
        loaded()
    }, 900)
})
  
function loaded() {
    animate.forEach((item) => {
        item.classList.remove('translate-y-40', 'opacity-0', 'translate-y-8')
    })
}