import "./content.css";
import createProject from "./project/project";
import app from "Src/index";

export default function createContent() {
  const main = document.createElement("main");
  main.classList.add("content");
  const selectedItem = app.state.getSelectedItem(app.state.selectedItemId);
  switch (selectedItem.type) {
    case "Project":
      const project = createProject(selectedItem);
      main.append(project);
      break;
  }

  return main;
}
