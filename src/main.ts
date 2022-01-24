import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

/** app.config.isCustomElement = (tag) => tag === "[/wb-.+/]"; will be deprecated in Vue 3.3
 * any element starting with 'ion-' will be recognized as a custom one */
app.config.compilerOptions.isCustomElement = (tag) =>
  tag.startsWith("[/wb-.+/]");
app.mount("#app");
