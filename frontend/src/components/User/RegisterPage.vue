<script setup lang="ts">
import { type Ref, ref, watchEffect } from "vue";
import axios from "axios";
import Alert from "@/components/ui/Alert.vue";
import {api} from "../../../Constants";

const login: Ref<string> = ref("");
const password: Ref<string> = ref("");
const isSuccess: Ref<boolean> = ref(false);
const isError: Ref<boolean> = ref(false);

function error() {
  login.value = "";
  password.value = "";

  isSuccess.value = false;
  isError.value = true;

  setInterval(() => {
    isError.value = false;
  }, 5000);

}

function success() {
  login.value = "";
  password.value = "";

  isError.value = false;
  isSuccess.value = true;

  setInterval(() => {
    isSuccess.value = false;
  }, 5000);
}


async function register(event: Event) {
  event.preventDefault();

  if (login.value == "" || password.value == "") {
    error();
  } else {
    await axios.post(`${api}/user/create`, {
      login: login.value,
      password: password.value
    }).then(() => {
      success();
    }).catch(() => {
      error();
    });
  }
}

</script>

<template>
  <div class="wrapper">
    <div class="container-form">
      <form class="form d-flex justify-content-center align-items-center" @submit="register">
        <div class="col-xl-8 col-12">
          <div class="text-center">
            <p class="main-title">Регистрация</p>
          </div>
          <div class="row mt-4">
            <div class="col-12">
              <label>
                <p class="label">Логин <span class="title">*</span></p>
                <input type="text" placeholder="Введите логин" v-model="login">
              </label>
            </div>
            <div class="col-12 mt-4">
              <label>
                <p class="label">Пароль <span class="title">*</span></p>
                <input type="text" placeholder="Введите пароль" v-model="password">
              </label>
            </div>
            <RouterLink to="/login">
              <p class="mt-5 go-login">
                <span class="have-account">Есть аккаунт?</span>
                <span class="mx-1 login">Войти</span>
              </p>
            </RouterLink>
            <div class="col-12">
              <transition name="fade">
                <div v-if="isSuccess">
                  <Alert text="Успешная регистрация!" type="success" />
                </div>
              </transition>
              <transition name="fade">
                <div v-if="isError">
                  <Alert text="Неизвестная ошибка" type="danger" />
                </div>
              </transition>
            </div>
          </div>
          <div class="col-12">
            <button class="mt-3 button">Регистрация</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.main-title {
  font-size: 30px;
  color: aliceblue;
}

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

.button {
  outline: 1px solid #2b2b2b;
  height: 50px;
  width: 400px;
  border-radius: 10px;
  color: aliceblue;
  font-size: 19px;
}


.button:hover {
  transform: scale(1.05);
  transition: transform 0.5s;
}

.have-account {
  color: #e2e2e2;
  font-weight: 500;
}
.login {
  color: rgb(160, 160, 160);
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
@media screen and (max-width: 768px){
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