import type { RouteRecordRaw } from "vue-router";

export const routeName = "ProfilePage";

export const route: RouteRecordRaw = {
  name: routeName,
  path: "/profile",
  component: () => import("@/pages/profile"),
};
