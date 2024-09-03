import "./content-footer.css";
import createNewButtonComponent from "../shared/new-button/new-button";

export default function createContentFooter() {
  const contentFooter = document.createElement("footer");
  contentFooter.classList.add("content-footer");
  const newToDoButton = createNewButtonComponent("To-Do");
  contentFooter.append(newToDoButton);
  return contentFooter;
}
