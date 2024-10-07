import { storage } from "../../../../../index";
import "./to-do-title.css";

export default function createToDoTitle(done, title) {
  const toDoTitle = document.createElement("div");
  toDoTitle.classList.add("to-do-title");
  const toDoTitleDone = document.createElement("input");
  toDoTitleDone.classList.add("to-do-title-done");
  toDoTitleDone.type = "checkbox";
  toDoTitleDone.checked = done;
  const toDoTitleTitle = document.createElement("label");
  toDoTitleTitle.classList.add("to-do-title-title");
  toDoTitleTitle.textContent = title;
  toDoTitleTitle.addEventListener("click", () => {
    const titles = document.querySelectorAll(".to-do-title");
    titles.forEach((title) => {
      if (title.classList.contains("background-blue")) {
        title.classList.remove("background-blue");
      }
    });
    toDoTitle.classList.add("background-blue");
  });
  toDoTitle.append(toDoTitleDone, toDoTitleTitle);
  return toDoTitle;
}
