import { createRouter, createWebHistory } from 'vue-router'
import AuthPage from "@/components/User/AuthPage.vue";
import RegisterPage from "@/components/User/RegisterPage.vue";
import ProfilePage from "@/components/Profile/ProfilePage.vue";
import MainPage from "@/components/MainPage.vue";
import NewsPage from '@/components/NewsPage/NewsPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    },
    {
      path: '/login',
      name: 'AuthPage',
      component: AuthPage
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage
    },
    {
      path: '/profile',
      name: 'ProfilePage',
      component: ProfilePage
    },
    {
      path: '/news',
      name: 'NewsPage',
      component: NewsPage
    }
  ]
})

export default router
