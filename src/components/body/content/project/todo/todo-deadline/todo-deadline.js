import "./todo-deadline.css"
import deadlineIcon from "./deadline.svg"
import removeIcon from "AssetsShared/remove.svg"
import { addDays, endOfYear, format, interval, isBefore, isFuture, isPast, isToday, isTomorrow, isWithinInterval, isYesterday, startOfToday, startOfYear, subDays, isAfter } from "date-fns";
import app from "index";

export default function createTodoDeadline(deadline) {
  const todoDeadline = document.createElement("div");
  todoDeadline.classList.add("todo-deadline", "display-none");
  const todoDeadlineIcon = document.createElement("img");
  todoDeadlineIcon.classList.add("todo-deadline-icon");
  todoDeadlineIcon.src = deadlineIcon;
  const todoDeadlineTitle = document.createElement("p");
  todoDeadlineTitle.classList.add("todo-deadline-title");
  if (deadline) {
    todoDeadlineTitle.textContent = formatDeadline(deadline);
  }
  const todoDeadlineRemove = document.createElement("button");
  todoDeadlineRemove.classList.add("todo-deadline-remove");
  todoDeadlineRemove.addEventListener("click", (event) => {
    event.stopPropagation();
    removeButtonClicked(todoDeadline);
  });
  const todoDeadlineRemoveIcon = document.createElement("img");
  todoDeadlineRemoveIcon.classList.add("todo-deadline-remove-icon");
  todoDeadlineRemoveIcon.src = removeIcon;
  todoDeadlineRemove.append(todoDeadlineRemoveIcon);
  todoDeadline.append(todoDeadlineIcon, todoDeadlineTitle, todoDeadlineRemove);
  return todoDeadline;
}

function removeButtonClicked(component) {
  const todoId = component.closest(".todo").dataset.id;
  const projectId = component.closest(".project").dataset.id;
  app.state.removeTodoDeadline(todoId, projectId);

  component.closest(".todo")
    .querySelector(".todo-deadline-action")
    .classList.remove("display-none");
  component.closest(".todo-deadline").classList.add("display-none");
}

function formatDeadline(deadline) {
  if (isToday(deadline)) {
    return "Today";
  } else {
    if (isPast(deadline)) {
      if (isYesterday(deadline)) {
        return "Yesterday";
      } else {
        const twoDaysAgo = subDays(startOfToday(), 2);
        const sixDaysAgo = subDays(startOfToday(), 6);
        const pastSubWeekInterval = interval(sixDaysAgo, twoDaysAgo);
        if (isWithinInterval(deadline, pastSubWeekInterval)) {
          return format(deadline, "'Last' EEEE");
        }
      }
    } else if (isFuture(deadline)) {
      if (isTomorrow(deadline)) {
        return "Tomorrow";
      } else {
        const twoDaysHence = addDays(startOfToday(), 2);
        const sixDaysHence = addDays(startOfToday(), 6);
        const nextSubWeekInterval = interval(twoDaysHence, sixDaysHence);
        if (isWithinInterval(deadline, nextSubWeekInterval)) {
          return format(deadline, "'Next' EEEE");
        }
      }
    }
  }

  const sevenDaysAgo = subDays(startOfToday(), 7);
  const startOfCurrentYear = startOfYear(startOfToday());
  const pastSubYearInterval = interval(startOfCurrentYear, sevenDaysAgo);
  const sevenDaysHence = addDays(startOfToday(), 7);
  const endOfCurrentYear = endOfYear(startOfToday());
  const nextSubYearInterval = interval(sevenDaysHence, endOfCurrentYear);
  if (isWithinInterval(deadline, pastSubYearInterval) || isWithinInterval(deadline, nextSubYearInterval)) {
    return format(deadline, "E, MMM d");
  } else if (isBefore(deadline, startOfCurrentYear) || isAfter(deadline, endOfCurrentYear)) {
    return format(deadline, "d MMM y");
  }
}