// IDEAS TO IMPLEMENT:

// Create a way to give labels (example: private, study, work)
// create a way to change the order of the todo cards (examples: drag/drop, buttons to move them up and down, alphabetical? )
// a way to delete cards
// move cards to .completed
// change excisting card
// possibility to add additional taks to a to do card (example: todo is Finish Project, tasks: finish search function, validate code etc...)
// add local storage
// dark mode

// create ToDo card when the btn__create is clicked
const todoInput = document.querySelector("#todo-input");
const submitTodo = document.querySelector("#btn__create");
const todoList = document.querySelector("#todolist");


const createTodo = () => {
  if(todoInput.value){
    let importance = document.querySelector('#importance');
    importance = importance.options[importance.selectedIndex].value;
    console.log(importance);
    const todo = document.createElement("DIV");
    const completeButton = document.createElement("BUTTON");
    todo.classList.add("todo");
    completeButton.classList.add("complete__btn");
    completeButton.textContent = "Complete";
    todo.dataset.importance = importance;
    const todoHTML = `
            <h2 class="todo__title">${todoInput.value}</h2>
      `;
    todo.innerHTML = todoHTML;
    todo.appendChild(completeButton);
    todoInput.value = "";
    todoList.append(todo);
  }
  else{
    alert("please add valid task");
  }
};

submitTodo.addEventListener("click", createTodo);

//then move the chosen todo task to the completed div

todoList.addEventListener('click', (e) => {
  if(e.target.textContent = "Complete") {
  const completedList = document.querySelector(".completed");
  const toDoItem = document.querySelector(".todo")
  completedList.appendChild(toDoItem);
  toDoItem.classList.add('todo__complete');
  const completedButton = document.querySelector('.completed .complete__btn');
  completedButton.remove();
}

})
//Cannot read property 'addEventListener' of null - need to figure out why?
//then move the chosen todo task to the completed div

// const completeButton = document.querySelector(".complete__btn");
// completeButton.addEventListener('click', () => {
//   const completedList = document.querySelector(".completed");

// })

