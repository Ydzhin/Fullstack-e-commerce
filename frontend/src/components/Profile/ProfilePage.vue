<script setup lang="ts">
import { onMounted, type Ref, ref, watchEffect } from "vue";
import axios from "axios";
import { decode } from "jwt-js-decode";
import Post from "@/components/Profile/Post/Post.vue";

interface userData {
  _id?: string;
  password?: string;
  login?: string;
}

const userData: Ref<userData> = ref({});

const token: string = localStorage.getItem("token") ?? "";
let jwt;
let id: string = "";

if (token) {
  jwt = decode(token);;
  id = jwt.payload.id;
}

async function getUserData() {
  if (token) {
    axios.get(`http://localhost:3001/user/get_by_id/${id}`).then((resp) => {
      userData.value = resp.data;
    }).catch((err) => {
      console.log(err);
    });
  }
}

onMounted(() => {
  getUserData();
});

</script>

<template>
  <div class="d-flex justify-content-center">
    <div class="col-xl-9 col-12" v-if="token">
      <div class="banner">
        <img src="https://i.pinimg.com/564x/17/40/b0/1740b0c94e4457fde617fb133d622b35.jpg" alt="banner"
          class="bannerImg">
        <div class="row">
          <div class="col-xl-3 col-12 d-flex justify-content-center">
            <img src="https://i.pinimg.com/736x/17/fc/60/17fc600d9bfd9f4aff6bdd718e82df98.jpg" alt="avatar"
              class="avatar">
          </div>
          <div class="col-xl-8 col-12 main-data">
            <p class="login">{{ userData.login }}</p>
          </div>
        </div>
        <div class="post">
          <Post :id="id" :login="userData.login" />
        </div>
      </div>
    </div>
    <div v-else class="mt-3">
      <h4 class="go-login">Вы не авторизованы,
        <RouterLink to="/login">Войти</RouterLink>
      </h4>
    </div>
  </div>
</template>

<style scoped>
.go-login {
  color: aliceblue;
}

.bannerImg {
  width: 100%;
  outline: 3px solid #626262;
  object-fit: cover;
  height: 300px;
  border-radius: 25px;
}

.button {
  border: none;
  outline: 1px solid #2b2b2b;
  height: 50px;
  width: 200px;
  border-radius: 10px;
  background: none;
  color: aliceblue;
  font-size: 19px;
}

.button:hover {
  transform: scale(1.05);
  transition: transform 0.5s;
}

.avatar {
  height: 200px;
  width: 200px;
  position: relative;
  top: -100px;
  z-index: 1;
  border-radius: 50%;
  object-fit: cover;
  left: 30px;
}

.main-data {
  padding: 15px 0 0 40px;
}

.login {
  font-size: 30px;
  font-weight: 500;
  color: aliceblue;
}

@media screen and (max-width: 768px) {
  .avatar {
    left: 0;
    height: 180px;
    width: 180px;
  }

  .bannerImg {
    height: 200px;
  }

  .main-data {
    top: -100px;
    position: relative;
    text-align: center;
    padding: 15px 0 0 0;
  }

  .post {
    position: relative;
    top: -80px;
  }
}
</style>