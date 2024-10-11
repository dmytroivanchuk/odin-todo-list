import priorityLowIcon from "../../../../../assets/priority-low.svg"
import priorityMediumIcon from "../../../../../assets/priority-medium.svg"
import priorityHighIcon from "../../../../../assets/priority-high.svg"
import removeIcon from "../../../../../assets/remove.svg"
import "./to-do-priority.css"
import Priority from "../../../../../model/priority"

export default function createToDoPriority(priority) {
  const toDoPriority = document.createElement("div");
  toDoPriority.classList.add("to-do-priority");
  const toDoPriorityIcon = document.createElement("img");
  toDoPriorityIcon.classList.add("to-do-priority-icon");
  switch (priority.name) {
    case "Low":
      toDoPriorityIcon.src = priorityLowIcon;
      break;
    case "Medium":
      toDoPriorityIcon.src = priorityMediumIcon;
      break;
    case "High":
      toDoPriorityIcon.src = priorityHighIcon;
  }

  const toDoPriorityTitle = document.createElement("p");
  toDoPriorityTitle.classList.add("to-do-priority-title");
  toDoPriorityTitle.textContent = priority.name;
  const toDoPriorityRemove = document.createElement("button");
  toDoPriorityRemove.classList.add("to-do-priority-remove");
  const toDoPriorityRemoveIcon = document.createElement("img");
  toDoPriorityRemoveIcon.classList.add("to-do-priority-remove-icon");
  toDoPriorityRemoveIcon.src = removeIcon;
  toDoPriorityRemove.append(toDoPriorityRemoveIcon);
  toDoPriority.append(toDoPriorityIcon, toDoPriorityTitle, toDoPriorityRemove);
  return toDoPriority;
}