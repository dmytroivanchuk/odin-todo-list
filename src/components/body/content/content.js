import "./content.css";
import createProject from "./project/project";
import app from "Src/index";

export default function createContent() {
  const main = document.createElement("main");
  main.classList.add("content");
  const selectedItem = app.state.getSelectedItem(app.state.selectedItemId);
  switch (selectedItem.type) {
    case "Project":
      const project = createProject(selectedItem);
      main.append(project);
      break;
  }

  main.addEventListener("click", (event) => {
    const previousExpandedTodo = document.querySelector(`.to-do[data-id=${app.state.expandedTodoId}]`);
    const previousSelectedTodo = document.querySelector(`.to-do[data-id=${app.state.selectedTodoId}]`);
    const projectTodos = document.querySelector(".project-to-dos");
    if (previousExpandedTodo) {
      if (previousExpandedTodo === event.target || previousExpandedTodo.contains(event.target)) {
        return;
      }

      previousExpandedTodo.classList.remove("expanded");
      const todoTitleTitle = previousExpandedTodo.querySelector(".to-do-title-title");
      todoTitleTitle.contentEditable = "false";
      todoTitleTitle.classList.add("cursor-default");
      while (previousExpandedTodo.children.length > 1) {
        previousExpandedTodo.removeChild(previousExpandedTodo.lastChild);
      }

      main.classList.remove("dimmed");
      app.state.expandedTodoId = null;
      app.database.saveExpandedTodoId(null);
    }
    if (previousSelectedTodo) {
      if (projectTodos === event.target || projectTodos.contains(event.target)) {
        return;
      }
      previousSelectedTodo.classList.remove("selected");
      app.state.selectedTodoId = null;
      app.database.saveSelectedTodoId(null);
    }
  });

  return main;
}
