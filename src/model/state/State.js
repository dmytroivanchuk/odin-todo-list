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

  checkTodo(todoId, projectId, done) {
    const projectIndex = this.projects.findIndex(project => project.id === projectId);
    const todoIndex = this.projects[projectIndex].toDos.findIndex(todo => todo.id === todoId);
    this.projects[projectIndex].toDos[todoIndex].done = done;
    app.database.updateProject(this.projects[projectIndex]);
  }

  changeTodoTitle(todoId, projectId, title) {
    const projectIndex = this.projects.findIndex(project => project.id === projectId);
    const todoIndex = this.projects[projectIndex].toDos.findIndex(todo => todo.id === todoId);
    this.projects[projectIndex].toDos[todoIndex].title = title;
    app.database.updateProject(this.projects[projectIndex]);
  }

  checkProject(projectId, done) {
    const projectIndex = this.projects.findIndex(project => project.id === projectId);
    this.projects[projectIndex].done = done;
    app.database.updateProject(this.projects[projectIndex]);
  }

  changeProjectTitle(projectId, title) {
    const projectIndex = this.projects.findIndex(project => project.id === projectId);
    this.projects[projectIndex].title = title;
    app.database.updateProject(this.projects[projectIndex]);
  }

  changeProjectDescription(projectId, description) {
    const projectIndex = this.projects.findIndex(project => project.id === projectId);
    this.projects[projectIndex].description = description;
    app.database.updateProject(this.projects[projectIndex]);
  }
}