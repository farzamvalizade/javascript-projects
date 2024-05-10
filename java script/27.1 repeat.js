var x=1

let doSomething=()=>{
    let set=document.querySelector("#set")
    set.textContent=`My counter:${x++} seconds `
}
// setTimeout(doSomething,3000)
let d=setInterval(doSomething,1000)
// setTimeout(()=>{clearInterval(d)},10000)
let b=document.querySelector("#btn")
b.addEventListener("click",e=>{
    clearInterval(d)
})