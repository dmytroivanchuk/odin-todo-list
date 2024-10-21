export default class ChecklistItem {
  constructor() {
    const uniqueId =
      Date.now().toString(36) +
      Math.random().toString(36).substring(2, 12).padStart(16, 0);
    this.id = uniqueId;
  }

  id;
  title = "";
  done = false;
}
