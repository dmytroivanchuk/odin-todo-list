import "./to-do-title.css";

export default function createToDoTitleComponent({ done, title }) {
  const toDoTitleContainer = document.createElement("div");
  toDoTitleContainer.classList.add("to-do-title-container");
  const toDoDone = document.createElement("input");
  toDoDone.type = "checkbox";
  toDoDone.id = "to-do-done";
  toDoDone.checked = done;
  const toDoTitle = document.createElement("label");
  toDoTitle.classList.add("to-do-title");
  toDoTitle.htmlFor = toDoDone.id;
  toDoTitle.textContent = title;
  toDoTitleContainer.append(toDoDone, toDoTitle);
  return toDoTitleContainer;
}
