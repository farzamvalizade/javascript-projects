// let mytime = new Date()
// console.log(`Date: ${mytime.getDate()}`)
// console.log(`Day: ${mytime.getDay()}`)
// console.log(`FullYear: ${mytime.getFullYear()}`)
// console.log(`Hours: ${mytime.getHours()}`)
// console.log(`Milliseconds: ${mytime.getMilliseconds()}`)
// console.log(`Minutes: ${mytime.getMinutes()}`)
// console.log(`Month: ${mytime.getMonth()}`)
// console.log(`Seconds: ${mytime.getSeconds()}`)
// console.log(`Time: ${mytime.getTime()}`)
let myClock=()=>{
    let clock=document.querySelector("#clock")
    let mytime=new Date()
    clock.textContent=`${mytime.getHours()}:${mytime.getMinutes()}:${mytime.getSeconds()}`
}
myClock()
setInterval(myClock,1000)