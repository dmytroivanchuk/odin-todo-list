import "./sidebar.css";
import createListLabelComponent from "../list-label/list-label";
import createProjectLabelComponent from "../project-label/project-label";
import createNewButtonComponent from "../new-button/new-button";

export default function createSidebarComponent({ listsInfo, projectsInfo }) {
  const aside = document.createElement("aside");
  aside.classList.add("sidebar");
  const nav = document.createElement("nav");
  nav.classList.add("navigation");
  const ul = document.createElement("ul");
  ul.classList.add("lists-projects-container");
  listsInfo.forEach((listInfo) => {
    const li = document.createElement("li");
    const listComponent = createListLabelComponent(listInfo);
    li.append(listComponent);
    ul.append(li);
  });
  projectsInfo.forEach((projectInfo) => {
    const li = document.createElement("li");
    const projectComponent = createProjectLabelComponent(projectInfo);
    li.append(projectComponent);
    ul.append(li);
  });
  nav.append(ul);
  aside.append(nav);
  return aside;
}
