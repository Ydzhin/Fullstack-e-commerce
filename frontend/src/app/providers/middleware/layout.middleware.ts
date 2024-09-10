import * as layouts from "@/shared/ui/layouts";

import { LayoutEnum } from "../AppRoutes";

import type { RouteLocationNormalized } from "vue-router";

export const layoutMiddleware = async (route: RouteLocationNormalized): Promise<void> => {
  const layout = route?.meta?.layout || LayoutEnum.common;

  let layoutComponent;

  // Use static import for known layouts
  switch (layout) {
    case LayoutEnum.secured:
      layoutComponent = layouts.secured;

      break;
    case LayoutEnum.common:
    default:
      layoutComponent = layouts.common;

      break;
  }

  console.log(layoutComponent, "layoutcom");
  route.meta.layoutComponent = layoutComponent;
};
