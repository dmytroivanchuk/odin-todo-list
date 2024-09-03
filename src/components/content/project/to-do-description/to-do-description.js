import { storage } from "../../../../index";
import "./to-do-description.css";

export default function createToDoDescription(toDoId, projectId) {
  const toDo = storage.getToDo(toDoId, projectId);
  const toDoDescription = document.createElement("div");
  toDoDescription.classList.add("to-do-description");
  toDoDescription.contentEditable = "true";
  toDoDescription.dataset.placeholder = "Notes";
  toDoDescription.textContent = toDo.description;
  return toDoDescription;
}
