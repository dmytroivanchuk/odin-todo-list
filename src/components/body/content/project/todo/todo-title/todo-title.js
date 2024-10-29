import "./todo-title.css";
import app from "index";

export default function createTodoTitle(done, title) {
  const todoTitle = document.createElement("div");
  todoTitle.classList.add("todo-title");
  const todoTitleDone = document.createElement("input");
  todoTitleDone.classList.add("todo-title-done");
  todoTitleDone.type = "checkbox";
  todoTitleDone.checked = done;
  todoTitleDone.addEventListener("change", () => {
    doneChanged(todoTitleDone);
  })
  const todoTitleTitle = document.createElement("div");
  todoTitleTitle.classList.add("todo-title-title");
  todoTitleTitle.classList.add("cursor-default");
  todoTitleTitle.dataset.placeholder = "New Todo";
  todoTitleTitle.textContent = title;
  todoTitleTitle.addEventListener("input", () => {
    titleChanged(todoTitleTitle);
  })
  todoTitle.append(todoTitleDone, todoTitleTitle);
  return todoTitle;
}

function doneChanged(checkbox) {
  const todoId = checkbox.closest(".todo").dataset.id;
  const projectId = checkbox.closest(".project").dataset.id;
  if (checkbox.checked) {
    app.state.checkTodo(todoId, projectId, true);
  } else {
    app.state.checkTodo(todoId, projectId, false);
  }
}

function titleChanged(component) {
  const todoId = component.closest(".todo").dataset.id;
  const projectId = component.closest(".project").dataset.id;
  app.state.changeTodoTitle(todoId, projectId, component.textContent);
}