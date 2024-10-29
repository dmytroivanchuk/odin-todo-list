import "./sidebar.css";
import createProjectLabel from "./project-label/project-label";
import app from "index";

export default function createSidebar() {
  const aside = document.createElement("aside");
  aside.classList.add("sidebar");
  const nav = document.createElement("nav");
  nav.classList.add("navigation");
  const ul = document.createElement("ul");
  ul.classList.add("project-label-container");

  app.state.projects.forEach(project => {
    const li = document.createElement("li");
    const projectLabel = createProjectLabel(project);
    li.append(projectLabel);
    ul.append(li);
  });

  nav.append(ul);
  aside.append(nav);
  return aside;
}
