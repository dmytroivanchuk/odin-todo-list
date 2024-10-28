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
    "You’re looking at a to-do! Complete it by clicking the checkbox on the left.";

  const createToDo = new Todo();
  createToDo.title = "Create a new to-do";
  createToDo.description =
    `Click the “+ New Todo“ button at the bottom of the page.`;

  const checklistToDo = new Todo();
  checklistToDo.title = "Go step by step with checklists";
  checklistToDo.description =
    `Break a to-do down into smaller steps by adding a checklist. You could use it to track a daily routine, pack a suitcase, make a grocery list, and so on.
      Click the checklist icon below to add a checklist. To remove checklist item, hover over it and click delete icon.`;
  const checklistItem1 = new ChecklistItem();
  checklistItem1.title = "Preheat the oven to 350ºF (175ºC)"
  const checklistItem2 = new ChecklistItem();
  checklistItem2.title = "Mix 1 cup of peanut butter, 1 cup of white sugar, and 1 egg with an electric mixer until it’s smooth and creamy";
  const checklistItem3 = new ChecklistItem();
  checklistItem3.title = "Arrange small balls on a baking sheet and flatten them with a fork, making a criss-cross pattern"
  checklistItem3.done = true;
  const checklistItem4 = new ChecklistItem();
  checklistItem4.title = "Bake in the oven for 10 minutes, then cool for 2 minutes"
  checklistItem4.done = true;
  checklistToDo.checklist = [checklistItem1, checklistItem2, checklistItem3, checklistItem4];

  const deadlineToDo = new Todo();
  deadlineToDo.title = "Set a deadline so you won’t forget";
  deadlineToDo.description =
    "For those to-dos you absolutely cannot miss, setting deadlines will give you peace of mind. Click the flag icon below and pick your date. To delete an existing deadline, hover over it and click delete icon.";
  deadlineToDo.deadline = new Date();

  const priorityToDo = new Todo();
  priorityToDo.title = "Set a priority";
  priorityToDo.description =
    "Click the priority icon below to add priority. To delete an existing priority, hover over it and click delete icon.";
  priorityToDo.priority = Priority.High;

  const moveToDo = new Todo();
  moveToDo.title = "Move this todo to another project";
  moveToDo.description =
    "Click the move icon below to move this todo to a different project.";

  const deleteToDo = new Todo();
  deleteToDo.title = "Delete this todo";
  deleteToDo.description =
    "Click the trash icon below to delete this todo.";

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
    checklistToDo,
    deadlineToDo,
    priorityToDo,
    moveToDo,
    deleteToDo,
    createProjectToDo,
    doneToDo,
  ]

  toDos.forEach((toDo) => {
    toDo.projectId = startingProject.id;
  });
  startingProject.toDos = toDos;

  return startingProject;
}