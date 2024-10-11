import deadlineIcon from "../../../../../assets/deadline.svg"
import removeIcon from "../../../../../assets/remove.svg"
import "./to-do-deadline.css"

export default function createToDoDeadline(deadline) {
  const toDoDeadline = document.createElement("div");
  toDoDeadline.classList.add("to-do-deadline");
  const toDoDeadlineIcon = document.createElement("img");
  toDoDeadlineIcon.classList.add("to-do-deadline-icon");
  toDoDeadlineIcon.src = deadlineIcon;
  const toDoDeadlineTitle = document.createElement("p");
  toDoDeadlineTitle.classList.add("to-do-deadline-title");
  toDoDeadlineTitle.textContent = deadline;
  const toDoDeadlineRemove = document.createElement("button");
  toDoDeadlineRemove.classList.add("to-do-deadline-remove");
  const toDoDeadlineRemoveIcon = document.createElement("img");
  toDoDeadlineRemoveIcon.classList.add("to-do-deadline-remove-icon");
  toDoDeadlineRemoveIcon.src = removeIcon;
  toDoDeadlineRemove.append(toDoDeadlineRemoveIcon);
  toDoDeadline.append(toDoDeadlineIcon, toDoDeadlineTitle, toDoDeadlineRemove);
  return toDoDeadline;
}