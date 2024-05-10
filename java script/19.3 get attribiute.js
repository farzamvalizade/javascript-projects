//let header=document.querySelector("#header")
//console.log(header.getAttribute("id"))
//header.setAttribute("title","My Header Title")

let links=document.querySelectorAll("a")
links.forEach(link=>{
    href=link.getAttribute("href")
    // link.setAttribute('href',href.replace("https://","http://"))
    link.setAttribute("title",`${href}`)
    link.setAttribute("data-protocol","SSL")
}
    )