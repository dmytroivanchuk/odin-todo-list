import priorityIcon from "../../../../../assets/priority.svg"
import removeIcon from "../../../../../assets/remove.svg"

export default function createToDoPriority(priority) {
  const toDoPriority = document.createElement("div");
  toDoPriority.classList.add("to-do-priority");
  const toDoPriorityIcon = document.createElement("img");
  toDoPriorityIcon.src = priorityIcon;
  const toDoPriorityTitle = document.createElement("p");
  toDoPriorityTitle.textContent = priority.name;
  const toDoPriorityRemove = document.createElement("img");
  toDoPriorityRemove.src = removeIcon;
  toDoPriority.append(toDoPriorityIcon, toDoPriorityTitle, toDoPriorityRemove);
  return toDoPriority;
}