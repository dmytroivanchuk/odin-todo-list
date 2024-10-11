import createInbox from "./createInbox";
import createStartingProject from "./createStartingProject";

export default class App {
  projects;
  lists;
  #db;
  #component;

  constructor(db, component) {
    this.#db = db;
    this.#component = component;
    if (this.#db.isEmpty) {
      const startingProject = createStartingProject();
      this.#db.saveProject(startingProject);
      const inbox = createInbox();
      this.#db.saveList(inbox);
    }

    this.#db.init();
    this.projects = this.#db.getProjects();
    this.lists = this.#db.getLists();
  }

  init() {
    this.#component.init();
  }
}