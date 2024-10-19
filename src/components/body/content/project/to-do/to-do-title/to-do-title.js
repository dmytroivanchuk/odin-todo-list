import app from "Src/index";
import "./to-do-title.css";

export default function createToDoTitle(done, title) {
  const toDoTitle = document.createElement("div");
  toDoTitle.classList.add("to-do-title");
  const toDoTitleDone = document.createElement("input");
  toDoTitleDone.classList.add("to-do-title-done");
  toDoTitleDone.type = "checkbox";
  toDoTitleDone.checked = done;
  toDoTitleDone.addEventListener("change", () => {
    doneChanged(toDoTitleDone);
  })
  const toDoTitleTitle = document.createElement("div");
  toDoTitleTitle.classList.add("to-do-title-title");
  toDoTitleTitle.classList.add("cursor-default");
  toDoTitleTitle.dataset.placeholder = "New To-Do";
  toDoTitleTitle.textContent = title;
  toDoTitle.append(toDoTitleDone, toDoTitleTitle);
  return toDoTitle;
}

function doneChanged(checkbox) {
  const todoId = checkbox.closest(".to-do").dataset.id;
  const projectId = checkbox.closest(".project").dataset.id;
  if (checkbox.checked) {
    app.state.checkTodo(todoId, projectId, true);
  } else {
    app.state.checkTodo(todoId, projectId, false);
  }
}