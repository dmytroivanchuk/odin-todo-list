import "./to-do-checklist.css";
import removeIcon from "../../../../../assets/remove.svg";

export default function createToDoChecklist(checklist) {
  const toDoChecklist = document.createElement("div");
  toDoChecklist.classList.add("to-do-checklist");
  checklist.forEach(checklistItem => {
    const toDoChecklistTitle = document.createElement("div");
    toDoChecklistTitle.classList.add("to-do-checklist-title");
    const toDoChecklistDone = document.createElement("input");
    toDoChecklistDone.type = "checkbox";
    toDoChecklistDone.classList.add("to-do-checklist-done");
    toDoChecklistDone.checked = checklistItem.done;
    toDoChecklistDone.addEventListener("change", () => {
      if (toDoChecklistDone.checked) {
        toDoChecklistTitleTitle.classList.add("foreground-gray");
      } else {
        toDoChecklistTitleTitle.classList.remove("foreground-gray");
      }
    });

    const toDoChecklistTitleTitle = document.createElement("div");
    toDoChecklistTitleTitle.classList.add("to-do-checklist-title-title");
    toDoChecklistTitleTitle.contentEditable = "true";
    toDoChecklistTitleTitle.textContent = checklistItem.title;
    if (checklistItem.done) {
      toDoChecklistTitleTitle.classList.add("foreground-gray");
    }
    toDoChecklistTitleTitle.addEventListener("focusin", () => {
      toDoChecklistTitle.classList.add("active");
    });
    toDoChecklistTitleTitle.addEventListener("focusout", () => {
      toDoChecklistTitle.classList.remove("active");
    });

    const toDoChecklistRemove = document.createElement("button");
    toDoChecklistRemove.classList.add("to-do-checklist-remove");
    const toDoChecklistRemoveIcon = document.createElement("img");
    toDoChecklistRemoveIcon.classList.add("to-do-checklist-remove-icon");
    toDoChecklistRemoveIcon.src = removeIcon;
    toDoChecklistRemove.append(toDoChecklistRemoveIcon);

    toDoChecklistTitle.append(toDoChecklistDone, toDoChecklistTitleTitle, toDoChecklistRemove);
    toDoChecklist.append(toDoChecklistTitle);
  });

  return toDoChecklist;
}