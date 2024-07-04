import Priority from "./priority";

export default class ToDo {
  title = "";
  description = "";
  dueDate = "";
  priority = Priority.None.name;
  checklist = [];
  done = false;
}
