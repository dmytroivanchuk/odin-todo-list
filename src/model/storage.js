export default class Storage {
  #lists = [];
  #projects = [];

  addList(list) {
    this.#lists.push(list);
    const listsJSON = JSON.stringify(this.#lists);
    localStorage.setItem("lists", listsJSON);
  }

  addProject(project) {
    this.#projects.push(project);
    const projectsJSON = JSON.stringify(this.#projects);
    localStorage.setItem("projects", projectsJSON);
  }

  getListIds() {
    return this.#lists.map((list) => list.id);
  }

  getProjectIds() {
    return this.#projects.map((project) => project.id);
  }

  getProject(projectId) {
    return this.#projects.find((project) => project.id === projectId);
  }

  getList(listId) {
    return this.#lists.find((list) => list.id === listId);
  }

  getToDoIds(projectId) {
    return this.getProject(projectId).toDos.map((toDo) => toDo.id);
  }

  getToDo(toDoId, projectId) {
    return this.getProject(projectId).toDos.find((toDo) => toDo.id === toDoId);
  }
}
