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
    doneChanged(projectTitleDone);
  });
  const projectTitleTitle = document.createElement("div");
  projectTitleTitle.classList.add("project-title-title");
  projectTitleTitle.contentEditable = "true";
  projectTitleTitle.dataset.placeholder = "New Project";
  projectTitleTitle.textContent = title;
  projectTitleTitle.addEventListener("input", () => {
    titleChanged(projectTitleTitle);
  })
  projectTitle.append(projectTitleDone, projectTitleTitle);
  return projectTitle;
}

function doneChanged(checkbox) {
  const projectId = checkbox.closest(".project").dataset.id;
  if (checkbox.checked) {
    app.state.checkProject(projectId, true);
  } else {
    app.state.checkProject(projectId, false);
  }
}

function titleChanged(component) {
  const projectId = component.closest(".project").dataset.id;
  app.state.changeProjectTitle(projectId, component.textContent);

  const selectedItem = document.querySelector(`.project-label[data-id=${app.state.selectedItemId}]`);
  const selectedItemTitle = selectedItem.querySelector(".project-label-title");
  selectedItemTitle.textContent = component.textContent;
}