let people=[
    {name:'farzam',new:true},
    {name:'elena',new:false},
    {name:'amir',new:false},
    {name:'hasan',new:true}

]
ul.innerHTML=''
function create_navbar(people) {
    let ul=document.querySelector("ul")
people.forEach(p=>{
    // ul.innerHTML+=`<li> ${p.name} </li>`
    if (p.new){
        ul.innerHTML+=`<li> ${p.name} <span class="badge badge-secondary text-warning" >NEW</span></li>`
    }else{
        ul.innerHTML+=`<li> ${p.name} </li> `
    }
})
}
create_navbar(people)