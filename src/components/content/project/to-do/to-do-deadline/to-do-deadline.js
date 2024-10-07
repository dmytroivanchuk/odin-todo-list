import deadlineIcon from "../../../../../assets/deadline.svg"
import removeIcon from "../../../../../assets/remove.svg"

export default function createToDoDeadline(deadline) {
  const toDoDeadline = document.createElement("div");
  toDoDeadline.classList.add("to-do-deadline");
  const toDoDeadlineIcon = document.createElement("img");
  toDoDeadlineIcon.src = deadlineIcon;
  const toDoDeadlineTitle = document.createElement("p");
  toDoDeadlineTitle.textContent = deadline;
  const toDoDeadlineRemove = document.createElement("img");
  toDoDeadlineRemove.src = removeIcon;
  toDoDeadline.append(toDoDeadlineIcon, toDoDeadlineTitle, toDoDeadlineRemove);
  return toDoDeadline;
}