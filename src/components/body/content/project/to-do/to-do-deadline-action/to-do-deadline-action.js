import "./to-do-deadline-action.css"
import deadlineActionIcon from "./deadline-action.svg"

export default function createToDoDeadlineAction() {
  const toDoDeadlineAction = document.createElement("button");
  toDoDeadlineAction.classList.add("to-do-deadline-action", "display-none");
  toDoDeadlineAction.setAttribute("title", "Deadline");
  const toDoDeadlineActionIcon = document.createElement("img");
  toDoDeadlineActionIcon.classList.add("to-do-deadline-action-icon");
  toDoDeadlineActionIcon.src = deadlineActionIcon;
  toDoDeadlineAction.append(toDoDeadlineActionIcon);
  return toDoDeadlineAction;
}