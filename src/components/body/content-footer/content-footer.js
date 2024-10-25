import createToDo from "../content/project/to-do/to-do";
import "./content-footer.css";
import createNewButton from "Shared/new-button/new-button";
import app from "Src/index";

export default function createContentFooter() {
  const contentFooter = document.createElement("footer");
  contentFooter.classList.add("content-footer");
  const newToDoButton = createNewButton("To-Do");
  newToDoButton.addEventListener("click", () => {
    createNewTodo();
  })
  contentFooter.append(newToDoButton);
  return contentFooter;
}

function createNewTodo() {
  const project = document.querySelector(".content").querySelector(".project");
  const newTodo = app.state.createTodo(project.dataset.id);
  const li = document.createElement("li");
  const todoComponent = createToDo(newTodo);
  li.append(todoComponent);
  project.querySelector(".project-to-dos").append(li);
  const event = new MouseEvent("dblclick");
  todoComponent.dispatchEvent(event);
  todoComponent.querySelector(".to-do-title-title").focus();
}