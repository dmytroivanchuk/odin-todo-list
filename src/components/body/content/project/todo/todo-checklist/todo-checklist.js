import "./todo-checklist.css";
import createTodoChecklistTitle from "./todo-checklist-title/todo-checklist-title";

export default function createTodoChecklist(checklist) {
  const todoChecklist = document.createElement("div");
  todoChecklist.classList.add("todo-checklist");
  checklist.forEach(checklistItem => {
    const todoChecklistTitle = createTodoChecklistTitle(checklistItem);
    todoChecklist.append(todoChecklistTitle);
  });

  return todoChecklist;
}