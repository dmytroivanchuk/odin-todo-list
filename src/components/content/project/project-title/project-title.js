import "./project-title.css";

export default function createProjectTitleComponent({ done, title }) {
  const projectTitleContainer = document.createElement("div");
  projectTitleContainer.classList.add("project-title-container");
  const projectDone = document.createElement("input");
  projectDone.type = "checkbox";
  projectDone.classList.add("project-done");
  projectDone.checked = done;
  const projectTitle = document.createElement("div");
  projectTitle.classList.add("project-title");
  projectTitle.contentEditable = "true";
  projectTitle.dataset.placeholder = "New Project";
  projectTitle.textContent = title;
  projectTitleContainer.append(projectDone, projectTitle);
  return projectTitleContainer;
}
