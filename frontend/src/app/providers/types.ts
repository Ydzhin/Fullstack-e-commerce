import type { AppRoutes } from "./AppRoutes";
import type { AppPages } from "./router";
import type { InjectionKey } from "vue";

export const EAppProviders = {
  AppRoutes: Symbol() as InjectionKey<typeof AppRoutes>,
  AppPages: Symbol() as InjectionKey<typeof AppPages>,
};
