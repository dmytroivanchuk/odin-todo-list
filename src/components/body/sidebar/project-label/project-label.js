import "./project-label.css";
import createProject from "../../content/project/project";
import app from "index";

export default function createProjectLabel(project) {
  const projectLabel = document.createElement("div");
  projectLabel.classList.add("project-label");
  projectLabel.dataset.id = project.id;

  if (projectLabel.dataset.id === app.state.selectedProjectId) {
    projectLabel.classList.add("selected");
  }

  projectLabel.addEventListener("click", () => {
    const previousSelectedItem = document.querySelector(`.project-label[data-id=${app.state.selectedProjectId}], .list-label[data-id=${app.state.selectedProjectId}]`);
    previousSelectedItem.classList.remove("selected");
    projectLabel.classList.add("selected");
    const newSelectedProjectId = projectLabel.dataset.id;
    app.state.selectedProjectId = newSelectedProjectId;
    app.database.saveSelectedProjectId(newSelectedProjectId);
    const projectComponent = createProject(project);
    document.querySelector(".project").replaceWith(projectComponent);

    if (app.state.selectedTodoId) {
      app.state.selectedTodoId = null;
      app.database.saveSelectedTodoId(null);
    }

    if (app.state.expandedTodoId) {
      document.querySelector(".content").classList.remove("dimmed");
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
