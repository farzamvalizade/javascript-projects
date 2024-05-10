// get todos from llocal storage
let todos = localStorage.getItem("todos")
// try parse data or null
try {
    todos = JSON.parse(todos)
    todos = todos.length ? todos : null
} catch (error) {
    todos = null
}
// set default value if todos is null
if (!todos) {
    todos = [{ content: "Shopping", status: true }, { content: "Watch Video", status: true }, { content: "Like Video", status: true }]
    localStorage.setItem("todos", JSON.stringify(todos))
}
// func to create or update todos list in ui
function createTodos(todos) {
    let todosList = document.querySelector("#todos-list")
    todosList.innerHTML = ""
    // create list tag foreach todo
    todos.forEach((todo, index) => {
        let li = document.createElement('li')
        li.className = "list-group-item"
        let content = document.createElement("span")
        content.textContent = todo.content
        content.style.textDecoration = todo.status ? "initial" : 'line-through'
        let deleteBtn = document.createElement("img")
        deleteBtn.src = "todo/delete.png"
        deleteBtn.alt = "delete icon"
        deleteBtn.className = "float-end"
        // append content delete btn to li
        li.append(content)
        li.append(deleteBtn)
        //append li to todos list
        todosList.append(li)
        deleteBtn.addEventListener("click", e => {
            todos.splice(index, 1)
            localStorage.setItem("todos", JSON.stringify(todos))
            createTodos(todos)
        })
        content.addEventListener("click", e => {
            todos[index].status = !todos[index].status
            localStorage.setItem("todos", JSON.stringify(todos))
            createTodos(todos)
        })
    });

}
createTodos(todos)
// action add and search
let actions = document.querySelector("#actions")
let formWrapper = document.querySelector("#form-wrapper")
Array.from(actions.children).forEach(action => {
    if (action.dataset.action == "add") {
        action.addEventListener("click", e => {
            formWrapper.innerHTML = `
          <form id="add">
                    <input class="form-control" name="add" placeholder="Add todo ..">
          </form>
          `
          createTodos(todos)
          let add=document.querySelector("#add")
          add.addEventListener("submit",e=>{
            e.preventDefault()
            if(add.add.value){
                todos.push({content:add.add.value,status:true})
                add.textContent=''
                localStorage.setItem("todos", JSON.stringify(todos))
                createTodos(todos)
            }
          })
        })
    } else if (action.dataset.action == "search") {
        action.addEventListener("click", e => {
            formWrapper.innerHTML = `
            <form id="search">
					<input class="form-control" name="search" placeholder="Search todos ..">
			</form>
          `
          let search=document.querySelector("#search")
          search.addEventListener("keyup",e=>{
            e.preventDefault()
            if(search.search.value){
                let filter_todos=todos.filter(
                    todo=>todo.content.toLowerCase().includes(search.search.value.toLowerCase())
                )
                createTodos(filter_todos)
            }else{
                createTodos(todos)
            }
            
          })
        })
    }
})