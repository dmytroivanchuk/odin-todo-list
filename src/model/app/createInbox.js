import Project from "Model/Project";
import inboxIcon from "AssetsShared/inbox.svg"
import ProjectType from "Model/ProjectType";

export default function createInbox() {
  const inbox = new Project();
  inbox.type = ProjectType.List;
  inbox.title = "Inbox";
  inbox.icon = inboxIcon;
  return inbox;
}