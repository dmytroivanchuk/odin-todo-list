export default class Priority {
  static get None() {
    Priority.#constructable = true;
    return new Priority("None");
  }
  static get Low() {
    Priority.#constructable = true;
    return new Priority("Low");
  }
  static get Medium() {
    Priority.#constructable = true;
    return new Priority("Medium");
  }
  static get High() {
    Priority.#constructable = true;
    return new Priority("High");
  }

  static #constructable = false;
  #name;

  constructor(name) {
    if (!Priority.#constructable) {
      throw new TypeError("Priority is not constructable");
    }
    this.#name = name;
    Priority.#constructable = false;
  }

  get name() {
    return this.#name;
  }

  get color() {
    switch (this.#name) {
      case Priority.None.name:
        return "white";
      case Priority.Low.name:
        return "yellow";
      case Priority.Medium.name:
        return "orange";
      case Priority.High.name:
        return "red";
    }
  }
}
