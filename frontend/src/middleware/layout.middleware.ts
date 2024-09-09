import { LayoutEnum } from "@/common/enums/layout.enum";

import type { RouteLocationNormalized } from "vue-router";

export const layoutMiddleware = async (route: RouteLocationNormalized): Promise<void> => {
  const layout = route?.meta?.layout || LayoutEnum.default;
  const layoutComponent = await import(
    /* @vite-ignore */ `../layouts/${layout}.vue`
  );

  route.meta.layoutComponent = layoutComponent.default;
};
