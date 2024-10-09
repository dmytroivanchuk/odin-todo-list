import deleteIcon from "../../../../../assets/delete.svg"
import "./to-do-delete-action.css"

export default function createToDoDeleteAction() {
  const toDoDeleteAction = document.createElement("button");
  toDoDeleteAction.classList.add("to-do-delete-action");
  const toDoDeleteActionIcon = document.createElement("img");
  toDoDeleteActionIcon.classList.add("to-do-delete-action-icon");
  toDoDeleteActionIcon.src = deleteIcon;
  toDoDeleteAction.append(toDoDeleteActionIcon);
  return toDoDeleteAction;
}