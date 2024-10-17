import "./to-do-description.css";

export default function createToDoDescription(description) {
  const toDoDescription = document.createElement("div");
  toDoDescription.classList.add("to-do-description");
  toDoDescription.contentEditable = "true";
  toDoDescription.dataset.placeholder = "Notes";
  toDoDescription.textContent = description;
  return toDoDescription;
}
