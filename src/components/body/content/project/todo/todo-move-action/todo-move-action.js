import "./todo-move-action.css"
import moveIcon from "./move.svg"
import app from "index"

export default function createTodoMoveAction() {
  const todoMoveAction = document.createElement("button");
  todoMoveAction.classList.add("todo-move-action");
  todoMoveAction.setAttribute("title", "Move");
  todoMoveAction.addEventListener("click", (event) => {
    event.stopPropagation();
    moveActionClicked(todoMoveAction);
  });
  const todoMoveActionIcon = document.createElement("img");
  todoMoveActionIcon.classList.add("todo-move-action-icon");
  todoMoveActionIcon.src = moveIcon;
  const todoMoveActionDropdown = document.createElement("div");
  todoMoveActionDropdown.classList.add("todo-move-action-dropdown", "display-none");
  todoMoveAction.append(todoMoveActionIcon, todoMoveActionDropdown);
  return todoMoveAction;
}

function moveActionClicked(component) {
  const dropdown = component.querySelector(".todo-move-action-dropdown");
  if (dropdown.children.length === 0) {
    createDropdownProjectLabels(dropdown);
  }
  dropdown.classList.remove("display-none");
  const datepicker = component.closest(".todo").querySelector(".air-datepicker");
  if (datepicker && !datepicker.classList.contains("display-none")) {
    datepicker.classList.add("display-none");
    return;
  }
  const priorityActionDropdown = component.closest(".todo").querySelector(".todo-priority-action-dropdown");
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
  const todoId = component.closest(".todo").dataset.id;
  const projectId = component.closest(".project").dataset.id;
  app.state.moveTodo(todoId, projectId, newProjectId);
  component.closest(".content").classList.remove("dimmed");
  component.closest("li").remove();
}