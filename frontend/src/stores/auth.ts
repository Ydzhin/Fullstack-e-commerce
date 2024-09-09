import axios from "axios";
import { decode } from "jwt-js-decode";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

import { api } from "@/Constants";
import { setItem } from "@/utils/localStorage";

interface userData {
  _id?: string;
  password?: string;
  login?: string;
}

export const useAuthStore = defineStore("auth", () => {
  const currentUser = ref<userData>(null);
  const isLoggedIn = ref<boolean>(false);
  // const isLoggedIn = computed(() => {
  //   return !!currentUser.value.login;
  // });

  // async function authUser() {
  //   let data = currentUser.value;
  //   const { data: user } = await api.auth.authMeV1({});

  //   data = user;

  //   if (data) {
  //     currentUser.value = data;
  //   }
  // }
  async function authUser({ login, password }: { login: string; password: string }): Promise<void> {
    try {
      const resp = await axios.post(`${api}/auth/sign_in`, {
        login,
        password,
      });
      const { token } = resp.data;
      setItem("token", token);

      if (token) {
        isLoggedIn.value = true;
      }
    } catch (err) {
      console.log("lalka");
      error();
    }
  }

  const hasToken = computed(() => {
    const token: string = localStorage.getItem("token") ?? "";

    return !!token;
  });

  async function getUserByToken() {
    const token: string = localStorage.getItem("token")!;
    const jwt = decode(token);
    const { id } = jwt.payload;
    axios.get(`http://localhost:3001/user/get_by_id/${id}`).then((resp) => {
      currentUser.value = resp.data;
      isLoggedIn.value = true;
    }).catch((err) => {
      console.log(err);
    });
  }

  return {
    currentUser, isLoggedIn, authUser, hasToken, getUserByToken,
  };
});
