const todoInput = document.getElementById('text');
const addbutton = document.getElementById('addtodo');
const todolist = document.getElementById('todolist');

addbutton.addEventListener('click',addTodo);

function addTodo(){
    const todoText = todoInput.value ;
        if(todoText.trim() !==''){
        const todoItem = createTodoItem(todoText);
        todolist.appendChild(todoItem);
        todoInput.value='';

    }
}
function  createTodoItem(todoText){
    const li = document.createElement('li');
    const  span = document.createElement('span');
    span.textContent=todoText;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', deleteTodo);
     li.appendChild(span);
    li.appendChild(deleteButton);
    return li;
  }
  
  // Function to delete a todo item
  function deleteTodo() {
    const listItem = this.parentNode;
    todolist.removeChild(listItem);
  }