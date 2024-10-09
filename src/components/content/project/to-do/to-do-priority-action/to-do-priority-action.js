import priorityIcon from "../../../../../assets/priority.svg"
import "./to-do-priority-action.css"

export default function createToDoPriorityAction() {
  const toDoPriorityAction = document.createElement("button");
  toDoPriorityAction.classList.add("to-do-priority-action");
  const toDoPriorityActionIcon = document.createElement("img");
  toDoPriorityActionIcon.classList.add("to-do-priority-action-icon");
  toDoPriorityActionIcon.src = priorityIcon;
  toDoPriorityAction.append(toDoPriorityActionIcon);
  return toDoPriorityAction;
}