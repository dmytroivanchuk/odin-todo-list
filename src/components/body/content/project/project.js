import "./project.css";
import createProjectTitle from "./project-title/project-title";
import createProjectDescription from "./project-description/project-description";
import createTodo from "./todo/todo";

export default function createProject(project) {
  const projectComponent = document.createElement("div");
  projectComponent.classList.add("project");
  projectComponent.dataset.id = project.id;
  const projectTitle = createProjectTitle(project.done, project.title, project.type, project.icon);
  projectComponent.append(projectTitle);
  if (project.type.name === "Project") {
    const projectDescription = createProjectDescription(project.description);
    projectComponent.append(projectDescription);
  }
  const projectTodos = document.createElement("ul");
  projectTodos.classList.add("project-todos");
  projectComponent.append(projectTodos);
  project.todos.forEach(todo => {
    const li = document.createElement("li");
    const todoComponent = createTodo(todo);
    li.append(todoComponent);
    projectTodos.append(li);
  });
  return projectComponent;
}
