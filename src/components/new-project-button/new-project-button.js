import "./new-project-button.css";
import plusIcon from "./plus.svg";

export default function createNewProjectButtonComponent() {
  const button = document.createElement("button");
  button.classList.add("new-project-button");
  const img = document.createElement("img");
  img.src = plusIcon;
  img.classList.add("new-project-button-icon");
  const title = document.createElement("h5");
  title.textContent = "New Project";
  title.classList.add("new-project-button-title");
  button.append(img, title);
  return button;
}
