import "./todo-checklist-action.css"
import checklistIcon from "./checklist.svg"
import createTodoChecklistTitle from "../todo-checklist/todo-checklist-title/todo-checklist-title";
import app from "index"

export default function createTodoChecklistAction() {
  const todoChecklistAction = document.createElement("button");
  todoChecklistAction.classList.add("todo-checklist-action", "display-none");
  todoChecklistAction.setAttribute("title", "Checklist");
  todoChecklistAction.addEventListener("click", () => {
    checklistActionClicked(todoChecklistAction);
  });
  const todoChecklistActionIcon = document.createElement("img");
  todoChecklistActionIcon.classList.add("todo-checklist-action-icon");
  todoChecklistActionIcon.src = checklistIcon;
  todoChecklistAction.append(todoChecklistActionIcon);
  return todoChecklistAction;
}

function checklistActionClicked(component) {
  const todoId = component.closest(".todo").dataset.id;
  const projectId = component.closest(".project").dataset.id;
  const newChecklistItem = app.state.createChecklistItem(null, todoId, projectId);
  const newTodoChecklistTitle = createTodoChecklistTitle(newChecklistItem);
  const checklist = component.closest(".todo").querySelector(".todo-checklist");
  checklist.append(newTodoChecklistTitle);
  newTodoChecklistTitle.querySelector(".todo-checklist-title-title").focus();
  component.classList.add("display-none");
}