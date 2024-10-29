import "./sidebar-footer.css";
import createNewButton from "Shared/new-button/new-button";
import createProjectLabel from "../sidebar/project-label/project-label";
import circleIcon from "AssetsShared/circle.svg"
import app from "index";

export default function createSidebarFooter() {
  const sidebarFooter = document.createElement("footer");
  sidebarFooter.classList.add("sidebar-footer");
  const newProjectButton = createNewButton("Project");
  newProjectButton.addEventListener("click", () => {
    createNewProject();
  })
  sidebarFooter.append(newProjectButton);
  return sidebarFooter;
}

function createNewProject() {
  const newProject = app.state.createProject();
  newProject.icon = circleIcon;
  const li = document.createElement("li");
  const projectLabel = createProjectLabel(newProject);
  li.append(projectLabel);
  document.querySelector(".project-label-container").append(li);
  const event = new MouseEvent("click");
  projectLabel.dispatchEvent(event);
  document.querySelector(".project-title-title").focus();
}