import { storage } from "../../../../index";
import createToDo from "../to-do/to-do";
import "./to-do-title.css";

export default function createToDoTitle(toDoId, projectId) {
  const toDo = storage.getToDo(toDoId, projectId);
  const toDoTitle = document.createElement("div");
  toDoTitle.classList.add("to-do-title");
  const toDoTitleDone = document.createElement("input");
  toDoTitleDone.classList.add("to-do-title-done");
  toDoTitleDone.type = "checkbox";
  toDoTitleDone.checked = toDo.done;
  const toDoTitleTitle = document.createElement("label");
  toDoTitleTitle.classList.add("to-do-title-title");
  toDoTitleTitle.textContent = toDo.title;
  toDoTitleTitle.addEventListener("click", () => {
    const titles = document.querySelectorAll(".to-do-title");
    titles.forEach((title) => {
      if (title.classList.contains("background-blue")) {
        title.classList.remove("background-blue");
      }
    });
    toDoTitle.classList.add("background-blue");
  });
  toDoTitle.addEventListener("dblclick", () => {
  });
  toDoTitle.append(toDoTitleDone, toDoTitleTitle);
  return toDoTitle;
}
