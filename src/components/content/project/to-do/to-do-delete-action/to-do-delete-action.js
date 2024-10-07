import deleteIcon from "../../../../../assets/delete.svg"

export default function createToDoDeleteAction() {
  const toDoDeleteAction = document.createElement("div");
  toDoDeleteAction.classList.add("to-do-delete-action");
  const toDoDeleteActionIcon = document.createElement("img");
  toDoDeleteActionIcon.src = deleteIcon;
  toDoDeleteAction.append(toDoDeleteActionIcon);
  return toDoDeleteAction;
}