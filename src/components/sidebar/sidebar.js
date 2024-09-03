import "./sidebar.css";
import createListLabel from "./list-label/list-label";
import createProjectLabel from "./project-label/project-label";
import { storage } from "../../index";

export default function createSidebar() {
  const aside = document.createElement("aside");
  aside.classList.add("sidebar");
  const nav = document.createElement("nav");
  nav.classList.add("navigation");
  const ul = document.createElement("ul");
  ul.classList.add("lists-projects-container");

  storage.getListIds().forEach((listId) => {
    const li = document.createElement("li");
    const listLabel = createListLabel(listId);
    li.append(listLabel);
    ul.append(li);
  });

  storage.getProjectIds().forEach((projectId) => {
    const li = document.createElement("li");
    const projectLabel = createProjectLabel(projectId);
    li.append(projectLabel);
    ul.append(li);
  });

  nav.append(ul);
  aside.append(nav);
  return aside;
}
