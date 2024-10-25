import "./to-do.css";
import createToDoTitle from "./to-do-title/to-do-title";
import createToDoDescription from "./to-do-description/to-do-description";
import createToDoChecklist from "./to-do-checklist/to-do-checklist";
import createToDoPriority from "./to-do-priority/to-do-priority";
import createToDoDeadline from "./to-do-deadline/to-do-deadline";
import createToDoChecklistAction from "./to-do-checklist-action/to-do-checklist-action";
import createToDoPriorityAction from "./to-do-priority-action/to-do-priority-action"
import createToDoDeadlineAction from "./to-do-deadline-action/to-do-deadline-action";
import createToDoMoveAction from "./to-do-move-action/to-do-move-action";
import createToDoDeleteAction from "./to-do-delete-action/to-do-delete-action";
import app from "Src/index";

export default function createToDo(toDo) {
  const toDoComponent = document.createElement("div");
  toDoComponent.classList.add("to-do");
  toDoComponent.dataset.id = toDo.id;

  if (toDoComponent.dataset.id === app.state.selectedTodoId) {
    toDoComponent.classList.add("selected");
  }

  toDoComponent.addEventListener("dblclick", () => {
    if (toDoComponent.dataset.id === app.state.expandedTodoId) {
      return;
    }
    initExpandedTodo(toDoComponent);
    createExpandedTodo(toDo, toDoComponent);
  })

  toDoComponent.addEventListener("click", (event) => {
    initSelectedTodo(toDoComponent, event);
  });

  const toDoTitle = createToDoTitle(toDo.done, toDo.title);
  toDoComponent.append(toDoTitle);
  return toDoComponent;
}

function initExpandedTodo(toDoComponent) {
  toDoComponent.classList.remove("selected");
  app.state.selectedTodoId = null;
  app.database.saveSelectedTodoId(null);

  const previousExpandedTodo = document.querySelector(`.to-do[data-id=${app.state.expandedTodoId}]`);
  if (previousExpandedTodo) {
    previousExpandedTodo.classList.remove("expanded");
  }
  toDoComponent.classList.add("expanded");
  const newExpandedTodoId = toDoComponent.dataset.id;
  app.state.expandedTodoId = newExpandedTodoId;
  app.database.saveExpandedTodoId(newExpandedTodoId);

  const content = document.querySelector(".content");
  content.classList.add("dimmed");
}

function createExpandedTodo(toDo, toDoComponent) {
  const todoTitleTitle = toDoComponent.querySelector(".to-do-title-title");
  todoTitleTitle.contentEditable = "true";
  todoTitleTitle.classList.remove("cursor-default");

  const toDoDescription = createToDoDescription(toDo.description);
  toDoComponent.append(toDoDescription);

  const toDoActions = document.createElement("div");
  toDoActions.classList.add("to-do-actions");

  const toDoChecklistAction = createToDoChecklistAction();
  const toDoPriorityAction = createToDoPriorityAction();
  const toDoDeadlineAction = createToDoDeadlineAction();

  const toDoChecklist = createToDoChecklist(toDo.checklist);
  if (toDo.checklist.length === 0) {
    toDoChecklistAction.classList.remove("display-none");
  }

  const toDoPriority = createToDoPriority(toDo.priority);
  if (toDo.priority.name != "None") {
    toDoPriority.classList.remove("display-none");
  } else {
    toDoPriorityAction.classList.remove("display-none");
  }

  const toDoDeadline = createToDoDeadline(toDo.deadline);
  if (toDo.deadline != null) {
    toDoDeadline.classList.remove("display-none");
  } else {
    toDoDeadlineAction.classList.remove("display-none");
  }

  toDoComponent.append(toDoChecklist, toDoPriority, toDoDeadline);
  const toDoMoveAction = createToDoMoveAction();
  const toDoDeleteAction = createToDoDeleteAction();
  toDoActions.append(toDoChecklistAction, toDoPriorityAction, toDoDeadlineAction, toDoMoveAction, toDoDeleteAction);
  toDoComponent.append(toDoActions);
}

function initSelectedTodo(toDoComponent, event) {
  if (toDoComponent.dataset.id === app.state.expandedTodoId) {
    const dropdown = toDoComponent.querySelector(".to-do-priority-action-dropdown");
    if (dropdown && !dropdown.classList.contains("display-none")) {
      dropdown.classList.add("display-none");
    }
    const datepicker = toDoComponent.querySelector(".air-datepicker");
    if (datepicker && !datepicker.classList.contains("display-none")) {
      datepicker.classList.add("display-none");
    }
    return;
  }

  const todoTitleDone = toDoComponent.querySelector(".to-do-title-done");
  if (event.target === todoTitleDone) {
    return;
  }
  const previousSelectedTodo = document.querySelector(`.to-do[data-id=${app.state.selectedTodoId}]`);
  if (previousSelectedTodo) {
    previousSelectedTodo.classList.remove("selected");
  }
  toDoComponent.classList.add("selected");
  const newSelectedTodoId = toDoComponent.dataset.id;
  app.state.selectedTodoId = newSelectedTodoId;
  app.database.saveSelectedTodoId(newSelectedTodoId);
}