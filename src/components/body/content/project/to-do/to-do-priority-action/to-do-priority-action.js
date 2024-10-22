import "./to-do-priority-action.css"
import priorityIcon from "./priority.svg"

export default function createToDoPriorityAction() {
  const toDoPriorityAction = document.createElement("button");
  toDoPriorityAction.classList.add("to-do-priority-action", "display-none");
  toDoPriorityAction.setAttribute("title", "Priority");
  const toDoPriorityActionIcon = document.createElement("img");
  toDoPriorityActionIcon.classList.add("to-do-priority-action-icon");
  toDoPriorityActionIcon.src = priorityIcon;
  toDoPriorityAction.append(toDoPriorityActionIcon);
  return toDoPriorityAction;
}