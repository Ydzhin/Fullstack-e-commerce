<template>
  <div class="wrapper">
    <div class="container-form">
      <form
        class="form d-flex justify-content-center align-items-center"
        @submit.prevent="auth"
      >
        <div class="col-xl-8 col-12">
          <div class="text-center">
            <p class="main-title">
              Авторизация
            </p>
          </div>
          <div class="row mt-4">
            <div class="col-12">
              <label>
                <p class="label">Логин <span class="title">*</span></p>
                <input
                  v-model="login"
                  type="text"
                  placeholder="Введите логин"
                >
              </label>
            </div>
            <div class="col-12 mt-3">
              <label>
                <p class="label">Пароль <span class="title">*</span></p>
                <input
                  v-model="password"
                  type="text"
                  placeholder="Введите пароль"
                >
              </label>
            </div>
            <RouterLink to="/profile">
              <p class="mt-3">
                <span class="go-profile">Перейти к профилю</span>
              </p>
            </RouterLink>
            <div class="col-12">
              <div class="row">
                <div class="col-12">
                  <transition name="fade">
                    <div v-if="isSuccess">
                      <Alert
                        text="Успешная авторизация!"
                        type="success"
                      />
                    </div>
                  </transition>
                  <transition name="fade">
                    <div v-if="isError">
                      <Alert
                        text="Неизвестная ошибка"
                        type="danger"
                      />
                    </div>
                  </transition>
                </div>
                <div class="col-6">
                  <button class="mt-4 button">
                    Войти
                  </button>
                </div>
                <div class="col-6">
                  <RouterLink to="/register">
                    <button class="mt-4 button-register">
                      Регистрация
                    </button>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
// import axios from "axios";
// import { storeToRefs } from "pinia";
import { type Ref, ref } from "vue";

import Alert from "@/components/ui/Alert.vue";
import { router } from "@/router";
import { useAuthStore } from "@/stores/auth";

// import { setItem } from "@/utils/localStorage";

// import { api } from "../../Constants";

const authStore = useAuthStore();

const { authUser } = authStore;
const login: Ref<string> = ref("");
const password: Ref<string> = ref("");
const isSuccess: Ref<boolean> = ref(false);
const isError: Ref<boolean> = ref(false);

// function error() {
//   isSuccess.value = false;
//   isError.value = true;

//   setInterval(() => {
//     isError.value = false;
//   }, 10000);
// }

// function success() {
//   isSuccess.value = true;
//   isError.value = false;

//   setInterval(() => {
//     isSuccess.value = false;
//   }, 10000);
// }

async function auth() {
  const data = { login: login.value, password: password.value };
  await authUser(data);
  router.push({ name: "home" });
}

</script>
<style scoped>
a {
  text-decoration: none;
  color: black;
  width: 45%;
}

.wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.go-profile {
  color: rgb(163, 163, 163);
}

.main-title {
  font-size: 30px;
  color: aliceblue;
}

.button {
  outline: 1px solid #2b2b2b;
  height: 50px;
  width: 200px;
  border-radius: 10px;
  color: aliceblue;
  font-size: 19px;
}

.button:hover {
  transform: scale(1.05);
  transition: transform 0.5s;
}

.button-register {
  height: 50px;
  border: none;
  background: none;
  color: rgb(207, 207, 207);
  width: 200px;
}

.container-form {
  height: 700px;
  background: rgba(34, 34, 34, 0.518);
  border-radius: 25px;
  width: 45%;
  display: flex;
  align-content: center;
  justify-content: center;
}

.title {
  color: red;
}

input {
  width: 400px;
  padding-left: 15px;
  outline: 1px solid #2a2a2a;
  color: rgb(254, 254, 254);
  height: 40px;
  border-radius: 10px;
}

input:focus {
  transform: scale(1.03);
  background: rgba(47, 47, 47, 0.46);
  transition: transform 0.4s ease-in-out, background 0.4s ease-in-out;
}

input::placeholder {
  color: rgb(213, 213, 213)
}

.label {
  font-weight: 500;
  margin-bottom: 10px;
  color: aliceblue;
}

@media screen and (max-width: 768px) {
  .form, .container-form {
    width: 100%;
  }
  .container-form {
    height: 800px;
  }
  input {
    height: 50px;
    font-size: 20px;
  }
}
</style>
