import { AppPages } from "../router";

import type { VueElement } from "vue";

interface IRoute<T extends object = {}> {
  name: string
  params: T
}

export enum LayoutEnum {
  clean = "clean",
  common = "common",
  secured = "secured",
}

declare module "vue-router" {
  interface RouteMeta {
    isAvailable: (value?: any) => boolean;
    title: string;
    layout?: LayoutEnum;
    layoutComponent?: VueElement;
    permissions?: string[];
    hidden?: boolean;
    badges?: number;
    url?: string;
  }
}

export class AppRoutes {
  private constructor() {}

  static getCatalogCategory(category: string) {
    return getRoute(AppPages.category, { category });
  }

  static getProduct(id: number) {
    return getRoute(AppPages.product, { id });
  }

  static getCart() {
    return getRoute(AppPages.cart, {});
  }

  static getLogin() {
    return getRoute(AppPages.login, {});
  }

  static getSignUp() {
    return getRoute(AppPages.signUp, {});
  }

  static getPersonalArea() {
    return getRoute(AppPages.personalArea, {});
  }

  static getFavorites() {
    return getRoute(AppPages.favorites, {});
  }

  static getOrders() {
    return getRoute(AppPages.orders, {});
  }

  static getDelivery() {
    return getRoute(AppPages.delivery, {});
  }

  static getArchive() {
    return getRoute(AppPages.archive, {});
  }

  static getProfile() {
    return getRoute(AppPages.profile, {});
  }

  static getWallet() {
    return getRoute(AppPages.wallet, {});
  }

  static getUIKit() {
    return getRoute(AppPages.UIKit, {});
  }

  static getMain() {
    return getRoute(AppPages.main, {});
  }

  static getNotFound() {
    return getRoute(AppPages.notFound, {});
  }
}

// TODO необязательный 2й параметр
function getRoute<T extends object = {}>(name: string, params: T): IRoute<T> {
  return {
    name,
    params,
  };
}
