import checklistIcon from "../../../../../assets/checklist.svg"

export default function createToDoChecklistAction(toDoId, projectId) {
  const toDoChecklist = document.createElement("div");
  toDoChecklist.classList.add("to-do-checklist-action");
  toDoChecklist.addEventListener("click", () => {
    
  });
  const toDoChecklistIcon = document.createElement("img");
  toDoChecklistIcon.src = checklistIcon;
  toDoChecklist.append(toDoChecklistIcon);
  return toDoChecklist;
}