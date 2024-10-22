import "./to-do-checklist-title.css"
import removeIcon from "AssetsShared/remove.svg";
import app from "Src/index"

export default function createTodoChecklistTitle(checklistItem) {
  const toDoChecklistTitle = document.createElement("div");
  toDoChecklistTitle.classList.add("to-do-checklist-title");
  toDoChecklistTitle.dataset.id = checklistItem.id;
  const toDoChecklistDone = document.createElement("input");
  toDoChecklistDone.type = "checkbox";
  toDoChecklistDone.classList.add("to-do-checklist-done");
  toDoChecklistDone.checked = checklistItem.done;

  toDoChecklistDone.addEventListener("change", () => {
    doneChanged(toDoChecklistDone, toDoChecklistTitleTitle);
  });

  const toDoChecklistTitleTitle = document.createElement("div");
  toDoChecklistTitleTitle.classList.add("to-do-checklist-title-title");
  toDoChecklistTitleTitle.contentEditable = "true";
  toDoChecklistTitleTitle.textContent = checklistItem.title;
  if (checklistItem.done) {
    toDoChecklistTitleTitle.classList.add("foreground-gray");
  }
  toDoChecklistTitleTitle.addEventListener("input", () => {
    titleChanged(toDoChecklistTitleTitle);
  });
  toDoChecklistTitleTitle.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      const checklistItemId = toDoChecklistTitleTitle.closest(".to-do-checklist-title").dataset.id;
      const todoId = toDoChecklistTitleTitle.closest(".to-do").dataset.id;
      const projectId = toDoChecklistTitleTitle.closest(".project").dataset.id;
      const newChecklistItem = app.state.createChecklistItem(checklistItemId, todoId, projectId);
      const newToDoChecklistTitle = createTodoChecklistTitle(newChecklistItem);
      toDoChecklistTitle.insertAdjacentElement("afterend", newToDoChecklistTitle);
      newToDoChecklistTitle.querySelector(".to-do-checklist-title-title").focus();
    }
  })

  const toDoChecklistRemove = document.createElement("button");
  toDoChecklistRemove.classList.add("to-do-checklist-remove");
  toDoChecklistRemove.addEventListener("click", (event) => {
    event.stopPropagation();
    removeButtonClicked(toDoChecklistRemove);
  })
  const toDoChecklistRemoveIcon = document.createElement("img");
  toDoChecklistRemoveIcon.classList.add("to-do-checklist-remove-icon");
  toDoChecklistRemoveIcon.src = removeIcon;
  toDoChecklistRemove.append(toDoChecklistRemoveIcon);

  toDoChecklistTitle.append(toDoChecklistDone, toDoChecklistTitleTitle, toDoChecklistRemove);
  return toDoChecklistTitle;
}

function doneChanged(checkbox, title) {
  const checklistItemId = checkbox.closest(".to-do-checklist-title").dataset.id;
  const todoId = checkbox.closest(".to-do").dataset.id;
  const projectId = checkbox.closest(".project").dataset.id;
  if (checkbox.checked) {
    title.classList.add("foreground-gray");
    app.state.checkChecklistItem(checklistItemId, todoId, projectId, true);
  } else {
    title.classList.remove("foreground-gray");
    app.state.checkChecklistItem(checklistItemId, todoId, projectId, false);
  }
}

function titleChanged(component) {
  const checklistItemId = component.closest(".to-do-checklist-title").dataset.id;
  const todoId = component.closest(".to-do").dataset.id;
  const projectId = component.closest(".project").dataset.id;
  app.state.changeChecklistItemTitle(checklistItemId, todoId, projectId, component.textContent);
}

function removeButtonClicked(component) {
  const checklistItem = component.closest(".to-do-checklist-title");
  const checklistItemId = checklistItem.dataset.id;
  const todoId = component.closest(".to-do").dataset.id;
  const projectId = component.closest(".project").dataset.id;
  app.state.removeChecklistItem(checklistItemId, todoId, projectId);

  const checklist = component.closest(".to-do-checklist");
  checklistItem.remove();
  if (checklist.children.length === 0) {
    checklist.closest(".to-do")
      .querySelector(".to-do-checklist-action")
      .classList.remove("display-none");
  }
}