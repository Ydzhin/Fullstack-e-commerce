import { LayoutEnum } from "../../AppRoutes";

import type { RouteRecordRaw } from "vue-router";

export const routeName = "NotFoundPage";

export const route: RouteRecordRaw = {
  path: "/:pathMatch(.*)*",
  name: routeName,
  meta: {
    layout: LayoutEnum.common,
  },
  component: () => import("@/pages/not-found"),
};
