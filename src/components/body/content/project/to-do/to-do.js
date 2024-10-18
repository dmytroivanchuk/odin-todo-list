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
    initExpandedTodo(toDoComponent);
    createExpandedTodo(toDo, toDoComponent);
  })

  toDoComponent.addEventListener("click", () => {
    initSelectedTodo(toDoComponent);
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

  if (toDo.checklist.length > 0) {
    const toDoChecklist = createToDoChecklist(toDo.checklist);
    toDoComponent.append(toDoChecklist);
  } else {
    const toDoChecklistAction = createToDoChecklistAction();
    toDoActions.append(toDoChecklistAction);
  }

  if (toDo.priority.name != "None") {
    const toDoPriority = createToDoPriority(toDo.priority);
    toDoComponent.append(toDoPriority);
  } else {
    const toDoPriorityAction = createToDoPriorityAction();
    toDoActions.append(toDoPriorityAction);
  }

  if (toDo.deadline != "") {
    const toDoDeadline = createToDoDeadline(toDo.deadline);
    toDoComponent.append(toDoDeadline);
  } else {
    const toDoDeadlineAction = createToDoDeadlineAction();
    toDoActions.append(toDoDeadlineAction);
  }

  const toDoMoveAction = createToDoMoveAction();
  const toDoDeleteAction = createToDoDeleteAction();
  toDoActions.append(toDoMoveAction, toDoDeleteAction);
  toDoComponent.append(toDoActions);
}

function initSelectedTodo(toDoComponent) {
  const previousSelectedTodo = document.querySelector(`.to-do[data-id=${app.state.selectedTodoId}]`);
  if (previousSelectedTodo) {
    previousSelectedTodo.classList.remove("selected");
  }
  toDoComponent.classList.add("selected");
  const newSelectedTodoId = toDoComponent.dataset.id;
  app.state.selectedTodoId = newSelectedTodoId;
  app.database.saveSelectedTodoId(newSelectedTodoId);
}