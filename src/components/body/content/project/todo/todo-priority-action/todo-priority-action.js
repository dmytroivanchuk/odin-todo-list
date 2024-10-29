import "./todo-priority-action.css"
import createTodoPriority from "../todo-priority/todo-priority"
import Priority from "Model/Priority"
import priorityIcon from "./priority.svg"
import priorityLowIcon from "AssetsShared/priority-low.svg"
import priorityMediumIcon from "AssetsShared/priority-medium.svg"
import priorityHighIcon from "AssetsShared/priority-high.svg"
import app from "index"

export default function createTodoPriorityAction() {
  const todoPriorityAction = document.createElement("button");
  todoPriorityAction.classList.add("todo-priority-action", "display-none");
  todoPriorityAction.setAttribute("title", "Priority");
  todoPriorityAction.addEventListener("click", (event) => {
    event.stopPropagation();
    priorityActionClicked(todoPriorityAction);
  });
  const todoPriorityActionIcon = document.createElement("img");
  todoPriorityActionIcon.classList.add("todo-priority-action-icon");
  todoPriorityActionIcon.src = priorityIcon;
  const todoPriorityActionDropdown = document.createElement("div");
  todoPriorityActionDropdown.classList.add("todo-priority-action-dropdown", "display-none");
  const dropdownPriorityLow = createDropdownPriority(todoPriorityAction, Priority.Low);
  const dropdownPriorityMedium = createDropdownPriority(todoPriorityAction, Priority.Medium);
  const dropdownPriorityHigh = createDropdownPriority(todoPriorityAction, Priority.High);
  todoPriorityActionDropdown.append(dropdownPriorityLow, dropdownPriorityMedium, dropdownPriorityHigh);
  todoPriorityAction.append(todoPriorityActionIcon, todoPriorityActionDropdown);
  return todoPriorityAction;
}

function priorityActionClicked(component) {
  const dropdown = component.querySelector(".todo-priority-action-dropdown");
  dropdown.classList.remove("display-none");
  const datepicker = component.closest(".todo").querySelector(".air-datepicker");
  if (datepicker && !datepicker.classList.contains("display-none")) {
    datepicker.classList.add("display-none");
    return;
  }
  const projectLabelDropdown = component.closest(".todo").querySelector(".todo-move-action-dropdown");
  if (projectLabelDropdown && !projectLabelDropdown.classList.contains("display-none")) {
    projectLabelDropdown.classList.add("display-none");
    return;
  }
}

function createDropdownPriority(action, priority) {
  const dropdownPriority = document.createElement("button");
  dropdownPriority.classList.add("dropdown-priority");
  dropdownPriority.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdownPriorityClicked(dropdownPriority, action, priority)
  });
  const dropdownPriorityIcon = document.createElement("img");
  dropdownPriorityIcon.classList.add("dropdown-priority-icon");
  switch (priority.name) {
    case "Low":
      dropdownPriorityIcon.src = priorityLowIcon;
      break;
    case "Medium":
      dropdownPriorityIcon.src = priorityMediumIcon;
      break;
    case "High":
      dropdownPriorityIcon.src = priorityHighIcon;
  }

  const dropdownPriorityTitle = document.createElement("p");
  dropdownPriorityTitle.classList.add("dropdown-priority-title");
  dropdownPriorityTitle.textContent = priority.name;
  dropdownPriority.append(dropdownPriorityIcon, dropdownPriorityTitle);
  return dropdownPriority;
}

function dropdownPriorityClicked(component, action, priority) {
  const todoId = component.closest(".todo").dataset.id;
  const projectId = component.closest(".project").dataset.id;
  app.state.changeTodoPriority(todoId, projectId, priority);
  const newTodoPriority = createTodoPriority(priority);
  newTodoPriority.classList.remove("display-none");
  const oldTodoPriority = component.closest(".todo").querySelector(".todo-priority");
  oldTodoPriority.replaceWith(newTodoPriority);
  component.closest(".todo-priority-action-dropdown").classList.add("display-none");
  action.classList.add("display-none");
}