import "./project-title.css";
import app from "index";

export default function createProjectTitle(done, title, type, icon) {
  const projectTitle = document.createElement("div");
  projectTitle.classList.add("project-title");
  switch (type.name) {
    case "Project":
      const projectTitleDone = document.createElement("input");
      projectTitleDone.type = "checkbox";
      projectTitleDone.classList.add("project-title-done");
      projectTitleDone.checked = done;
      projectTitleDone.addEventListener("change", () => {
        doneChanged(projectTitleDone);
      });
      projectTitle.append(projectTitleDone);
      break;
    case "List":
      const projectTitleIcon = document.createElement("img");
      projectTitleIcon.classList.add("project-title-icon");
      projectTitleIcon.src = icon;
      projectTitle.append(projectTitleIcon);
  }
  const projectTitleTitle = document.createElement("div");
  projectTitleTitle.classList.add("project-title-title");
  projectTitleTitle.contentEditable = "true";
  projectTitleTitle.dataset.placeholder = "New Project";
  projectTitleTitle.textContent = title;
  projectTitleTitle.addEventListener("input", () => {
    titleChanged(projectTitleTitle);
  })
  projectTitle.append(projectTitleTitle);
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

  const selectedItem = document.querySelector(`.project-label[data-id=${app.state.selectedProjectId}]`);
  const selectedItemTitle = selectedItem.querySelector(".project-label-title");
  selectedItemTitle.textContent = component.textContent;
}