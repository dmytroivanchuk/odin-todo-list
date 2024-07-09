import "./to-do-title.css";

export default function createToDoTitleComponent({ done, title }) {
  const toDoTitleContainer = document.createElement("div");
  toDoTitleContainer.classList.add("to-do-title-container");
  const toDoDone = document.createElement("input");
  toDoDone.classList.add("to-do-done");
  toDoDone.type = "checkbox";
  toDoDone.checked = done;
  const toDoTitle = document.createElement("label");
  toDoTitle.classList.add("to-do-title");
  toDoTitle.textContent = title;
  toDoTitle.addEventListener("click", () => {
    const containers = document.querySelectorAll(".to-do-title-container");
    containers.forEach((container) => {
      if (container.classList.contains("background-blue")) {
        container.classList.remove("background-blue");
      }
    });
    toDoTitleContainer.classList.add("background-blue");
  });
  toDoTitleContainer.append(toDoDone, toDoTitle);
  return toDoTitleContainer;
}
