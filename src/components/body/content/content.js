import "./content.css";
import createProject from "./project/project";
import app from "index";

export default function createContent() {
  const content = document.createElement("main");
  content.classList.add("content");
  const selectedProject = app.state.getSelectedProject(app.state.selectedProjectId);
  const project = createProject(selectedProject);
  content.append(project);

  content.addEventListener("click", (event) => {
    const previousExpandedTodo = document.querySelector(`.todo[data-id=${app.state.expandedTodoId}]`);
    const previousSelectedTodo = document.querySelector(`.todo[data-id=${app.state.selectedTodoId}]`);
    const projecttodos = document.querySelector(".project-todos");
    if (previousExpandedTodo) {
      if (previousExpandedTodo === event.target || previousExpandedTodo.contains(event.target)) {
        return;
      }

      previousExpandedTodo.classList.remove("expanded");
      const todoTitleTitle = previousExpandedTodo.querySelector(".todo-title-title");
      todoTitleTitle.contentEditable = "false";
      todoTitleTitle.classList.add("cursor-default");
      while (previousExpandedTodo.children.length > 1) {
        previousExpandedTodo.removeChild(previousExpandedTodo.lastChild);
      }

      content.classList.remove("dimmed");
      app.state.expandedTodoId = null;
      app.database.saveExpandedTodoId(null);
    }
    if (previousSelectedTodo) {
      if (projecttodos === event.target || projecttodos.contains(event.target)) {
        return;
      }
      previousSelectedTodo.classList.remove("selected");
      app.state.selectedTodoId = null;
      app.database.saveSelectedTodoId(null);
    }
  });

  return content;
}
