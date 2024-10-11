import Project from "Model/Project";
import Todo from "Model/Todo";
import Priority from "Model/Priority";
import ChecklistItem from "Model/ChecklistItem";
import circleIcon from "AssetsShared/circle.svg"

export default function createStartingProject() {
  const startingProject = new Project();
  startingProject.title = "Learn the basics";
  startingProject.description =
    "This project shows you everything you need to know to hit the ground running.";
  startingProject.icon = circleIcon;

  const doubleClickToDo = new Todo();
  doubleClickToDo.title = "Double-click this to-do";
  doubleClickToDo.description =
    "You’re looking at a to-do! Complete it by clicking the checkbox on the left of this to-do. You’re looking at a to-do! Complete it by clicking the checkbox on the left of this to-do.";
  const doubleClickChecklistItem = new ChecklistItem();
  doubleClickChecklistItem.title = "Just double-click it."
  doubleClickChecklistItem.done = true;
  const finishChecklistItem = new ChecklistItem();
  finishChecklistItem.title = "You've successfully finished it.";
  doubleClickToDo.checklist = [doubleClickChecklistItem, finishChecklistItem];
  doubleClickToDo.priority = Priority.High;
  doubleClickToDo.deadline = "Thu, Oct 10"

  const createToDo = new Todo();
  createToDo.title = "Create a new to-do";
  createToDo.description =
    "Close current to-do by clicking on the blank space outside of sidebar. Then click the plus icon on the bottom of the page.";

  const deadlineToDo = new Todo();
  deadlineToDo.title = "Set a deadline for this to-do";
  deadlineToDo.description =
    "Click the flag icon on the bottom right of this to-do.";

  const priorityToDo = new Todo();
  priorityToDo.title = "Set a priority for this to-do";
  priorityToDo.description =
    "Click the exclamation mark icon on the bottom right of this to-do";

  const checklistToDo = new Todo();
  checklistToDo.title = "Add a checklist for this to-do";
  checklistToDo.description =
    "Click the checklist icon on the bottom right of this to-do";

  const createProjectToDo = new Todo();
  createProjectToDo.title = "Create a project";
  createProjectToDo.description =
    "On to bigger things! At the bottom of the sidebar, click “+ New Project” to add a project of your own.";

  const doneToDo = new Todo();
  doneToDo.title = "You're done!";
  doneToDo.description =
    "That’s all you really need to know. Feel free to start adding your own projects and to-dos.";

  const toDos = [
    doubleClickToDo,
    createToDo,
    deadlineToDo,
    priorityToDo,
    checklistToDo,
    createProjectToDo,
    doneToDo,
  ]
  
  toDos.forEach((toDo) => {
    toDo.projectId = startingProject.id;
  });
  startingProject.toDos = toDos;
  
  return startingProject;
}