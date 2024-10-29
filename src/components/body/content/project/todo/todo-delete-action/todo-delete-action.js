import "./todo-delete-action.css"
import deleteIcon from "./delete.svg"
import app from "index"

export default function createTodoDeleteAction() {
  const todoDeleteAction = document.createElement("button");
  todoDeleteAction.classList.add("todo-delete-action");
  todoDeleteAction.setAttribute("title", "Delete");
  todoDeleteAction.addEventListener("click", () => {
    deleteActionClicked(todoDeleteAction);
  });
  const todoDeleteActionIcon = document.createElement("img");
  todoDeleteActionIcon.classList.add("todo-delete-action-icon");
  todoDeleteActionIcon.src = deleteIcon;
  todoDeleteAction.append(todoDeleteActionIcon);
  return todoDeleteAction;
}

function deleteActionClicked(component) {
  const todoId = component.closest(".todo").dataset.id;
  const projectId = component.closest(".project").dataset.id;
  app.state.deleteTodo(todoId, projectId);
  component.closest(".content").classList.remove("dimmed");
  component.closest(".todo").remove();
}