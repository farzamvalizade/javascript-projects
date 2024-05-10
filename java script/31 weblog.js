let postsurl = "https://jsonplaceholder.typicode.com/posts/"
let usersUrl = "https://jsonplaceholder.typicode.com/users/"
// fetch(url)
//     .then(response=>response.json())
//     .then(data=>console.log(data))
let app = document.querySelector("#app")
async function getAuthor(url,id) {
    let response = await fetch(url+id)
    let author = await response.json()
    return author
}
async function getArticle(url) {
    let response = await fetch(url)
    let data = await response.json()
    data.forEach(async post => {
        post.user=await getAuthor(usersUrl,post.userId)
        console.log(post.user)
        app.innerHTML += `
        
        <article>
            <h2 class="h4">${post.title}</h2>
            <small class="badge badge-secondary ">${post.user.name}</small>
            <p>${post.body}</p>
        </article>
        
        `
    });
}
getArticle(postsurl)