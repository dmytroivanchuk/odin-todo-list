import "./list.css";

export default function createListComponent({ icon, title, toDosCount }) {
  const listContainer = document.createElement("div");
  listContainer.classList.add("list-container");
  const listIcon = document.createElement("img");
  listIcon.classList.add("list-icon");
  listIcon.src = icon;
  const listTitle = document.createElement("h3");
  listTitle.classList.add("list-title");
  listTitle.textContent = title;
  listContainer.append(listIcon, listTitle);

  if (toDosCount != 0) {
    const listToDosCount = document.createElement("h3");
    listToDosCount.classList.add("list-to-dos-count");
    listToDosCount.textContent = toDosCount;
    listContainer.append(listToDosCount);
  }

  return listContainer;
}
