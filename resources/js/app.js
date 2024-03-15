require("./bootstrap");

import App from "./components/App.vue";
import rutas from "./router";
import { createApp } from "vue";
const app = createApp(App);
app.use(rutas);
app.mount("#app");
