import "./preflight.css";
import "./index.css";
import Storage from "./model/storage";
import ToDo from "./model/to-do";
import Project from "./model/project";
import List from "./model/list";
import createSidebarComponent from "./components/sidebar/sidebar";
import createSidebarFooterComponent from "./components/sidebar-footer/sidebar-footer";
import inboxIcon from "./inbox.svg";
import circleOutlineIcon from "./circle-outline.svg";
import createContentComponent from "./components/content/content";
import createContentFooterComponent from "./components/content-footer/content-footer";

const body = document.querySelector("body");
const storage = new Storage();
initializeInbox();
initializeStartingProject();
addSidebar();
addContent();
addSidebarFooter();
addContentFooter();

function initializeInbox() {
  const inbox = new List();
  inbox.title = "Inbox";
  inbox.icon = inboxIcon;
  storage.addList(inbox);
}

function initializeStartingProject() {
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

  const startingProject = new Project();
  startingProject.title = "Learn the basics";
  startingProject.description =
    "This project shows you everything you need to know to hit the ground running.";
  startingProject.icon = circleOutlineIcon;
  startingProject.toDos = [
    doubleClickToDo,
    createToDo,
    deadlineToDo,
    priorityToDo,
    checklistToDo,
    createProjectToDo,
    doneToDo,
  ];
  storage.addProject(startingProject);
}

function addSidebar() {
  const listsInfo = storage.getLists().map((list) => ({
    title: list.title,
    icon: list.icon,
    toDosCount: list.toDosCount,
  }));
  const projectsInfo = storage
    .getProjects()
    .map((project) => ({ title: project.title, icon: project.icon }));

  const sidebar = createSidebarComponent({ listsInfo, projectsInfo });
  body.append(sidebar);
}

function addContent() {
  const content = createContentComponent();
  body.append(content);
}

function addSidebarFooter() {
  const sidebarFooter = createSidebarFooterComponent();
  body.append(sidebarFooter);
}

function addContentFooter() {
  const contentFooter = createContentFooterComponent();
  body.append(contentFooter);
}
