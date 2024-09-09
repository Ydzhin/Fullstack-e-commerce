import type { RouteRecordRaw } from "vue-router";

export const routeName = "HomePage";

export const route: RouteRecordRaw = {
  name: routeName,
  path: "/",
  component: () => import("@/pages/home"),
};
