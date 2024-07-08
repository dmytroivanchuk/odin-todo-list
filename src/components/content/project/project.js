import createProjectDescriptionComponent from "./project-description/project-description";
import createProjectTitleComponent from "./project-title/project-title";
import createToDoTitleComponent from "./to-do-title/to-do-title";
import "./project.css";

export default function createProjectComponent({
  done,
  title,
  description,
  toDosInfo,
}) {
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-container");
  const projectTitle = createProjectTitleComponent({ done, title });
  const projectDescription = createProjectDescriptionComponent({ description });
  const toDosList = document.createElement("ul");
  toDosList.classList.add("to-dos-list");
  toDosInfo.forEach((toDoInfo) => {
    const li = document.createElement("li");
    const toDoTitle = createToDoTitleComponent(toDoInfo);
    li.append(toDoTitle);
    toDosList.append(li);
  });
  projectContainer.append(projectTitle, projectDescription, toDosList);
  return projectContainer;
}
