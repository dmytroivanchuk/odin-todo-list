import "./content.css";

export default function createContent() {
  const main = document.createElement("main");
  main.classList.add("content");
  return main;
}
