import { createApp } from "vue";

import App from "./App.vue";
import { router, store } from "./providers";
import "@/app/styles/index.css";

export const application = createApp(App).use(router).use(store);
