import "./to-do-title.css";

export default function createToDoTitle(done, title) {
  const toDoTitle = document.createElement("div");
  toDoTitle.classList.add("to-do-title");
  const toDoTitleDone = document.createElement("input");
  toDoTitleDone.classList.add("to-do-title-done");
  toDoTitleDone.type = "checkbox";
  toDoTitleDone.checked = done;
  const toDoTitleTitle = document.createElement("div");
  toDoTitleTitle.classList.add("to-do-title-title");
  toDoTitleTitle.classList.add("cursor-default");
  toDoTitleTitle.dataset.placeholder = "New To-Do";
  toDoTitleTitle.textContent = title;
  toDoTitle.append(toDoTitleDone, toDoTitleTitle);
  return toDoTitle;
}
