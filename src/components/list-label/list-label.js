import "./list-label.css";

export default function createListLabelComponent({ icon, title, toDosCount }) {
  const listContainer = document.createElement("div");
  listContainer.classList.add("list-label-container");
  const listIcon = document.createElement("img");
  listIcon.classList.add("list-label-icon");
  listIcon.src = icon;
  const listTitle = document.createElement("h3");
  listTitle.classList.add("list-label-title");
  listTitle.textContent = title;
  listContainer.append(listIcon, listTitle);

  if (toDosCount != 0) {
    const listToDosCount = document.createElement("h3");
    listToDosCount.classList.add("list-label-to-dos-count");
    listToDosCount.textContent = toDosCount;
    listContainer.append(listToDosCount);
  }

  return listContainer;
}
