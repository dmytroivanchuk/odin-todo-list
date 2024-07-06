import "./sidebar-footer.css";
import createNewButtonComponent from "../new-button/new-button";

export default function createSidebarFooterComponent() {
  const sidebarFooter = document.createElement("footer");
  sidebarFooter.classList.add("sidebar-footer");
  const newProjectButton = createNewButtonComponent("Project");
  sidebarFooter.append(newProjectButton);
  return sidebarFooter;
}
