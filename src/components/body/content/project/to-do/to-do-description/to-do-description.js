import "./to-do-description.css";
import app from "Src/index"

export default function createToDoDescription(description) {
  const toDoDescription = document.createElement("div");
  toDoDescription.classList.add("to-do-description");
  toDoDescription.contentEditable = "true";
  toDoDescription.dataset.placeholder = "Notes";
  toDoDescription.textContent = description;
  toDoDescription.addEventListener("input", () => {
    descriptionChanged(toDoDescription);
  })
  return toDoDescription;
}

function descriptionChanged(component) {
  const todoId = component.closest(".to-do").dataset.id;
  const projectId = component.closest(".project").dataset.id;
  app.state.changeTodoDescription(todoId, projectId, component.textContent);
}