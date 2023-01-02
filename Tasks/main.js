const inputBox = document.querySelector(".inputBox__newtask");
const editTodoBtn = document.querySelector(".edit__btn");
const newtaskBtn = document.querySelector(".button__addTasks");
const taskDisplayContainer = document.querySelector(".tasks__box");
const newtaskBox = document.querySelector(".task__container__new");
const newTaskInput = document.querySelector(".inputBox__newtask__add");

class ToDos {
  constructor(todoName) {
    let title = todoName;
    let createdAt = Date.now();
    this.todo = {
      title,
      createdAt,
    };
  }

  setLocalStorage() {
    const db = localStorage.getItem("taskList");
    if (!db) {
      localStorage.setItem(
        "taskList",
        JSON.stringify([
          {
            title: "This is a demo task",
            createdAt: "1672634477144",
          },
        ])
      );
    }
  }

  getLocalStorage() {
    return JSON.parse(localStorage.getItem("taskList"));
  }

  saveTodoLocalDB(task) {
    const tasks = this.getLocalStorage();
    localStorage.setItem("taskList", JSON.stringify([...tasks, task]));
  }

  displayTasks() {
    const tasks = this.getLocalStorage();
    const nodes = tasks
      .map((task) => {
        return `<div id=${task.createdAt} class="task__container not__selectable">
          <h3 class="task__title">${task.title}</h3>
          <span class="edit__btn">edit</span>
          <input
            class="inputBox__newtask  hidden"
            type="text"
            placeholder="enter task name"
          />
    </div>`;
      })
      .join("");

    const LI = document.createElement("div");
    LI.setAttribute("class", "style__tasks");
    LI.innerHTML = nodes;

    taskDisplayContainer.innerHTML = ``;
    taskDisplayContainer.appendChild(LI);
  }

  createTodo(title) {
    return {
      title,
      createdAt: Date.now(),
    };
  }

  updateTodo(id, newTitle) {
    const tasks = this.getLocalStorage();
    const updatedTasks = tasks.map((task) => {
      if (+task.createdAt === +id) {
        task.title = newTitle;
      }
      return task;
    });
    console.log(updatedTasks);
    localStorage.setItem("taskList", JSON.stringify(updatedTasks));
  }

  deleteTodo(id) {}
}

const todo = new ToDos("This is a demo task");
todo.setLocalStorage();
todo.displayTasks();

newtaskBtn.addEventListener("click", () => {
  newtaskBox.classList.remove("hidden");
});

newTaskInput.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    const task = todo.createTodo(e.target.value);
    console.log(task);
    todo.saveTodoLocalDB(task);
    newtaskBox.classList.add("hidden");
    e.target.value = "";
    todo.displayTasks();
  }
});

taskDisplayContainer.addEventListener("click", (e) => {
  {
    e.target.parentElement.children[2].classList.remove("hidden");
    e.target.parentElement.children[0].classList.add("hidden");
    e.target.parentElement.children[1].classList.add("hidden");
  }
});

taskDisplayContainer.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    todo.updateTodo(e.target.parentNode.id, e.target.value);
    e.target.parentElement.children[2].classList.add("hidden");
    e.target.parentElement.children[0].classList.remove("hidden");
    e.target.parentElement.children[1].classList.remove("hidden");
    todo.displayTasks();
  }
});
