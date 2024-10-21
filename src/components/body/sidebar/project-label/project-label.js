import createProject from "../../content/project/project";
import "./project-label.css";
import app from "Src/index";

export default function createProjectLabel(project) {
  const projectLabel = document.createElement("div");
  projectLabel.classList.add("project-label");
  projectLabel.dataset.id = project.id;

  if (projectLabel.dataset.id === app.state.selectedItemId) {
    projectLabel.classList.add("selected");
  }

  projectLabel.addEventListener("click", () => {
    const previousSelectedItem = document.querySelector(`.project-label[data-id=${app.state.selectedItemId}], .list-label[data-id=${app.state.selectedItemId}]`);
    previousSelectedItem.classList.remove("selected");
    projectLabel.classList.add("selected");
    const newSelectedItemId = projectLabel.dataset.id;
    app.state.selectedItemId = newSelectedItemId;
    app.database.saveSelectedItemId(newSelectedItemId);
    const content = document.querySelector(".content");
    content.removeChild(content.firstChild);
    const projectComponent = createProject(project);
    content.append(projectComponent);

    if (app.state.selectedTodoId) {
      app.state.selectedTodoId = null;
      app.database.saveSelectedTodoId(null);
    }

    if (app.state.expandedTodoId) {
      const content = document.querySelector(".content");
      content.classList.remove("dimmed");
      app.state.expandedTodoId = null;
      app.database.saveExpandedTodoId(null);
    }
  })

  const projectLabelIcon = document.createElement("img");
  projectLabelIcon.classList.add("project-label-icon");
  projectLabelIcon.src = project.icon;
  const projectLabelTitle = document.createElement("h3");
  projectLabelTitle.textContent = project.title;
  projectLabelTitle.classList.add("project-label-title");
  projectLabel.append(projectLabelIcon, projectLabelTitle);
  return projectLabel;
}
