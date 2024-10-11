import "./content-footer.css";
import createNewButton from "Shared/new-button/new-button";

export default function createContentFooter() {
  const contentFooter = document.createElement("footer");
  contentFooter.classList.add("content-footer");
  const newToDoButton = createNewButton("To-Do");
  contentFooter.append(newToDoButton);
  return contentFooter;
}
