import "./to-do-priority.css"
import priorityLowIcon from "AssetsShared/priority-low.svg"
import priorityMediumIcon from "AssetsShared/priority-medium.svg"
import priorityHighIcon from "AssetsShared/priority-high.svg"
import removeIcon from "AssetsShared/remove.svg"
import app from "Src/index"

export default function createToDoPriority(priority) {
  const toDoPriority = document.createElement("div");
  toDoPriority.classList.add("to-do-priority", "display-none");
  const toDoPriorityIcon = document.createElement("img");
  toDoPriorityIcon.classList.add("to-do-priority-icon");
  switch (priority.name) {
    case "Low":
      toDoPriorityIcon.src = priorityLowIcon;
      break;
    case "Medium":
      toDoPriorityIcon.src = priorityMediumIcon;
      break;
    case "High":
      toDoPriorityIcon.src = priorityHighIcon;
  }

  const toDoPriorityTitle = document.createElement("p");
  toDoPriorityTitle.classList.add("to-do-priority-title");
  toDoPriorityTitle.textContent = priority.name;
  const toDoPriorityRemove = document.createElement("button");
  toDoPriorityRemove.classList.add("to-do-priority-remove");
  toDoPriorityRemove.addEventListener("click", (event) => {
    event.stopPropagation();
    removeButtonClicked(toDoPriorityRemove);
  });
  const toDoPriorityRemoveIcon = document.createElement("img");
  toDoPriorityRemoveIcon.classList.add("to-do-priority-remove-icon");
  toDoPriorityRemoveIcon.src = removeIcon;
  toDoPriorityRemove.append(toDoPriorityRemoveIcon);
  toDoPriority.append(toDoPriorityIcon, toDoPriorityTitle, toDoPriorityRemove);
  return toDoPriority;
}

function removeButtonClicked(component) {
  const todoId = component.closest(".to-do").dataset.id;
  const projectId = component.closest(".project").dataset.id;
  app.state.removeTodoPriority(todoId, projectId);

  component.closest(".to-do")
    .querySelector(".to-do-priority-action")
    .classList.remove("display-none");
  component.closest(".to-do-priority").classList.add("display-none");
}