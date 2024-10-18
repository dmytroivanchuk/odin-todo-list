import "./to-do-delete-action.css"
import deleteIcon from "./delete.svg"

export default function createToDoDeleteAction() {
  const toDoDeleteAction = document.createElement("button");
  toDoDeleteAction.classList.add("to-do-delete-action");
  toDoDeleteAction.setAttribute("title", "Delete");
  const toDoDeleteActionIcon = document.createElement("img");
  toDoDeleteActionIcon.classList.add("to-do-delete-action-icon");
  toDoDeleteActionIcon.src = deleteIcon;
  toDoDeleteAction.append(toDoDeleteActionIcon);
  return toDoDeleteAction;
}