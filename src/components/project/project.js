import "./project.css";

export default function createProjectComponent({ title, icon }) {
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-container");
  const projectIcon = document.createElement("img");
  projectIcon.classList.add("project-icon");
  projectIcon.src = icon;
  const projectTitle = document.createElement("h3");
  projectTitle.textContent = title;
  projectTitle.classList.add("project-title");
  projectContainer.append(projectIcon, projectTitle);
  return projectContainer;
}
