import "./to-do-deadline.css"
import deadlineIcon from "./deadline.svg"
import removeIcon from "AssetsShared/remove.svg"
import { addDays, endOfYear, format, interval, isBefore, isFuture, isPast, isToday, isTomorrow, isWithinInterval, isYesterday, startOfToday, startOfYear, subDays, isAfter } from "date-fns";
import app from "Src/index";

export default function createToDoDeadline(deadline) {
  const toDoDeadline = document.createElement("div");
  toDoDeadline.classList.add("to-do-deadline", "display-none");
  const toDoDeadlineIcon = document.createElement("img");
  toDoDeadlineIcon.classList.add("to-do-deadline-icon");
  toDoDeadlineIcon.src = deadlineIcon;
  const toDoDeadlineTitle = document.createElement("p");
  toDoDeadlineTitle.classList.add("to-do-deadline-title");
  if (deadline) {
    toDoDeadlineTitle.textContent = formatDeadline(deadline);
  }
  const toDoDeadlineRemove = document.createElement("button");
  toDoDeadlineRemove.classList.add("to-do-deadline-remove");
  toDoDeadlineRemove.addEventListener("click", (event) => {
    event.stopPropagation();
    removeButtonClicked(toDoDeadline);
  });
  const toDoDeadlineRemoveIcon = document.createElement("img");
  toDoDeadlineRemoveIcon.classList.add("to-do-deadline-remove-icon");
  toDoDeadlineRemoveIcon.src = removeIcon;
  toDoDeadlineRemove.append(toDoDeadlineRemoveIcon);
  toDoDeadline.append(toDoDeadlineIcon, toDoDeadlineTitle, toDoDeadlineRemove);
  return toDoDeadline;
}

function removeButtonClicked(component) {
  const todoId = component.closest(".to-do").dataset.id;
  const projectId = component.closest(".project").dataset.id;
  app.state.removeTodoDeadline(todoId, projectId);

  component.closest(".to-do")
    .querySelector(".to-do-deadline-action")
    .classList.remove("display-none");
  component.closest(".to-do-deadline").classList.add("display-none");
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