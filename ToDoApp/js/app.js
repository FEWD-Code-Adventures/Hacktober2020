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
  const todo = document.createElement("DIV");
  todo.classList.add("todo");
  const todoHTML = `
          <h2 class="todo__title">${todoInput.value}</h2>
    `;
  todo.innerHTML = todoHTML;
  todoInput.value = "";
  todoList.append(todo);
};

submitTodo.addEventListener("click", createTodo);
