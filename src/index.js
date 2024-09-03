import "./preflight.css";
import "./index.css";
import Storage from "./model/storage";
import ToDo from "./model/to-do";
import Project from "./model/project";
import List from "./model/list";
import createSidebar from "./components/sidebar/sidebar";
import createSidebarFooter from "./components/sidebar-footer/sidebar-footer";
import inboxIcon from "./inbox.svg";
import circleOutlineIcon from "./circle-outline.svg";
import createContentComponent from "./components/content/content";
import createContentFooter from "./components/content-footer/content-footer";
import createProject from "./components/content/project/project";

const body = document.querySelector("body");
export const storage = new Storage();
const content = createContentComponent();
const startingProject = new Project();
initializeInbox();
initializeStartingProject();
addSidebar();
addContent();
addSidebarFooter();
addContentFooter();
addStartingProject();

function initializeInbox() {
  const inbox = new List();
  inbox.title = "Inbox";
  inbox.icon = inboxIcon;
  storage.addList(inbox);
}

function initializeStartingProject() {
  startingProject.title = "Learn the basics";
  startingProject.description =
    "This project shows you everything you need to know to hit the ground running.";
  startingProject.icon = circleOutlineIcon;

  const doubleClickToDo = new ToDo();
  doubleClickToDo.title = "Double-click this to-do";
  doubleClickToDo.description =
    "You’re looking at a to-do! Complete it by clicking the checkbox on the left of this to-do.";

  const createToDo = new ToDo();
  createToDo.title = "Create a new to-do";
  createToDo.description =
    "Close current to-do by clicking on the blank space outside of sidebar. Then click the plus icon on the bottom of the page.";

  const deadlineToDo = new ToDo();
  deadlineToDo.title = "Set a deadline for this to-do";
  deadlineToDo.description =
    "Click the flag icon on the bottom right of this to-do.";

  const priorityToDo = new ToDo();
  priorityToDo.title = "Set a priority for this to-do";
  priorityToDo.description =
    "Click the exclamation mark icon on the bottom right of this to-do";

  const checklistToDo = new ToDo();
  checklistToDo.title = "Add a checklist for this to-do";
  checklistToDo.description =
    "Click the checklist icon on the bottom right of this to-do";

  const createProjectToDo = new ToDo();
  createProjectToDo.title = "Create a project";
  createProjectToDo.description =
    "On to bigger things! At the bottom of the sidebar, click “+ New Project” to add a project of your own.";

  const doneToDo = new ToDo();
  doneToDo.title = "You're done!";
  doneToDo.description =
    "That’s all you really need to know. Feel free to start adding your own projects and to-dos.";

  [
    doubleClickToDo,
    createToDo,
    deadlineToDo,
    priorityToDo,
    checklistToDo,
    createProjectToDo,
    doneToDo,
  ].forEach((toDo) => {
    toDo.projectID = startingProject.id;
    startingProject.toDos.push(toDo);
  });
  storage.addProject(startingProject);
}

function addSidebar() {
  const sidebar = createSidebar();
  body.append(sidebar);
}

function addContent() {
  body.append(content);
}

function addSidebarFooter() {
  const sidebarFooter = createSidebarFooter();
  body.append(sidebarFooter);
}

function addContentFooter() {
  const contentFooter = createContentFooter();
  body.append(contentFooter);
}

function addStartingProject() {
  const project = createProject(startingProject.id);
  content.append(project);
}
