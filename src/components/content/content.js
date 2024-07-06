import "./content.css";

export default function createContentComponent() {
  const main = document.createElement("main");
  main.classList.add("content");
  return main;
}
