import List from "Model/List";
import inboxIcon from "AssetsShared/inbox.svg"

export default function createInbox() {
  const inbox = new List();
  inbox.title = "Inbox";
  inbox.icon = inboxIcon;
  return inbox;
}