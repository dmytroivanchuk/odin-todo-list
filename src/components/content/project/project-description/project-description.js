import "./project-description.css";

export default function createProjectDescriptionComponent({ description }) {
  const projectDescription = document.createElement("div");
  projectDescription.classList.add("project-description");
  projectDescription.contentEditable = "true";
  projectDescription.dataset.placeholder = "Notes";
  projectDescription.textContent = description;
  return projectDescription;
}
