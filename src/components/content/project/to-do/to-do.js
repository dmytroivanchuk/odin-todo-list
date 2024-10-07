import createToDoTitle from "./to-do-title/to-do-title";
import "./to-do.css";
import createToDoDescription from "./to-do-description/to-do-description";
import { storage } from "../../../..";
import createToDoChecklist from "./to-do-checklist/to-do-checklist";
import createToDoChecklistAction from "./to-do-checklist-action/to-do-checklist-action";
import createToDoPriority from "./to-do-priority/to-do-priority";
import createToDoPriorityAction from "./to-do-priority-action/to-do-priority-action"
import createToDoDeadline from "./to-do-deadline/to-do-deadline";
import createToDoDeadlineAction from "./to-do-deadline-action/to-do-deadline-action";
import createToDoMoveAction from "./to-do-move-action/to-do-move-action";
import createToDoDeleteAction from "./to-do-delete-action/to-do-delete-action";

export default function createToDo(toDoId, projectId) {
  const toDo = storage.getToDo(toDoId, projectId);
  const toDoComponent = document.createElement("div");
  toDoComponent.classList.add("to-do");
  toDoComponent.addEventListener("dblclick", () => {
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

    if (toDo.priority != "None") {
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
  })
  const toDoTitle = createToDoTitle(toDo.done, toDo.title);
  toDoComponent.append(toDoTitle);
  return toDoComponent;
}
