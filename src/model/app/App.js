import createInbox from "./createInbox";
import createStartingProject from "./createStartingProject";

export default class App {
  database;
  state;
  component;

  constructor(state, database, component) {
    this.database = database;
    this.state = state;
    this.component = component;
    if (this.database.isEmpty) {
      const inbox = createInbox();
      this.database.saveList(inbox);
      const startingProject = createStartingProject();
      const startingProject2 = createStartingProject();
      this.database.saveProject(startingProject);
      this.database.saveProject(startingProject2);
      this.database.saveSelectedItemId(startingProject.id);
    }

    this.database.init();
    this.state.projects = this.database.getProjects();
    this.state.lists = this.database.getLists();
    this.state.selectedItemId = this.database.getSelectedItemId();
    this.state.selectedTodoId = this.database.getSelectedTodoId();
  }
}