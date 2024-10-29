import "./todo-checklist-title.css"
import removeIcon from "AssetsShared/remove.svg";
import app from "index"

export default function createTodoChecklistTitle(checklistItem) {
  const todoChecklistTitle = document.createElement("div");
  todoChecklistTitle.classList.add("todo-checklist-title");
  todoChecklistTitle.dataset.id = checklistItem.id;
  const todoChecklistDone = document.createElement("input");
  todoChecklistDone.type = "checkbox";
  todoChecklistDone.classList.add("todo-checklist-done");
  todoChecklistDone.checked = checklistItem.done;

  todoChecklistDone.addEventListener("change", () => {
    doneChanged(todoChecklistDone, todoChecklistTitleTitle);
  });

  const todoChecklistTitleTitle = document.createElement("div");
  todoChecklistTitleTitle.classList.add("todo-checklist-title-title");
  todoChecklistTitleTitle.contentEditable = "true";
  todoChecklistTitleTitle.textContent = checklistItem.title;
  if (checklistItem.done) {
    todoChecklistTitleTitle.classList.add("foreground-gray");
  }
  todoChecklistTitleTitle.addEventListener("input", () => {
    titleChanged(todoChecklistTitleTitle);
  });
  todoChecklistTitleTitle.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      const checklistItemId = todoChecklistTitleTitle.closest(".todo-checklist-title").dataset.id;
      const todoId = todoChecklistTitleTitle.closest(".todo").dataset.id;
      const projectId = todoChecklistTitleTitle.closest(".project").dataset.id;
      const newChecklistItem = app.state.createChecklistItem(checklistItemId, todoId, projectId);
      const newTodoChecklistTitle = createTodoChecklistTitle(newChecklistItem);
      todoChecklistTitle.insertAdjacentElement("afterend", newTodoChecklistTitle);
      newTodoChecklistTitle.querySelector(".todo-checklist-title-title").focus();
    }
  })

  const todoChecklistRemove = document.createElement("button");
  todoChecklistRemove.classList.add("todo-checklist-remove");
  todoChecklistRemove.addEventListener("click", (event) => {
    event.stopPropagation();
    removeButtonClicked(todoChecklistRemove);
  })
  const todoChecklistRemoveIcon = document.createElement("img");
  todoChecklistRemoveIcon.classList.add("todo-checklist-remove-icon");
  todoChecklistRemoveIcon.src = removeIcon;
  todoChecklistRemove.append(todoChecklistRemoveIcon);

  todoChecklistTitle.append(todoChecklistDone, todoChecklistTitleTitle, todoChecklistRemove);
  return todoChecklistTitle;
}

function doneChanged(checkbox, title) {
  const checklistItemId = checkbox.closest(".todo-checklist-title").dataset.id;
  const todoId = checkbox.closest(".todo").dataset.id;
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
  const checklistItemId = component.closest(".todo-checklist-title").dataset.id;
  const todoId = component.closest(".todo").dataset.id;
  const projectId = component.closest(".project").dataset.id;
  app.state.changeChecklistItemTitle(checklistItemId, todoId, projectId, component.textContent);
}

function removeButtonClicked(component) {
  const checklistItem = component.closest(".todo-checklist-title");
  const checklistItemId = checklistItem.dataset.id;
  const todoId = component.closest(".todo").dataset.id;
  const projectId = component.closest(".project").dataset.id;
  app.state.removeChecklistItem(checklistItemId, todoId, projectId);

  const checklist = component.closest(".todo-checklist");
  checklistItem.remove();
  if (checklist.children.length === 0) {
    checklist.closest(".todo")
      .querySelector(".todo-checklist-action")
      .classList.remove("display-none");
  }
}