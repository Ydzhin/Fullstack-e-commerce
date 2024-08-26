<script setup lang="ts">
import axios from "axios";
import { onMounted, type Ref, ref } from "vue";
import PostPage from "@/components/Profile/Post/PostPage/PostPage.vue";
import {api} from "../../../../Constants";

const text: Ref<string> = ref("");
const isSuccess: Ref<boolean> = ref(false);
const isError: Ref<boolean> = ref(false);
const isBold: Ref<boolean> = ref(false);

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  login: {
    type: String,
    required: true,
    default: ""
  }
});

interface posts {
  _id: String;
  text: String;
  author_id: String;
  createdAt: Date;
}

const posts = ref<posts[]>([]);

function error() {
  isSuccess.value = false;
  isError.value = true;

  setInterval(() => {
    isError.value = false;
  }, 10000);
}

function success() {
  isError.value = false;
  isSuccess.value = true;

  setInterval(() => {
    isSuccess.value = false;
  }, 10000);
}

async function getPosts() {
  await axios.get(`${api}/post/get_by_userId/${props.id}`).then((resp) => {
    if (resp.data !== undefined) {
      posts.value = resp.data;
      console.log(posts.value)
    } else {
      return null;
    }
  }).catch((err) => {
    console.log(err);
  });
}

async function deletePost(post_id: string) {
  await axios.delete(`${api}/post/delete/${post_id}`).then((resp) => {
    console.log(resp.data);
  }).catch((err) => {
    console.log(err);
  });

  getPosts();
}

onMounted(() => {
  getPosts();
});

async function createPost(event: Event) {
  event.preventDefault();

  if (text.value.length < 6) {
    error();
  } else {
    axios.post(`${api}/post/create`, {
      userId: props.id,
      description: text.value,
      title: 'похуй'
    }).then(() => {
      getPosts();
      success();
    }).catch((err) => {
      console.log(err);
      error();
    });

    text.value = "";
  }
}

</script>

<template>
  <form @submit="createPost">
    <textarea type="text" placeholder="Расскажите о своем настроении" v-model="text" :class="{
      error: isError,
      success: isSuccess,
      bold: isBold
    }" />
    <transition name="fade">
      <p class="feedback-error" v-if="isError">Слишком короткий текст</p>
    </transition>
    <div class="mt-2">
      <transition name="fade">
        <p class="feedback-success" v-if="isSuccess">Успешно!</p>
      </transition>
    </div>
    <button class="button">Опубликовать</button>
  </form>

  <div class="mt-5 mb-5">
    <div v-for="(post, index) in posts" :key="index">
      <PostPage
        :user_id="props.id"
        :createdAt="post.createdAt" 
        :description="post.description.toString()"
        :login="props.login" 
        :deletePost="deletePost"
        :id="post.id.toString()"
        :getPosts="getPosts"
      />
    </div>
  </div>
</template>

<style scoped>
.feedback-error {
  color: rgb(254, 55, 55);
  font-weight: 300;
}

.feedback-success {
  color: rgb(108, 252, 132);
  font-weight: 300;
}

textarea {
  width: 900px;
  padding: 10px 0 0 15px;
  outline: 1px solid #2a2a2a;
  color: rgb(254, 254, 254);
  height: 80px;
  border-radius: 15px;
  font-size: 18px;
}

textarea:focus {
  transform: scale(1.02);
  background: rgba(47, 47, 47, 0.46);
  transition: transform 0.4s ease-in-out, background 0.4s ease-in-out;
}

.bold {
  font-weight: bold;
}

textarea::placeholder {
  color: rgb(213, 213, 213)
}

.error {
  outline: 1px solid rgb(254, 55, 55);
}

.success {
  outline: 1px solid rgb(108, 252, 132);
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

@media screen and (max-width: 768px) {
  textarea {
    width: 100%;
  }
  .button {
    width: 100%;
  }
}
</style>