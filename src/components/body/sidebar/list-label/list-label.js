import "./list-label.css";

export default function createListLabel(list) {
  const listLabel = document.createElement("div");
  listLabel.classList.add("list-label");
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
