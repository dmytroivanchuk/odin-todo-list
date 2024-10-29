import "./todo-description.css";
import app from "index"

export default function createTodoDescription(description) {
  const todoDescription = document.createElement("div");
  todoDescription.classList.add("todo-description");
  todoDescription.contentEditable = "true";
  todoDescription.dataset.placeholder = "Notes";
  todoDescription.textContent = description;
  todoDescription.addEventListener("input", () => {
    descriptionChanged(todoDescription);
  })
  return todoDescription;
}

function descriptionChanged(component) {
  const todoId = component.closest(".todo").dataset.id;
  const projectId = component.closest(".project").dataset.id;
  app.state.changeTodoDescription(todoId, projectId, component.textContent);
}