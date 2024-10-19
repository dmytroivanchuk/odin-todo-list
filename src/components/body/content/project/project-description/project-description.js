import "./project-description.css";
import app from "Src/index";

export default function createProjectDescription(description) {
  const projectDescription = document.createElement("div");
  projectDescription.classList.add("project-description");
  projectDescription.contentEditable = "true";
  projectDescription.dataset.placeholder = "Notes";
  projectDescription.textContent = description;
  projectDescription.addEventListener("input", () => {
    descriptionChanged(projectDescription);
  })
  return projectDescription;
}

function descriptionChanged(component) {
  const projectId = component.closest(".project").dataset.id;
  app.state.changeProjectDescription(projectId, component.textContent);
}