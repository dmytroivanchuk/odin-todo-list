import Priority from "Model/Priority";

export default class Todo {
  constructor() {
    const uniqueId =
      Date.now().toString(36) +
      Math.random().toString(36).substring(2, 12).padStart(16, 0);
    this.id = uniqueId;
  }

  id;
  title = "";
  description = "";
  deadline = null;
  priority = Priority.None;
  checklist = [];
  done = false;
}
