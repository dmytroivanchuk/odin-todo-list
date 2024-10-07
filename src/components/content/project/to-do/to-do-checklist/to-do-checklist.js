export default function createToDoChecklist(checklist) {
  const toDoChecklist = document.createElement("div");
  toDoChecklist.classList.add("to-do-checklist");
  checklist.forEach(checklistItem => {
    const toDoChecklistDone = document.createElement("input");
    toDoChecklistDone.type = "checkbox";
    toDoChecklistDone.classList.add("to-do-checklist-done");
    toDoChecklistDone.checked = checklist.done;
    const toDoChecklistTitle = document.createElement("div");
    toDoChecklistTitle.classList.add("to-do-checklist-title");
    toDoChecklistTitle.contentEditable = "true";
    toDoChecklistTitle.textContent = checklist.title;
    toDoChecklist.append(toDoChecklistDone, toDoChecklistTitle);
  });

  return toDoChecklist;
}