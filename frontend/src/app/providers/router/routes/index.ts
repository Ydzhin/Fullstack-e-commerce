import { route as homeRoute } from "./home";
import { route as loginRoute } from "./login";
import { route as newsRoute } from "./news";
import { route as notFoundRoute } from "./not-found";
import { route as profileRoute } from "./profile";
import { route as registerRoute } from "./register";

import type { RouteRecordRaw } from "vue-router";

export const routes: readonly RouteRecordRaw[] = [
  homeRoute,
  loginRoute,
  newsRoute,
  notFoundRoute,
  profileRoute,
  registerRoute,
] as const;
