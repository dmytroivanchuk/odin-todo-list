import "./to-do-move-action.css"
import moveIcon from "./move.svg"
import app from "Src/index"

export default function createToDoMoveAction() {
  const toDoMoveAction = document.createElement("button");
  toDoMoveAction.classList.add("to-do-move-action");
  toDoMoveAction.setAttribute("title", "Move");
  toDoMoveAction.addEventListener("click", (event) => {
    event.stopPropagation();
    moveActionClicked(toDoMoveAction);
  });
  const toDoMoveActionIcon = document.createElement("img");
  toDoMoveActionIcon.classList.add("to-do-move-action-icon");
  toDoMoveActionIcon.src = moveIcon;
  const toDoMoveActionDropdown = document.createElement("div");
  toDoMoveActionDropdown.classList.add("to-do-move-action-dropdown", "display-none");
  toDoMoveAction.append(toDoMoveActionIcon, toDoMoveActionDropdown);
  return toDoMoveAction;
}

function moveActionClicked(component) {
  const dropdown = component.querySelector(".to-do-move-action-dropdown");
  if (dropdown.children.length === 0) {
    createDropdownProjectLabels(dropdown);
  }
  dropdown.classList.remove("display-none");
  const datepicker = component.closest(".to-do").querySelector(".air-datepicker");
  if (datepicker && !datepicker.classList.contains("display-none")) {
    datepicker.classList.add("display-none");
    return;
  }
  const priorityActionDropdown = component.closest(".to-do").querySelector(".to-do-priority-action-dropdown");
  if (priorityActionDropdown && !priorityActionDropdown.classList.contains("display-none")) {
    priorityActionDropdown.classList.add("display-none");
    return;
  }
}

function createDropdownProjectLabels(dropdown) {
  const projectId = dropdown.closest(".project").dataset.id;
  const projectsToMoveInto = app.state.projects.filter(project => project.id != projectId);
  projectsToMoveInto.forEach(project => {
    const dropdownProjectLabel = createDropdownProjectLabel(project);
    dropdown.append(dropdownProjectLabel);
  });
}

function createDropdownProjectLabel(project) {
  const dropdownProjectLabel = document.createElement("button");
  dropdownProjectLabel.classList.add("dropdown-project-label");
  dropdownProjectLabel.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdownProjectLabelClicked(dropdownProjectLabel, project.id)
  });
  const dropdownProjectLabelIcon = document.createElement("img");
  dropdownProjectLabelIcon.classList.add("dropdown-project-label-icon");
  dropdownProjectLabelIcon.src = project.icon;

  const dropdownProjectLabelTitle = document.createElement("p");
  dropdownProjectLabelTitle.classList.add("dropdown-project-label-title");
  dropdownProjectLabelTitle.textContent = project.title;
  dropdownProjectLabel.append(dropdownProjectLabelIcon, dropdownProjectLabelTitle);
  return dropdownProjectLabel;
}

function dropdownProjectLabelClicked(component, newProjectId) {
  const todoId = component.closest(".to-do").dataset.id;
  const projectId = component.closest(".project").dataset.id;
  app.state.moveTodo(todoId, projectId, newProjectId);
  component.closest(".content").classList.remove("dimmed");
  component.closest(".to-do").remove();
}