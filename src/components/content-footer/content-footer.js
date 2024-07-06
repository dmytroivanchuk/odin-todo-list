import "./content-footer.css";
import createNewButtonComponent from "../new-button/new-button";

export default function createContentFooterComponent() {
  const contentFooter = document.createElement("footer");
  contentFooter.classList.add("content-footer");
  const newToDoButton = createNewButtonComponent("To-Do");
  contentFooter.append(newToDoButton);
  return contentFooter;
}
