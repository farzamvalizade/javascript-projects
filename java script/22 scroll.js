let scrolled=document.querySelector("button.scroll")
window.addEventListener("scroll",e=>{
    if (window.scrollY>300 &window.scrollY<2000){
        scrolled.classList.add("show")
    }else{
        scrolled.classList.remove("show")
    }
})
scrolled.addEventListener("click",e=>{
    if (scrolled.classList.contains("show")){
        window.scrollTo({top:0,behavior:"smooth"})
    }
})
let scrolled2=document.querySelector("button.scroll2")
window.addEventListener("scroll",e=>{
    if (window.scrollY>2000){
        scrolled2.classList.add("show")
    }else{
        scrolled2.classList.remove("show")
    }
})
scrolled2.addEventListener("click",e=>{
    if (scrolled2.classList.contains("show")){
        document.querySelector("#articles").scrollIntoView({top:0,behavior:"smooth"})
    }
})