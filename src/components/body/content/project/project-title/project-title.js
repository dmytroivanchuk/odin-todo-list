import "./project-title.css";
import app from "Src/index";

export default function createProjectTitle(done, title) {
  const projectTitle = document.createElement("div");
  projectTitle.classList.add("project-title");
  const projectTitleDone = document.createElement("input");
  projectTitleDone.type = "checkbox";
  projectTitleDone.classList.add("project-title-done");
  projectTitleDone.checked = done;
  projectTitleDone.addEventListener("change", () => {
    checkboxChanged(projectTitleDone);
  });
  const projectTitleTitle = document.createElement("div");
  projectTitleTitle.classList.add("project-title-title");
  projectTitleTitle.contentEditable = "true";
  projectTitleTitle.dataset.placeholder = "New Project";
  projectTitleTitle.textContent = title;
  projectTitle.append(projectTitleDone, projectTitleTitle);
  return projectTitle;
}

function checkboxChanged(checkbox) {
  const projectId = checkbox.closest(".project").dataset.id;
  if (checkbox.checked) {
    app.state.checkProject(projectId, true);
  } else {
    app.state.checkProject(projectId, false);
  }
}