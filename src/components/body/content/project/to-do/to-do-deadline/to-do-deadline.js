import "./to-do-deadline.css"
import deadlineIcon from "./deadline.svg"
import removeIcon from "AssetsShared/remove.svg"
import app from "Src/index";

export default function createToDoDeadline(deadline) {
  const toDoDeadline = document.createElement("div");
  toDoDeadline.classList.add("to-do-deadline", "display-none");
  toDoDeadline.addEventListener("click", (event) => {
    event.stopPropagation();
    removeButtonClicked(toDoDeadline);
  })
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

function removeButtonClicked(component) {
  const todoId = component.closest(".to-do").dataset.id;
  const projectId = component.closest(".project").dataset.id;
  app.state.removeTodoDeadline(todoId, projectId);

  component.closest(".to-do")
    .querySelector(".to-do-deadline-action")
    .classList.remove("display-none");
  component.closest(".to-do-deadline").classList.add("display-none");
}