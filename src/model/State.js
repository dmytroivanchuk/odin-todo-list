import app from "index";
import Priority from "Model/Priority";
import ChecklistItem from "Model/ChecklistItem"
import Todo from "Model/Todo"
import Project from "Model/Project"
import ProjectType from "Model/ProjectType";

export default class State {
  projects;
  selectedProjectId;
  selectedTodoId;
  expandedTodoId;

  getSelectedProject(id) {
    return this.projects.find(project => project.id === id);
  }

  checkChecklistItem(checklistItemId, todoId, projectId, done) {
    const projectIndex = this.projects.findIndex(project => project.id === projectId);
    const todoIndex = this.projects[projectIndex].todos.findIndex(todo => todo.id === todoId);
    const checklistItemIndex = this.projects[projectIndex].todos[todoIndex].checklist.findIndex(checklistItem => checklistItem.id === checklistItemId);
    this.projects[projectIndex].todos[todoIndex].checklist[checklistItemIndex].done = done;
    app.database.updateProject(this.projects[projectIndex]);
  }

  changeChecklistItemTitle(checklistItemId, todoId, projectId, title) {
    const projectIndex = this.projects.findIndex(project => project.id === projectId);
    const todoIndex = this.projects[projectIndex].todos.findIndex(todo => todo.id === todoId);
    const checklistItemIndex = this.projects[projectIndex].todos[todoIndex].checklist.findIndex(checklistItem => checklistItem.id === checklistItemId);
    this.projects[projectIndex].todos[todoIndex].checklist[checklistItemIndex].title = title;
    app.database.updateProject(this.projects[projectIndex]);
  }

  removeChecklistItem(checklistItemId, todoId, projectId) {
    const projectIndex = this.projects.findIndex(project => project.id === projectId);
    const todoIndex = this.projects[projectIndex].todos.findIndex(todo => todo.id === todoId);
    const checklistItemIndex = this.projects[projectIndex].todos[todoIndex].checklist.findIndex(checklistItem => checklistItem.id === checklistItemId);
    this.projects[projectIndex].todos[todoIndex].checklist.splice(checklistItemIndex, 1);
    app.database.updateProject(this.projects[projectIndex]);
  }

  createChecklistItem(checklistItemId, todoId, projectId) {
    const projectIndex = this.projects.findIndex(project => project.id === projectId);
    const todoIndex = this.projects[projectIndex].todos.findIndex(todo => todo.id === todoId);
    const newChecklistItem = new ChecklistItem();
    if (checklistItemId) {
      const checklistItemIndex = this.projects[projectIndex].todos[todoIndex].checklist.findIndex(checklistItem => checklistItem.id === checklistItemId);
      this.projects[projectIndex].todos[todoIndex].checklist.splice(checklistItemIndex + 1, 0, newChecklistItem);
    } else {
      this.projects[projectIndex].todos[todoIndex].checklist.push(newChecklistItem);
    }
    app.database.updateProject(this.projects[projectIndex]);
    return newChecklistItem;
  }

  checkTodo(todoId, projectId, done) {
    const projectIndex = this.projects.findIndex(project => project.id === projectId);
    const todoIndex = this.projects[projectIndex].todos.findIndex(todo => todo.id === todoId);
    this.projects[projectIndex].todos[todoIndex].done = done;
    app.database.updateProject(this.projects[projectIndex]);
  }

  changeTodoTitle(todoId, projectId, title) {
    const projectIndex = this.projects.findIndex(project => project.id === projectId);
    const todoIndex = this.projects[projectIndex].todos.findIndex(todo => todo.id === todoId);
    this.projects[projectIndex].todos[todoIndex].title = title;
    app.database.updateProject(this.projects[projectIndex]);
  }

  changeTodoDescription(todoId, projectId, description) {
    const projectIndex = this.projects.findIndex(project => project.id === projectId);
    const todoIndex = this.projects[projectIndex].todos.findIndex(todo => todo.id === todoId);
    this.projects[projectIndex].todos[todoIndex].description = description;
    app.database.updateProject(this.projects[projectIndex]);
  }

  removeTodoPriority(todoId, projectId) {
    const projectIndex = this.projects.findIndex(project => project.id === projectId);
    const todoIndex = this.projects[projectIndex].todos.findIndex(todo => todo.id === todoId);
    this.projects[projectIndex].todos[todoIndex].priority = Priority.None;
    app.database.updateProject(this.projects[projectIndex]);
  }

  changeTodoPriority(todoId, projectId, priority) {
    const projectIndex = this.projects.findIndex(project => project.id === projectId);
    const todoIndex = this.projects[projectIndex].todos.findIndex(todo => todo.id === todoId);
    this.projects[projectIndex].todos[todoIndex].priority = priority;
    app.database.updateProject(this.projects[projectIndex]);
  }

  removeTodoDeadline(todoId, projectId) {
    const projectIndex = this.projects.findIndex(project => project.id === projectId);
    const todoIndex = this.projects[projectIndex].todos.findIndex(todo => todo.id === todoId);
    this.projects[projectIndex].todos[todoIndex].deadline = null;
    app.database.updateProject(this.projects[projectIndex]);
  }

  changeTodoDeadline(todoId, projectId, deadline) {
    const projectIndex = this.projects.findIndex(project => project.id === projectId);
    const todoIndex = this.projects[projectIndex].todos.findIndex(todo => todo.id === todoId);
    this.projects[projectIndex].todos[todoIndex].deadline = deadline;
    app.database.updateProject(this.projects[projectIndex]);
  }

  moveTodo(todoId, projectId, newProjectId) {
    const projectIndex = this.projects.findIndex(project => project.id === projectId);
    const todoIndex = this.projects[projectIndex].todos.findIndex(todo => todo.id === todoId);
    const todo = this.projects[projectIndex].todos[todoIndex];
    this.projects[projectIndex].todos.splice(todoIndex, 1);
    app.database.updateProject(this.projects[projectIndex]);
    const newProjectIndex = this.projects.findIndex(project => project.id === newProjectId);
    this.projects[newProjectIndex].todos.push(todo);
    app.database.updateProject(this.projects[newProjectIndex]);
  }

  deleteTodo(todoId, projectId) {
    const projectIndex = this.projects.findIndex(project => project.id === projectId);
    const todoIndex = this.projects[projectIndex].todos.findIndex(todo => todo.id === todoId);
    this.projects[projectIndex].todos.splice(todoIndex, 1);
    app.database.updateProject(this.projects[projectIndex]);
  }

  createTodo(projectId) {
    const projectIndex = this.projects.findIndex(project => project.id === projectId);
    const newTodo = new Todo();
    this.projects[projectIndex].todos.push(newTodo);
    app.database.updateProject(this.projects[projectIndex]);
    return newTodo;
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

  createProject() {
    const newProject = new Project();
    newProject.type = ProjectType.Project;
    this.projects.push(newProject);
    app.database.saveProject(newProject);
    return newProject;
  }
}