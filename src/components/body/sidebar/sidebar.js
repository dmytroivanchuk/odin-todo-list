import "./sidebar.css";
import createListLabel from "./list-label/list-label";
import createProjectLabel from "./project-label/project-label";
import app from "Src/index";

export default function createSidebar() {
  const aside = document.createElement("aside");
  aside.classList.add("sidebar");
  const nav = document.createElement("nav");
  nav.classList.add("navigation");
  const ul = document.createElement("ul");
  ul.classList.add("lists-projects-container");

  app.lists.forEach(list => {
    const li = document.createElement("li");
    const listLabel = createListLabel(list);
    li.append(listLabel);
    ul.append(li);
  });

  app.projects.forEach(project => {
    const li = document.createElement("li");
    const projectLabel = createProjectLabel(project);
    li.append(projectLabel);
    ul.append(li);
  });

  nav.append(ul);
  aside.append(nav);
  return aside;
}
