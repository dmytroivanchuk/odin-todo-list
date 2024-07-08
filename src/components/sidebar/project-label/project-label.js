import "./project-label.css";

export default function createProjectLabelComponent({ title, icon }) {
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-label-container");
  const projectIcon = document.createElement("img");
  projectIcon.classList.add("project-label-icon");
  projectIcon.src = icon;
  const projectTitle = document.createElement("h3");
  projectTitle.textContent = title;
  projectTitle.classList.add("project-label-title");
  projectContainer.append(projectIcon, projectTitle);
  return projectContainer;
}
