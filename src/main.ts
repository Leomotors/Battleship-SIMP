import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { key } from "./store/index";
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App).use(store, key).use(router).mount("#app");
