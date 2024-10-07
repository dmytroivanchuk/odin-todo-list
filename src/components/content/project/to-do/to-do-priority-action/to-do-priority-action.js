import priorityIcon from "../../../../../assets/priority.svg"

export default function createToDoPriorityAction() {
  const toDoPriorityAction = document.createElement("div");
  toDoPriorityAction.classList.add("to-do-priority-action");
  const toDoPriorityActionIcon = document.createElement("img");
  toDoPriorityActionIcon.src = priorityIcon;
  toDoPriorityAction.append(toDoPriorityActionIcon);
  return toDoPriorityAction;
}