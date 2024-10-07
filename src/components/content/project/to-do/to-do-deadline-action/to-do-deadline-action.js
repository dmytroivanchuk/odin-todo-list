import deadlineIcon from "../../../../../assets/deadline.svg"

export default function createToDoDeadlineAction() {
  const toDoDeadlineAction = document.createElement("div");
  toDoDeadlineAction.classList.add("to-do-deadline-action");
  const toDoDeadlineActionIcon = document.createElement("img");
  toDoDeadlineActionIcon.src = deadlineIcon;
  toDoDeadlineAction.append(toDoDeadlineActionIcon);
  return toDoDeadlineAction;
}