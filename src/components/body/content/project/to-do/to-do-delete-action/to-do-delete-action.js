import "./to-do-delete-action.css"
import deleteIcon from "./delete.svg"
import app from "Src/index"

export default function createToDoDeleteAction() {
  const toDoDeleteAction = document.createElement("button");
  toDoDeleteAction.classList.add("to-do-delete-action");
  toDoDeleteAction.setAttribute("title", "Delete");
  toDoDeleteAction.addEventListener("click", () => {
    deleteActionClicked(toDoDeleteAction);
  });
  const toDoDeleteActionIcon = document.createElement("img");
  toDoDeleteActionIcon.classList.add("to-do-delete-action-icon");
  toDoDeleteActionIcon.src = deleteIcon;
  toDoDeleteAction.append(toDoDeleteActionIcon);
  return toDoDeleteAction;
}

function deleteActionClicked(component) {
  const todoId = component.closest(".to-do").dataset.id;
  const projectId = component.closest(".project").dataset.id;
  app.state.deleteTodo(todoId, projectId);
  component.closest(".content").classList.remove("dimmed");
  component.closest(".to-do").remove();
}