export default function createNewProjectButtonComponent() {
  const button = document.createElement("button");
  button.classList.add("new-project-button");
  const img = document.createElement("img");
  img.src = "./plus.svg";
  img.classList.add("icon");
  const title = document.createElement("h5");
  title.textContent = "New Project";
  title.classList.add("title");
  button.append(img, title);
  return button;
}
