import "./preflight.css"
import "./body.css"
import createSidebar from "./sidebar/sidebar";
import createContent from "./content/content";
import createSidebarFooter from "./sidebar-footer/sidebar-footer";
import createContentFooter from "./content-footer/content-footer";

export default function createBody() {
  const body = document.querySelector("body");
  const sidebar = createSidebar();
  const content = createContent();
  const sidebarFooter = createSidebarFooter();
  const contentFooter = createContentFooter();
  body.append(sidebar, content, sidebarFooter, contentFooter);
}