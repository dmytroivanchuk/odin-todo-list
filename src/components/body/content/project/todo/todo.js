import "./todo.css";
import createTodoTitle from "./todo-title/todo-title";
import createTodoDescription from "./todo-description/todo-description";
import createTodoChecklist from "./todo-checklist/todo-checklist";
import createTodoPriority from "./todo-priority/todo-priority";
import createTodoDeadline from "./todo-deadline/todo-deadline";
import createTodoChecklistAction from "./todo-checklist-action/todo-checklist-action";
import createTodoPriorityAction from "./todo-priority-action/todo-priority-action"
import createTodoDeadlineAction from "./todo-deadline-action/todo-deadline-action";
import createTodoMoveAction from "./todo-move-action/todo-move-action";
import createTodoDeleteAction from "./todo-delete-action/todo-delete-action";
import app from "index";

export default function createTodo(todo) {
  const todoComponent = document.createElement("div");
  todoComponent.classList.add("todo");
  todoComponent.dataset.id = todo.id;

  if (todoComponent.dataset.id === app.state.selectedTodoId) {
    todoComponent.classList.add("selected");
  }

  todoComponent.addEventListener("dblclick", () => {
    if (todoComponent.dataset.id === app.state.expandedTodoId) {
      return;
    }
    initExpandedTodo(todoComponent);
    createExpandedTodo(todo, todoComponent);
  })

  todoComponent.addEventListener("click", (event) => {
    initSelectedTodo(todoComponent, event);
  });

  const todoTitle = createTodoTitle(todo.done, todo.title);
  todoComponent.append(todoTitle);
  return todoComponent;
}

function initExpandedTodo(todoComponent) {
  todoComponent.classList.remove("selected");
  app.state.selectedTodoId = null;
  app.database.saveSelectedTodoId(null);

  const previousExpandedTodo = document.querySelector(`.todo[data-id=${app.state.expandedTodoId}]`);
  if (previousExpandedTodo) {
    previousExpandedTodo.classList.remove("expanded");
  }
  todoComponent.classList.add("expanded");
  const newExpandedTodoId = todoComponent.dataset.id;
  app.state.expandedTodoId = newExpandedTodoId;
  app.database.saveExpandedTodoId(newExpandedTodoId);

  const content = document.querySelector(".content");
  content.classList.add("dimmed");
}

function createExpandedTodo(todo, todoComponent) {
  const todoTitleTitle = todoComponent.querySelector(".todo-title-title");
  todoTitleTitle.contentEditable = "true";
  todoTitleTitle.classList.remove("cursor-default");

  const todoDescription = createTodoDescription(todo.description);
  todoComponent.append(todoDescription);

  const todoActions = document.createElement("div");
  todoActions.classList.add("todo-actions");

  const todoChecklistAction = createTodoChecklistAction();
  const todoPriorityAction = createTodoPriorityAction();
  const todoDeadlineAction = createTodoDeadlineAction();

  const todoChecklist = createTodoChecklist(todo.checklist);
  if (todo.checklist.length === 0) {
    todoChecklistAction.classList.remove("display-none");
  }

  const todoPriority = createTodoPriority(todo.priority);
  if (todo.priority.name != "None") {
    todoPriority.classList.remove("display-none");
  } else {
    todoPriorityAction.classList.remove("display-none");
  }

  const todoDeadline = createTodoDeadline(todo.deadline);
  if (todo.deadline != null) {
    todoDeadline.classList.remove("display-none");
  } else {
    todoDeadlineAction.classList.remove("display-none");
  }

  todoComponent.append(todoChecklist, todoPriority, todoDeadline);
  const todoMoveAction = createTodoMoveAction();
  const todoDeleteAction = createTodoDeleteAction();
  todoActions.append(todoChecklistAction, todoPriorityAction, todoDeadlineAction, todoMoveAction, todoDeleteAction);
  todoComponent.append(todoActions);
}

function initSelectedTodo(todoComponent, event) {
  if (todoComponent.dataset.id === app.state.expandedTodoId) {
    const priorityActionDropdown = todoComponent.querySelector(".todo-priority-action-dropdown");
    if (priorityActionDropdown && !priorityActionDropdown.classList.contains("display-none")) {
      priorityActionDropdown.classList.add("display-none");
      return;
    }
    const datepicker = todoComponent.querySelector(".air-datepicker");
    if (datepicker && !datepicker.classList.contains("display-none")) {
      datepicker.classList.add("display-none");
      return;
    }
    const projectLabelDropdown = todoComponent.querySelector(".todo-move-action-dropdown");
    if (projectLabelDropdown && !projectLabelDropdown.classList.contains("display-none")) {
      projectLabelDropdown.classList.add("display-none");
      return;
    }
    return;
  }

  const todoTitleDone = todoComponent.querySelector(".todo-title-done");
  if (event.target === todoTitleDone) {
    return;
  }
  const previousSelectedTodo = document.querySelector(`.todo[data-id=${app.state.selectedTodoId}]`);
  if (previousSelectedTodo) {
    previousSelectedTodo.classList.remove("selected");
  }
  todoComponent.classList.add("selected");
  const newSelectedTodoId = todoComponent.dataset.id;
  app.state.selectedTodoId = newSelectedTodoId;
  app.database.saveSelectedTodoId(newSelectedTodoId);
}