const bgImageEl = document.getElementById('bg-img')

window.addEventListener('scroll', () => {
 updateImg()
})

function updateImg() {
 bgImageEl.style.opacity = 1 - window.pageYOffset / 880
 bgImageEl.style.backgroundSize = 110 - window.pageYOffset / 60 + "%"
}