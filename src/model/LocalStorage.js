export default class LocalStorage {
  #projectIdsKeyName = "projectIds";
  #selectedProjectIdKeyName = "selectedProjectId";
  #selectedTodoIdKeyName = "selectedTodoId";
  #expandedTodoIdKeyName = "expandedTodoId";
  #projectIds = [];

  init() {
    const projectsIdsJson = localStorage.getItem(this.#projectIdsKeyName);
    this.#projectIds = JSON.parse(projectsIdsJson);
  }

  get isEmpty() {
    return localStorage.length === 0;
  }

  getProjects() {
    let projects = [];
    this.#projectIds.forEach(id => {
      const projectJson = localStorage.getItem(id);
      const project = JSON.parse(projectJson);
      if (project.type.name === "Project") {
        project.deadline = new Date(project.deadline);
      }
      projects.push(project);
    });
    return projects;
  }

  getSelectedProjectId() {
    return localStorage.getItem(this.#selectedProjectIdKeyName);
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

  saveSelectedProjectId(id) {
    localStorage.setItem(this.#selectedProjectIdKeyName, id);
  }

  saveSelectedTodoId(id) {
    localStorage.setItem(this.#selectedTodoIdKeyName, id);
  }

  saveExpandedTodoId(id) {
    localStorage.setItem(this.#expandedTodoIdKeyName, id);
  }
}