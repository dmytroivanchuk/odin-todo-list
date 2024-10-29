import "./todo-priority.css"
import priorityLowIcon from "AssetsShared/priority-low.svg"
import priorityMediumIcon from "AssetsShared/priority-medium.svg"
import priorityHighIcon from "AssetsShared/priority-high.svg"
import removeIcon from "AssetsShared/remove.svg"
import app from "index"

export default function createTodoPriority(priority) {
  const todoPriority = document.createElement("div");
  todoPriority.classList.add("todo-priority", "display-none");
  const todoPriorityIcon = document.createElement("img");
  todoPriorityIcon.classList.add("todo-priority-icon");
  switch (priority.name) {
    case "Low":
      todoPriorityIcon.src = priorityLowIcon;
      break;
    case "Medium":
      todoPriorityIcon.src = priorityMediumIcon;
      break;
    case "High":
      todoPriorityIcon.src = priorityHighIcon;
  }

  const todoPriorityTitle = document.createElement("p");
  todoPriorityTitle.classList.add("todo-priority-title");
  todoPriorityTitle.textContent = priority.name;
  const todoPriorityRemove = document.createElement("button");
  todoPriorityRemove.classList.add("todo-priority-remove");
  todoPriorityRemove.addEventListener("click", (event) => {
    event.stopPropagation();
    removeButtonClicked(todoPriorityRemove);
  });
  const todoPriorityRemoveIcon = document.createElement("img");
  todoPriorityRemoveIcon.classList.add("todo-priority-remove-icon");
  todoPriorityRemoveIcon.src = removeIcon;
  todoPriorityRemove.append(todoPriorityRemoveIcon);
  todoPriority.append(todoPriorityIcon, todoPriorityTitle, todoPriorityRemove);
  return todoPriority;
}

function removeButtonClicked(component) {
  const todoId = component.closest(".todo").dataset.id;
  const projectId = component.closest(".project").dataset.id;
  app.state.removeTodoPriority(todoId, projectId);

  component.closest(".todo")
    .querySelector(".todo-priority-action")
    .classList.remove("display-none");
  component.closest(".todo-priority").classList.add("display-none");
}