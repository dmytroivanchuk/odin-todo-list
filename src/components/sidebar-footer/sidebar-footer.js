import "./sidebar-footer.css";
import createNewButtonComponent from "../shared/new-button/new-button";

export default function createSidebarFooter() {
  const sidebarFooter = document.createElement("footer");
  sidebarFooter.classList.add("sidebar-footer");
  const newProjectButton = createNewButtonComponent("Project");
  sidebarFooter.append(newProjectButton);
  return sidebarFooter;
}
