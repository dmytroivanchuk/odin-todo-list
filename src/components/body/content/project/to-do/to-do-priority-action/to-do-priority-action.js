import "./to-do-priority-action.css"
import createToDoPriority from "../to-do-priority/to-do-priority"
import Priority from "Model/Priority"
import priorityIcon from "./priority.svg"
import priorityLowIcon from "AssetsShared/priority-low.svg"
import priorityMediumIcon from "AssetsShared/priority-medium.svg"
import priorityHighIcon from "AssetsShared/priority-high.svg"
import app from "Src/index"

export default function createToDoPriorityAction() {
  const toDoPriorityAction = document.createElement("button");
  toDoPriorityAction.classList.add("to-do-priority-action", "display-none");
  toDoPriorityAction.setAttribute("title", "Priority");
  toDoPriorityAction.addEventListener("click", (event) => {
    event.stopPropagation();
    priorityActionClicked(toDoPriorityAction);
  });
  const toDoPriorityActionIcon = document.createElement("img");
  toDoPriorityActionIcon.classList.add("to-do-priority-action-icon");
  toDoPriorityActionIcon.src = priorityIcon;
  const toDoPriorityActionDropdown = document.createElement("div");
  toDoPriorityActionDropdown.classList.add("to-do-priority-action-dropdown", "display-none");
  const dropdownPriorityLow = createDropdownPriority(toDoPriorityAction, Priority.Low);
  const dropdownPriorityMedium = createDropdownPriority(toDoPriorityAction, Priority.Medium);
  const dropdownPriorityHigh = createDropdownPriority(toDoPriorityAction, Priority.High);
  toDoPriorityActionDropdown.append(dropdownPriorityLow, dropdownPriorityMedium, dropdownPriorityHigh);
  toDoPriorityAction.append(toDoPriorityActionIcon, toDoPriorityActionDropdown);
  return toDoPriorityAction;
}

function priorityActionClicked(component) {
  const dropdown = component.querySelector(".to-do-priority-action-dropdown");
  dropdown.classList.remove("display-none");
  const datepicker = component.closest(".to-do").querySelector(".air-datepicker");
  if (datepicker && !datepicker.classList.contains("display-none")) {
    datepicker.classList.add("display-none");
    return;
  }
  const projectLabelDropdown = component.closest(".to-do").querySelector(".to-do-move-action-dropdown");
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
  const todoId = component.closest(".to-do").dataset.id;
  const projectId = component.closest(".project").dataset.id;
  app.state.changeTodoPriority(todoId, projectId, priority);
  const newTodoPriority = createToDoPriority(priority);
  newTodoPriority.classList.remove("display-none");
  const oldTodoPriority = component.closest(".to-do").querySelector(".to-do-priority");
  oldTodoPriority.replaceWith(newTodoPriority);
  component.closest(".to-do-priority-action-dropdown").classList.add("display-none");
  action.classList.add("display-none");
}