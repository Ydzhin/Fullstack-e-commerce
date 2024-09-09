import type { RouteRecordRaw } from "vue-router";

export const routeName: string = "RegisterPage";

export const route: RouteRecordRaw = {
  name: routeName,
  path: "/register",
  component: () => import("@/pages/register"),
};
