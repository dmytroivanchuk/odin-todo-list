import createToDoTitle from "../to-do-title/to-do-title";
import "./to-do.css";
import createToDoDescription from "../to-do-description/to-do-description";

export default function createToDo(toDoId, projectId) {
  const toDo = document.createElement("div");
  toDo.classList.add("to-do");
  const toDoTitle = createToDoTitle(toDoId, projectId);
  const toDoDescription = createToDoDescription(toDoId, projectId);
  toDo.append(toDoTitle, toDoDescription);
  return toDo;
}
