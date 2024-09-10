import { LayoutEnum } from "../../AppRoutes";

import type { RouteRecordRaw } from "vue-router";

export const routeName: string = "RegisterPage";

export const route: RouteRecordRaw = {
  name: routeName,
  path: "/register",
  meta: {
    layout: LayoutEnum.common,
  },
  component: () => import("@/pages/register"),
};
