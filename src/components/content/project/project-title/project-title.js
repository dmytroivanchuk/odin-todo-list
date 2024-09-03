import { storage } from "../../../../index";
import "./project-title.css";

export default function createProjectTitle(projectId) {
  const project = storage.getProject(projectId);
  const projectTitle = document.createElement("div");
  projectTitle.classList.add("project-title");
  const projectTitleDone = document.createElement("input");
  projectTitleDone.type = "checkbox";
  projectTitleDone.classList.add("project-title-done");
  projectTitleDone.checked = project.done;
  const projectTitleTitle = document.createElement("div");
  projectTitleTitle.classList.add("project-title-title");
  projectTitleTitle.contentEditable = "true";
  projectTitleTitle.dataset.placeholder = "New Project";
  projectTitleTitle.textContent = project.title;
  projectTitle.append(projectTitleDone, projectTitleTitle);
  return projectTitle;
}
