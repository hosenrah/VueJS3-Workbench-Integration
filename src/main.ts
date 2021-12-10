import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

app.config.isCustomElement = (tag) => tag === "[/wb-.+/]";

app.mount('#app');
