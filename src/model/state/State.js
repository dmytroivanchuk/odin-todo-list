export default class State {
  projects;
  lists;
  selectedItemId;
  selectedTodoId;

  getSelectedItem(id) {
    return this.projects.find(project => project.id === id) || this.lists.find(list => list.id === id);
  }
}