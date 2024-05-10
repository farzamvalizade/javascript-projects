let ul=document.querySelector("ul")
// Array.from(ul.children).forEach((li,index)=>{
//     if (index%2==0) {
//         li.setAttribute("style","color:red;")
//     }else{
//         li.setAttribute("style","color:green;")
//     }
// })
// ul.parentElement.setAttribute('style',"font-size:25px;")
ul.previousElementSibling.setAttribute('style',"font-size:25px;")
ul.nextElementSibling.setAttribute('style',"font-size:25px;")