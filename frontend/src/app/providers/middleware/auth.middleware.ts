import { storeToRefs } from "pinia";

import { useAuthStore } from "@/app/providers/stores";

import type { RouteLocationNormalized } from "vue-router";

export const authMiddleware = async (to:RouteLocationNormalized, from: RouteLocationNormalized) => {
  const authStore = useAuthStore();

  const { hasToken, getUserByToken } = authStore;
  const { isLoggedIn } = storeToRefs(authStore);
  // const authStore = useAuthStore();
  // const vendorStore = useVendorStore();

  // const { vendorInfo, vendorId } = storeToRefs(vendorStore);
  // const {
  //   getAccessTokenSilently,
  //   idTokenClaims,
  //   isAuthenticated,
  // } = auth0;
  // const vendorIdFromParams = Number(route.params?.vendorId);

  try {
    // const token: string = localStorage.getItem("token") ?? "";
    // let jwt;
    // let id: string = "";

    // if (token.length) {
    //   jwt = decode(token);
    //   id = jwt?.payload.id;
    // }
    console.log("my");

    if (hasToken) {
      await getUserByToken();
      console.log("lol");

      return true;
    }

    if (!isLoggedIn.value && to.path !== "/login") {
      console.log(to.path, from.path, "nn");

      return "./login";
    }
  } catch (err) {
    console.error(err);
  }
};
