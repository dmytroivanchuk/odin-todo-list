import "./new-button.css";
import plusIcon from "./plus.svg";

export default function createNewButton(object) {
  const button = document.createElement("button");
  button.classList.add("new-button");
  const img = document.createElement("img");
  img.src = plusIcon;
  img.classList.add("new-button-icon");
  const title = document.createElement("h5");
  title.textContent = `New ${object}`;
  title.classList.add("new-button-title");
  button.append(img, title);
  return button;
}
