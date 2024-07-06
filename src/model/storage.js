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

  getLists() {
    return this.#lists;
  }

  getProjects() {
    return this.#projects;
  }
}
