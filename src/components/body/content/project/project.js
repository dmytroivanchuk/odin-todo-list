import createProjectDescription from "./project-description/project-description";
import createProjectTitle from "./project-title/project-title";
import createToDo from "./to-do/to-do";
import "./project.css";
import { storage } from "../../../index";

export default function createProject(projectId) {
  const project = storage.getProject(projectId);
  const projectComponent = document.createElement("div");
  projectComponent.classList.add("project");
  const projectTitle = createProjectTitle(project.done, project.title);
  const projectDescription = createProjectDescription(project.description);
  projectComponent.append(projectTitle, projectDescription);
  if (project.toDos.length > 0) {
    const projectToDos = document.createElement("ul");
    projectToDos.classList.add("project-to-dos");
    const toDoIds = storage.getToDoIds(projectId);
    toDoIds.forEach((toDoId) => {
      const li = document.createElement("li");
      const toDo = createToDo(toDoId, projectId);
      li.append(toDo);
      projectToDos.append(li);
    });
    projectComponent.append(projectToDos);
  }
  return projectComponent;
}
