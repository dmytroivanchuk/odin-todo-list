import moveIcon from "../../../../../assets/move.svg"

export default function createToDoMoveAction() {
  const toDoMoveAction = document.createElement("div");
  toDoMoveAction.classList.add("to-do-move-action");
  const toDoMoveActionIcon = document.createElement("img");
  toDoMoveActionIcon.src = moveIcon;
  toDoMoveAction.append(toDoMoveActionIcon);
  return toDoMoveAction;
}