import app from "Src/index";

export default class State {
  projects;
  lists;
  selectedItemId;
  selectedTodoId;
  expandedTodoId;

  getSelectedItem(id) {
    return this.projects.find(project => project.id === id) || this.lists.find(list => list.id === id);
  }

  checkTodo(todoId, projectId, value) {
    const projectIndex = this.projects.findIndex(project => project.id === projectId);
    const todoIndex = this.projects[projectIndex].toDos.findIndex(todo => todo.id === todoId);
    this.projects[projectIndex].toDos[todoIndex].done = value;
    app.database.updateProject(this.projects[projectIndex]);
  }
}