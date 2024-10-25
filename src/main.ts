import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router).mount("#app");
