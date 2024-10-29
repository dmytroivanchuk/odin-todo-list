import "./content-footer.css";
import createTodo from "../content/project/todo/todo";
import createNewButton from "Shared/new-button/new-button";
import app from "index";

export default function createContentFooter() {
  const contentFooter = document.createElement("footer");
  contentFooter.classList.add("content-footer");
  const newToDoButton = createNewButton("Todo");
  newToDoButton.addEventListener("click", () => {
    createNewTodo();
  })
  contentFooter.append(newToDoButton);
  return contentFooter;
}

function createNewTodo() {
  const previousExpandedTodo = document.querySelector(`.todo[data-id=${app.state.expandedTodoId}]`);
  if (previousExpandedTodo) {
    previousExpandedTodo.classList.remove("expanded");
    const todoTitleTitle = previousExpandedTodo.querySelector(".todo-title-title");
    todoTitleTitle.contentEditable = "false";
    todoTitleTitle.classList.add("cursor-default");
    while (previousExpandedTodo.children.length > 1) {
      previousExpandedTodo.removeChild(previousExpandedTodo.lastChild);
    }

    document.querySelector(".content").classList.remove("dimmed");
    app.state.expandedTodoId = null;
    app.database.saveExpandedTodoId(null);
  }

  const project = document.querySelector(".content").querySelector(".project");
  const newTodo = app.state.createTodo(project.dataset.id);
  const li = document.createElement("li");
  const todoComponent = createTodo(newTodo);
  li.append(todoComponent);
  project.querySelector(".project-todos").append(li);
  const event = new MouseEvent("dblclick");
  todoComponent.dispatchEvent(event);
  todoComponent.querySelector(".todo-title-title").focus();
}