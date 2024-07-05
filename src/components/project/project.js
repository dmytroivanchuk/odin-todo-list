import "./project.css";

export default function createProjectComponent({ title, icon }) {
  const a = document.createElement("a");
  const div = document.createElement("div");
  div.classList.add("project-container");
  const img = document.createElement("img");
  img.classList.add("icon");
  img.src = icon;
  const title = document.createElement("h3");
  title.textContent = title;
  title.classList.add("title");
  div.append(img, title);
  a.append(div);
  return a;
}
