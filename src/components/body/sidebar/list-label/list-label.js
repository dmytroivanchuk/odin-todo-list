import app from "Src/index";
import "./list-label.css";

export default function createListLabel(list) {
  const listLabel = document.createElement("div");
  listLabel.classList.add("list-label");
  listLabel.dataset.id = list.id;
  if (listLabel.dataset.id === app.state.selectedItemId) {
    listLabel.classList.add("selected");
  }
  listLabel.addEventListener("click", () => {
    const previousSelectedItem = document.querySelector(`.list-label[data-id=${app.state.selectedItemId}], .project-label[data-id=${app.state.selectedItemId}]`);
    previousSelectedItem.classList.remove("selected");
    listLabel.classList.add("selected");
    const newSelectedItemId = listLabel.dataset.id;
    app.state.selectedItemId = newSelectedItemId;
    app.database.saveSelectedItemId(newSelectedItemId);
  })
  const listLabelIcon = document.createElement("img");
  listLabelIcon.classList.add("list-label-icon");
  listLabelIcon.src = list.icon;
  const listLabelTitle = document.createElement("h3");
  listLabelTitle.classList.add("list-label-title");
  listLabelTitle.textContent = list.title;
  listLabel.append(listLabelIcon, listLabelTitle);

  if (list.toDosCount != 0) {
    const listLabelToDosCount = document.createElement("h3");
    listLabelToDosCount.classList.add("list-label-to-dos-count");
    listLabelToDosCount.textContent = list.toDosCount;
    listLabel.append(listLabelToDosCount);
  }

  return listLabel;
}
