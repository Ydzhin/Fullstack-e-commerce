import { storeToRefs } from "pinia";

import { RouteNameEnum } from "@/common/enums/router-name.enum";
import { useAuthStore } from "@/modules/auth/store";
import { useVendorStore } from "@/modules/vendor/store";
import { router } from "@/router";
import { useStore } from "@/store";

import type { RouteLocationNormalized } from "vue-router";

export const redirectMiddleware = async (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  const authStore = useAuthStore();
  const store = useStore();
  const vendorStore = useVendorStore();
  const { vendors } = storeToRefs(vendorStore);
  const goHome = !authStore.freeAccessRoutes.includes(to?.name as RouteNameEnum) && !vendors.value.length;

  if (to.path !== from.path) {
    const { loadingDisabled } = storeToRefs(store);
    // we need to set default value for loadingDisabled because on some page we set it to true
    loadingDisabled.value = false;
  }

  if (goHome) {
    // TODO https://hbidigital.atlassian.net/browse/VP-3469
    // TODO https://hbidigital.atlassian.net/browse/VP-3493
    // router.push({ name: RouteNameEnum.HOME });
  }

  if (authStore.needToSignNda(vendors.value.length)) {
    router.push({ name: RouteNameEnum.NDA });
  }
};
