import State from "Model/State";
import LocalStorage from "Model/LocalStorage";
import Component from "Model/Component";
import App from "Model/app/App";

const state = new State();
const database = new LocalStorage();
const component = new Component();
const app = new App(state, database, component);
export default app;
app.component.init();