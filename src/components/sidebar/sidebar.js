import "./sidebar.css";
import createListComponent from "../list/list";
import createProjectComponent from "../project/project";
import createNewProjectButtonComponent from "../new-project-button/new-project-button";

export default function createSidebarComponent({ listsInfo, projectsInfo }) {
  const aside = document.createElement("aside");
  aside.classList.add("sidebar");
  const nav = document.createElement("nav");
  nav.classList.add("navigation");
  const ul = document.createElement("ul");
  ul.classList.add("lists-projects-container");
  listsInfo.forEach((listInfo) => {
    const li = document.createElement("li");
    const listComponent = createListComponent(listInfo);
    li.append(listComponent);
    ul.append(li);
  });
  projectsInfo.forEach((projectInfo) => {
    const li = document.createElement("li");
    const projectComponent = createProjectComponent(projectInfo);
    li.append(projectComponent);
    ul.append(li);
  });
  nav.append(ul);
  aside.append(nav);
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  const newProjectButton = createNewProjectButtonComponent();
  footer.append(newProjectButton);
  aside.append(footer);
  return aside;
}
