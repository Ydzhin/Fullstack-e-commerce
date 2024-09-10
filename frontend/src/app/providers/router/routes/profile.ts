import { LayoutEnum } from "../../AppRoutes";

import type { RouteRecordRaw } from "vue-router";

export const routeName = "ProfilePage";

export const route: RouteRecordRaw = {
  name: routeName,
  path: "/profile",
  meta: {
    layout: LayoutEnum.common,
  },
  component: () => import("@/pages/profile"),
};
