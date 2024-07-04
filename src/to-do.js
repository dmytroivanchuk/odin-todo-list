import Priority from "./priority";

export default class ToDo {
  title = "";
  description = "";
  deadline = "";
  priority = Priority.None.name;
  checklist = [];
  done = false;
}
