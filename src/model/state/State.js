import app from "Src/index";
import Priority from "Model/Priority";
import ChecklistItem from "Model/ChecklistItem"

export default class State {
  projects;
  lists;
  selectedItemId;
  selectedTodoId;
  expandedTodoId;

  getSelectedItem(id) {
    return this.projects.find(project => project.id === id) || this.lists.find(list => list.id === id);
  }

  checkChecklistItem(checklistItemId, todoId, projectId, done) {
    const projectIndex = this.projects.findIndex(project => project.id === projectId);
    const todoIndex = this.projects[projectIndex].toDos.findIndex(todo => todo.id === todoId);
    const checklistItemIndex = this.projects[projectIndex].toDos[todoIndex].checklist.findIndex(checklistItem => checklistItem.id === checklistItemId);
    this.projects[projectIndex].toDos[todoIndex].checklist[checklistItemIndex].done = done;
    app.database.updateProject(this.projects[projectIndex]);
  }

  changeChecklistItemTitle(checklistItemId, todoId, projectId, title) {
    const projectIndex = this.projects.findIndex(project => project.id === projectId);
    const todoIndex = this.projects[projectIndex].toDos.findIndex(todo => todo.id === todoId);
    const checklistItemIndex = this.projects[projectIndex].toDos[todoIndex].checklist.findIndex(checklistItem => checklistItem.id === checklistItemId);
    this.projects[projectIndex].toDos[todoIndex].checklist[checklistItemIndex].title = title;
    app.database.updateProject(this.projects[projectIndex]);
  }

  removeChecklistItem(checklistItemId, todoId, projectId) {
    const projectIndex = this.projects.findIndex(project => project.id === projectId);
    const todoIndex = this.projects[projectIndex].toDos.findIndex(todo => todo.id === todoId);
    const checklistItemIndex = this.projects[projectIndex].toDos[todoIndex].checklist.findIndex(checklistItem => checklistItem.id === checklistItemId);
    this.projects[projectIndex].toDos[todoIndex].checklist.splice(checklistItemIndex, 1);
    app.database.updateProject(this.projects[projectIndex]);
  }

  createChecklistItem(checklistItemId, todoId, projectId) {
    const projectIndex = this.projects.findIndex(project => project.id === projectId);
    const todoIndex = this.projects[projectIndex].toDos.findIndex(todo => todo.id === todoId);
    const newChecklistItem = new ChecklistItem();
    if (checklistItemId) {
      const checklistItemIndex = this.projects[projectIndex].toDos[todoIndex].checklist.findIndex(checklistItem => checklistItem.id === checklistItemId);
      this.projects[projectIndex].toDos[todoIndex].checklist.splice(checklistItemIndex + 1, 0, newChecklistItem);
    } else {
      this.projects[projectIndex].toDos[todoIndex].checklist.push(newChecklistItem);
    }
    app.database.updateProject(this.projects[projectIndex]);
    return newChecklistItem;
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

  changeTodoDescription(todoId, projectId, description) {
    const projectIndex = this.projects.findIndex(project => project.id === projectId);
    const todoIndex = this.projects[projectIndex].toDos.findIndex(todo => todo.id === todoId);
    this.projects[projectIndex].toDos[todoIndex].description = description;
    app.database.updateProject(this.projects[projectIndex]);
  }

  removeTodoPriority(todoId, projectId) {
    const projectIndex = this.projects.findIndex(project => project.id === projectId);
    const todoIndex = this.projects[projectIndex].toDos.findIndex(todo => todo.id === todoId);
    this.projects[projectIndex].toDos[todoIndex].priority = Priority.None;
    app.database.updateProject(this.projects[projectIndex]);
  }

  removeTodoDeadline(todoId, projectId) {
    const projectIndex = this.projects.findIndex(project => project.id === projectId);
    const todoIndex = this.projects[projectIndex].toDos.findIndex(todo => todo.id === todoId);
    this.projects[projectIndex].toDos[todoIndex].deadline = "";
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