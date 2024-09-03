import { storage } from "../../../../index";
import "./project-description.css";

export default function createProjectDescription(projectId) {
  const project = storage.getProject(projectId);
  const projectDescription = document.createElement("div");
  projectDescription.classList.add("project-description");
  projectDescription.contentEditable = "true";
  projectDescription.dataset.placeholder = "Notes";
  projectDescription.textContent = project.description;
  return projectDescription;
}
