import "./sidebar-footer.css";
import createNewButton from "Shared/new-button/new-button";

export default function createSidebarFooter() {
  const sidebarFooter = document.createElement("footer");
  sidebarFooter.classList.add("sidebar-footer");
  const newProjectButton = createNewButton("Project");
  sidebarFooter.append(newProjectButton);
  return sidebarFooter;
}
