<script setup lang="ts">
import axios from "axios";
import { api } from "../../../../Constants";
import { onMounted, ref, type Ref } from "vue";
import Heart from "@/components/icons/Heart.vue";
import dayjs from "dayjs";
import { decode } from "jwt-js-decode";

interface userData {
  _id?: string;
  password?: string;
  login?: string;
}


interface likes {
  _id: String;
  user_id: String;
  post_id: String;
  createdAt: Date;
}

const props = defineProps({
  author_id: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: ""
  },
  _id: {
    type: String,
    required: true,
    default: ""
  }
});

const userData: Ref<userData> = ref({});

const likesPost = ref<likes[]>([]);
const wrongLike = ref(false);
const errorToken = ref(false);
const userPostData: Ref<userData> = ref<userData>({});

const token: string = localStorage.getItem("token") ?? "";
let jwt;
let id: string = "";

if (token) {
  jwt = decode(token);;
  id = jwt.payload.id;
}

async function getUserDataByPost() {
  await axios.get(`${api}/get_user_data_by_post`, {
    params: {
      author_id: props.author_id,
    }
  }).then((resp) => {
    userPostData.value = resp.data;
  }).catch((err) => {
    console.log(err);
  });
}

async function getUserData() {
  if (token) {
    axios.get(`${api}/get_user_data?id=${id}`).then((resp) => {
      userData.value = resp.data;
    }).catch((err) => {
      console.log(err);
    });
  }
}

async function getLikesByPost() {
  await axios.get(`${api}/get_likes_by_post`, {
    params: {
      post_id: props._id
    }
  }).then((resp) => {

    likesPost.value = resp.data;
    for (let i = 0; i < likesPost.value.length; i++) {
      if (likesPost.value[i].user_id == userData.value._id) {
        wrongLike.value = true;
      } else {
        wrongLike.value = false;
      }
    }
  }).catch((err) => {
    console.log(err);
  });

}

async function like() {

  if (token) {
    if (!wrongLike.value) {
      await axios.post(`${api}/create_like`, {
        post_id: props._id,
        user_id: userData.value._id
      });
    }
    else {
      await axios.post(`${api}/delete_like`, {
        post_id: props._id
      }).then(() => {
        wrongLike.value = false;
      });
    }
  } else {
    errorToken.value = true;
  }

  getLikesByPost();
}

onMounted(() => {
  getUserDataByPost();
  getUserData();
  getLikesByPost();
});

function getTimePost(time: Date) {
  return dayjs(time).format('DD.MM.YYYY HH:mm');
}

</script>

<template>
  <div class="d-flex justify-content-center">
    <div class="post">
      <div class="row">
        <div class="col-1">
          <img src="https://i.pinimg.com/736x/17/fc/60/17fc600d9bfd9f4aff6bdd718e82df98.jpg" alt="avatar"
            class="avatar">
        </div>
        <div class="col-xl-8 col-8 px-5 main-data">
          <p class="login">{{ userPostData.login }}</p>
          <p class="date">{{ getTimePost(props.createdAt) }}</p>
        </div>
      </div>
      <p class="text mt-3">{{ props.text }}</p>
      <div class="likes pt-3">
        <transition name="fade">
          <Heart @click="like" :is-wrong="wrongLike" />
        </transition>
        <transition name="fade">
          <span class="count-likes px-2" :class="{
            red: wrongLike
          }">
            {{ likesPost.length }}
          </span>
        </transition>
        <transition name="fade">
          <div v-if="errorToken" class="error-like-token mt-3">
            Чтобы оценивать записи,
            <RouterLink to="/login">
              Авторизируйтесь
            </RouterLink>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.count-likes {
  color: gray;
}

.error-like-token, .error-like-token a {
  color: rgb(226, 32, 32);
}

.login,
.date,
.text {
  color: aliceblue;
  margin: 0;
}

.text {
  font-size: 20px;
}

.date {
  font-size: 16px;
  color: #9c9c9c;
}

.login {
  font-size: 28px;
}

.post {
  padding: 25px;
  outline: 1px solid #2a2a2a;
  width: 900px;
  background: rgba(43, 43, 43, 0.44);
  border-radius: 15px;
  margin-bottom: 55px;
}

.avatar {
  border-radius: 50%;
  height: 80px;
  width: 80px;
  object-fit: cover;
}

input {
  width: 100%;
  background: none;
  padding: 10px 0 0 15px;
  border: none;
  outline: 1px solid #2a2a2a;
  color: rgb(254, 254, 254);
  height: 40px;
  border-radius: 15px;
  font-size: 17px;
}

input:focus {
  transform: scale(1.02);
  background: rgba(47, 47, 47, 0.46);
  transition: transform 0.4s ease-in-out, background 0.4s ease-in-out;
}

@media screen and (max-width: 768px) {
  .post {
    width: 100%;
  }

  .login,
  .date,
  .text {
    font-size: 17px;
  }

  .avatar {
    height: 70px;
    width: 70px;
  }

  .main-data {
    margin-left: 20px;
  }
}
</style>