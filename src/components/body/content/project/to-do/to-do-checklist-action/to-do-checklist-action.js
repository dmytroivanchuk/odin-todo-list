import "./to-do-checklist-action.css"
import checklistIcon from "./checklist.svg"
import createTodoChecklistTitle from "../to-do-checklist/to-do-checklist-title/to-do-checklist-title";
import app from "Src/index"

export default function createToDoChecklistAction() {
  const toDoChecklistAction = document.createElement("button");
  toDoChecklistAction.classList.add("to-do-checklist-action", "display-none");
  toDoChecklistAction.setAttribute("title", "Checklist");
  toDoChecklistAction.addEventListener("click", () => {
    checklistActionClicked(toDoChecklistAction);
  });
  const toDoChecklistActionIcon = document.createElement("img");
  toDoChecklistActionIcon.classList.add("to-do-checklist-action-icon");
  toDoChecklistActionIcon.src = checklistIcon;
  toDoChecklistAction.append(toDoChecklistActionIcon);
  return toDoChecklistAction;
}

function checklistActionClicked(component) {
  const todoId = component.closest(".to-do").dataset.id;
  const projectId = component.closest(".project").dataset.id;
  const newChecklistItem = app.state.createChecklistItem(null, todoId, projectId);
  const newToDoChecklistTitle = createTodoChecklistTitle(newChecklistItem);
  const checklist = component.closest(".to-do").querySelector(".to-do-checklist");
  checklist.append(newToDoChecklistTitle);
  newToDoChecklistTitle.querySelector(".to-do-checklist-title-title").focus();
  component.classList.add("display-none");
}