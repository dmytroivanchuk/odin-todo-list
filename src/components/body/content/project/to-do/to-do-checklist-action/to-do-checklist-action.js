import "./to-do-checklist-action.css"
import checklistIcon from "./checklist.svg"

export default function createToDoChecklistAction() {
  const toDoChecklistAction = document.createElement("button");
  toDoChecklistAction.classList.add("to-do-checklist-action");
  const toDoChecklistActionIcon = document.createElement("img");
  toDoChecklistActionIcon.classList.add("to-do-checklist-action-icon");
  toDoChecklistActionIcon.src = checklistIcon;
  toDoChecklistAction.append(toDoChecklistActionIcon);
  return toDoChecklistAction;
}