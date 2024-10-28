import "./project.css";
import createProjectTitle from "./project-title/project-title";
import createProjectDescription from "./project-description/project-description";
import createToDo from "./to-do/to-do";

export default function createProject(project) {
  const projectComponent = document.createElement("div");
  projectComponent.classList.add("project");
  projectComponent.dataset.id = project.id;
  const projectTitle = createProjectTitle(project.done, project.title);
  const projectDescription = createProjectDescription(project.description);
  const projectToDos = document.createElement("ul");
  projectToDos.classList.add("project-to-dos");
  projectComponent.append(projectTitle, projectDescription, projectToDos);
  if (project.toDos.length > 0) {
    project.toDos.forEach(toDo => {
      const li = document.createElement("li");
      const toDoComponent = createToDo(toDo);
      li.append(toDoComponent);
      projectToDos.append(li);
    });
  }
  return projectComponent;
}
