function classSwitcher() {
    slides.forEach(slide => slide.classList.remove("active"))
    points.forEach(point => point.classList.remove("active"))
    slides[active].classList.add("active")
    points[active].classList.add("active")
}
let goNext = () => {
    active = (active == slides.length - 1) ? 0 : active + 1
    classSwitcher()
}
let goBack = () => {
    active = (active == 0) ? slides.length - 1 : active - 1
    classSwitcher()
}
let active = 0
let timer = 3000
let slideshow = document.querySelector(".slideshow")
let slides = document.querySelectorAll(".slide")
let points = document.querySelectorAll(".points>span")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")

let runSlideshow = setInterval(goNext, timer)
points.forEach((point, index) => {
    point.addEventListener("click", e => {
        active = index
        classSwitcher()
    })
})

next.addEventListener("click", e => {
    goNext()
})
prev.addEventListener("click", e => {
    goBack()
})
slideshow.addEventListener("mouseover", e => {
    clearInterval(runSlideshow)
})
slideshow.addEventListener("mouseleave", e => {
    runSlideshow = setInterval(goNext, timer)
})