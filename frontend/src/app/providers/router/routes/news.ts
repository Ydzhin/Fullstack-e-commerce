import type { RouteRecordRaw } from "vue-router";

export const routeName: string = "NewsPage";

export const route: RouteRecordRaw = {
  name: routeName,
  path: "/news",
  component: () => import("@/pages/news"),
};
