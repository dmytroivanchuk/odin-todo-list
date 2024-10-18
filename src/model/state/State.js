export default class State {
  projects;
  lists;
  selectedItemId;
  selectedTodoId;
  expandedTodoId;

  getSelectedItem(id) {
    return this.projects.find(project => project.id === id) || this.lists.find(list => list.id === id);
  }
}