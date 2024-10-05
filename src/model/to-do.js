import Priority from "./priority";

export default class ToDo {
  constructor() {
    const uniqueId =
      Date.now().toString(36) +
      Math.random().toString(36).substring(2, 12).padStart(16, 0);
    this.#id = uniqueId;
  }

  #id;
  get id() {
    return this.#id;
  }
  title = "";
  description = "";
  deadline = "";
  priority = Priority.None.name;
  checklist = [];
  done = false;
}
