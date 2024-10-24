import "./to-do-deadline-action.css"
import createToDoDeadline from "../to-do-deadline/to-do-deadline";
import deadlineActionIcon from "./deadline-action.svg"
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import localeEn from 'air-datepicker/locale/en';
import app from "Src/index"

export default function createToDoDeadlineAction() {
  const toDoDeadlineAction = document.createElement("button");
  toDoDeadlineAction.classList.add("to-do-deadline-action", "display-none");
  toDoDeadlineAction.setAttribute("title", "Deadline");
  toDoDeadlineAction.addEventListener("click", (event) => {
    event.stopPropagation();
    deadlineActionClicked(toDoDeadlineAction);
  });
  new AirDatepicker(toDoDeadlineAction, {
    locale: localeEn,
    classes: "display-none position-absolute",
    onSelect({ date }) {
      dateClicked(date, toDoDeadlineAction);
    },
  });
  const toDoDeadlineActionIcon = document.createElement("img");
  toDoDeadlineActionIcon.classList.add("to-do-deadline-action-icon");
  toDoDeadlineActionIcon.src = deadlineActionIcon;
  toDoDeadlineAction.append(toDoDeadlineActionIcon);
  return toDoDeadlineAction;
}

function deadlineActionClicked(component) {
  const datepicker = component.querySelector(".air-datepicker");
  datepicker.classList.remove("display-none");
}

function dateClicked(date, action) {
  const todoId = action.closest(".to-do").dataset.id;
  const projectId = action.closest(".project").dataset.id;
  app.state.changeTodoDeadline(todoId, projectId, date);
  const newTodoDeadline = createToDoDeadline(date);
  newTodoDeadline.classList.remove("display-none");
  const oldTodoDeadline = action.closest(".to-do").querySelector(".to-do-deadline");
  oldTodoDeadline.replaceWith(newTodoDeadline);
  action.querySelector(".air-datepicker").classList.add("display-none");
  action.classList.add("display-none");
}