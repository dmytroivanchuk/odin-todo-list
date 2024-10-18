export default class LocalStorage {
  #projectIdsKeyName = "projectIds";
  #listIdsKeyName = "listIds";
  #selectedItemIdKeyName = "selectedItemId";
  #selectedTodoIdKeyName = "selectedTodoId";
  #expandedTodoIdKeyName = "expandedTodoId";
  #projectIds = [];
  #listIds = [];

  init() {
    this.#projectIds = this.#getIds(this.#projectIdsKeyName);
    this.#listIds = this.#getIds(this.#listIdsKeyName);
  }

  get isEmpty() {
    return localStorage.length === 0;
  }

  getProjects() {
    return this.#getItems(this.#projectIds);
  }

  getLists() {
    return this.#getItems(this.#listIds);
  }

  getSelectedItemId() {
    return localStorage.getItem(this.#selectedItemIdKeyName);
  }

  getSelectedTodoId() {
    return localStorage.getItem(this.#selectedTodoIdKeyName);
  }

  getExpandedTodoId() {
    return localStorage.getItem(this.#expandedTodoIdKeyName);
  }

  saveProject(project) {
    this.#projectIds.push(project.id);
    const projectIdsJson = JSON.stringify(this.#projectIds);
    localStorage.setItem(this.#projectIdsKeyName, projectIdsJson);
    const projectJson = JSON.stringify(project);
    localStorage.setItem(project.id, projectJson);
  }

  updateProject(project) {
    const projectJson = JSON.stringify(project);
    localStorage.setItem(project.id, projectJson);
  }

  saveList(list) {
    this.#listIds.push(list.id);
    const listIdsJson = JSON.stringify(this.#listIds);
    localStorage.setItem(this.#listIdsKeyName, listIdsJson);
    const listJson = JSON.stringify(list);
    localStorage.setItem(list.id, listJson);
  }

  saveSelectedItemId(id) {
    localStorage.setItem(this.#selectedItemIdKeyName, id);
  }

  saveSelectedTodoId(id) {
    localStorage.setItem(this.#selectedTodoIdKeyName, id);
  }

  saveExpandedTodoId(id) {
    localStorage.setItem(this.#expandedTodoIdKeyName, id);
  }

  #getItems(itemIds) {
    let items = [];
    itemIds.forEach(id => {
      const itemJson = localStorage.getItem(id);
      const item = JSON.parse(itemJson);
      items.push(item);
    });
    return items;
  }

  #getIds(idsKeyName) {
    const idsJson = localStorage.getItem(idsKeyName);
    const ids = JSON.parse(idsJson);
    return ids;
  }
}