import { LayoutEnum } from "../../AppRoutes";

import type { RouteRecordRaw } from "vue-router";

export const routeName: string = "NewsPage";

export const route: RouteRecordRaw = {
  name: routeName,
  path: "/news",
  meta: {
    layout: LayoutEnum.common,
  },
  component: () => import("@/pages/news"),
};
