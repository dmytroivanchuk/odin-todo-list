import "./sidebar-footer.css";
import createNewProjectButtonComponent from "../new-project-button/new-project-button";

export default function createSidebarFooterComponent() {
  const sidebarFooter = document.createElement("footer");
  sidebarFooter.classList.add("sidebar-footer");
  const newProjectButton = createNewProjectButtonComponent();
  sidebarFooter.append(newProjectButton);
  return sidebarFooter;
}
