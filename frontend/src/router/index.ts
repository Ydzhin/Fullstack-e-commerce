// import { createRouter, createWebHistory } from "vue-router";

// import MainPage from "@/components/MainPage.vue";
// import NewsPage from "@/components/NewsPage/NewsPage.vue";
// import ProfilePage from "@/components/Profile/ProfilePage.vue";
// import AuthPage from "@/components/User/AuthPage.vue";
// import RegisterPage from "@/components/User/RegisterPage.vue";
// import { authMiddleware } from "@/middleware/auth.middleware";
// // import { redirectMiddleware } from '@/middleware/redirect.middleware';
// // import { layoutMiddleware } from '@/middleware/layout.middleware';

// export const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     {
//       path: "/",
//       name: "home",
//       component: MainPage,
//     },
//     {
//       path: "/login",
//       name: "AuthPage",
//       component: AuthPage,
//     },
//     {
//       path: "/register",
//       name: "RegisterPage",
//       component: RegisterPage,
//     },
//     {
//       path: "/profile",
//       name: "ProfilePage",
//       component: ProfilePage,
//     },
//     {
//       path: "/news",
//       name: "NewsPage",
//       component: NewsPage,
//     },
//   ],
// });
// // router.beforeEach(layoutMiddleware);
// // router.beforeEach(redirectMiddleware);
// router.beforeEach(authMiddleware);
