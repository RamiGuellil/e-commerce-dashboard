/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import router from '@/router'

import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const app = createApp(App)
app.use(router);

registerPlugins(app)

app.mount('#app')
