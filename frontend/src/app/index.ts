import { createApp } from "vue";

import App from "./App.vue";
import { router, store } from "./providers";

export const application = createApp(App).use(router).use(store);
