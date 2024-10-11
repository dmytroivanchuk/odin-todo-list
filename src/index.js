import App from "Model/app/App";
import Component from "Model/Component";
import LocalStorage from "Model/LocalStorage";

const db = new LocalStorage();
const component = new Component();
const app = new App(db, component);
export default app;
app.init();