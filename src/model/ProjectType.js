export default class ProjectType {
  static get Project() {
    ProjectType.#constructable = true;
    return new ProjectType("Project");
  }
  static get List() {
    ProjectType.#constructable = true;
    return new ProjectType("List");
  }

  static #constructable = false;
  name;

  constructor(name) {
    if (!ProjectType.#constructable) {
      throw new TypeError("ProjectType is not constructable");
    }
    this.name = name;
    ProjectType.#constructable = false;
  }
}