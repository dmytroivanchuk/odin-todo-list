import List from "../list";
import inboxIcon from "../../assets/inbox.svg"

export default function createInbox() {
  const inbox = new List();
  inbox.title = "Inbox";
  inbox.icon = inboxIcon;
  return inbox;
}