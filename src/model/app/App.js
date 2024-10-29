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
      this.database.saveProject(inbox);
      this.database.saveSelectedProjectId(inbox.id);
      const startingProject = createStartingProject();
      this.database.saveProject(startingProject);
    }

    this.database.init();
    this.state.projects = this.database.getProjects();
    this.state.selectedProjectId = this.database.getSelectedProjectId();
    this.state.selectedTodoId = this.database.getSelectedTodoId();
    this.state.expandedTodoId = this.database.getExpandedTodoId();
  }
}