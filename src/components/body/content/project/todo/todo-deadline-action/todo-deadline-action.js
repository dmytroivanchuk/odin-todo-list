import "./todo-deadline-action.css"
import createTodoDeadline from "../todo-deadline/todo-deadline";
import deadlineActionIcon from "./deadline-action.svg"
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import localeEn from 'air-datepicker/locale/en';
import app from "index"

export default function createTodoDeadlineAction() {
  const todoDeadlineAction = document.createElement("button");
  todoDeadlineAction.classList.add("todo-deadline-action", "display-none");
  todoDeadlineAction.setAttribute("title", "Deadline");
  todoDeadlineAction.addEventListener("click", (event) => {
    event.stopPropagation();
    deadlineActionClicked(todoDeadlineAction);
  });
  new AirDatepicker(todoDeadlineAction, {
    locale: localeEn,
    classes: "display-none position-absolute",
    onSelect({ date, datepicker }) {
      dateClicked(date, todoDeadlineAction, datepicker);
    },
  });
  const todoDeadlineActionIcon = document.createElement("img");
  todoDeadlineActionIcon.classList.add("todo-deadline-action-icon");
  todoDeadlineActionIcon.src = deadlineActionIcon;
  todoDeadlineAction.append(todoDeadlineActionIcon);
  return todoDeadlineAction;
}

function deadlineActionClicked(component) {
  const datepicker = component.querySelector(".air-datepicker");
  datepicker.classList.remove("display-none");
  const priorityActionDropdown = component.closest(".todo").querySelector(".todo-priority-action-dropdown");
  if (priorityActionDropdown && !priorityActionDropdown.classList.contains("display-none")) {
    priorityActionDropdown.classList.add("display-none");
    return;
  }
  const projectLabelDropdown = component.closest(".todo").querySelector(".todo-move-action-dropdown");
  if (projectLabelDropdown && !projectLabelDropdown.classList.contains("display-none")) {
    projectLabelDropdown.classList.add("display-none");
    return;
  }
}

function dateClicked(date, action, datepicker) {
  datepicker.selectedDates = [];
  const todoId = action.closest(".todo").dataset.id;
  const projectId = action.closest(".project").dataset.id;
  app.state.changeTodoDeadline(todoId, projectId, date);
  const newTodoDeadline = createTodoDeadline(date);
  newTodoDeadline.classList.remove("display-none");
  const oldTodoDeadline = action.closest(".todo").querySelector(".todo-deadline");
  oldTodoDeadline.replaceWith(newTodoDeadline);
  action.querySelector(".air-datepicker").classList.add("display-none");
  action.classList.add("display-none");
}