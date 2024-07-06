export default class List {
  title = "";
  icon = "";
  toDos = [];
  get toDosCount() {
    return this.toDos.length;
  }
}
