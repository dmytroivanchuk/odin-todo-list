import { storage } from "../../../index";
import "./project-label.css";

export default function createProjectLabel(projectId) {
  const project = storage.getProject(projectId);

  const projectLabel = document.createElement("div");
  projectLabel.classList.add("project-label");
  const projectLabelIcon = document.createElement("img");
  projectLabelIcon.classList.add("project-label-icon");
  projectLabelIcon.src = project.icon;
  const projectLabelTitle = document.createElement("h3");
  projectLabelTitle.textContent = project.title;
  projectLabelTitle.classList.add("project-label-title");
  projectLabel.append(projectLabelIcon, projectLabelTitle);
  return projectLabel;
}
