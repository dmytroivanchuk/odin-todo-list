import "./to-do-move-action.css"
import moveIcon from "./move.svg"

export default function createToDoMoveAction() {
  const toDoMoveAction = document.createElement("button");
  toDoMoveAction.classList.add("to-do-move-action");
  const toDoMoveActionIcon = document.createElement("img");
  toDoMoveActionIcon.classList.add("to-do-move-action-icon");
  toDoMoveActionIcon.src = moveIcon;
  toDoMoveAction.append(toDoMoveActionIcon);
  return toDoMoveAction;
}