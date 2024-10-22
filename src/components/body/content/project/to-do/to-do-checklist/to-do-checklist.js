import "./to-do-checklist.css";
import createTodoChecklistTitle from "./to-do-checklist-title/to-do-checklist-title";

export default function createToDoChecklist(checklist) {
  const toDoChecklist = document.createElement("div");
  toDoChecklist.classList.add("to-do-checklist");
  checklist.forEach(checklistItem => {
    const toDoChecklistTitle = createTodoChecklistTitle(checklistItem);
    toDoChecklist.append(toDoChecklistTitle);
  });

  return toDoChecklist;
}