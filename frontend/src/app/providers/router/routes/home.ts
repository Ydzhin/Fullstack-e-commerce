import { LayoutEnum } from "../../AppRoutes";

import type { RouteRecordRaw } from "vue-router";

export const routeName = "HomePage";

export const route: RouteRecordRaw = {
  name: routeName,
  path: "/",
  meta: {
    layout: LayoutEnum.secured,
  },
  component: () => import("@/pages/home"),
};
