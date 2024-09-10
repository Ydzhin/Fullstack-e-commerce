import { LayoutEnum } from "../../AppRoutes";

import type { RouteRecordRaw } from "vue-router";

export const routeName: string = "LoginPage";

export const route: RouteRecordRaw = {
  name: routeName,
  path: "/login",
  meta: {
    layout: LayoutEnum.common,
  },
  component: () => import("@/pages/login"),
};
