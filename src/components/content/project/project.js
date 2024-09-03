import createProjectDescription from "./project-description/project-description";
import createProjectTitle from "./project-title/project-title";
import createToDoTitle from "./to-do-title/to-do-title";
import "./project.css";
import { storage } from "../../../index";

export default function createProject(projectId) {
  const project = document.createElement("div");
  project.classList.add("project");
  const projectTitle = createProjectTitle(projectId);
  const projectDescription = createProjectDescription(projectId);
  const projectToDos = document.createElement("ul");
  projectToDos.classList.add("project-to-dos");
  const toDoIds = storage.getToDoIds(projectId);
  toDoIds.forEach((toDoId) => {
    const li = document.createElement("li");
    const toDoTitle = createToDoTitle(toDoId, projectId);
    li.append(toDoTitle);
    projectToDos.append(li);
  });
  project.append(projectTitle, projectDescription, projectToDos);
  return project;
}
