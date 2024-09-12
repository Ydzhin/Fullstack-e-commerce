<template>
  <div>
    <h3 class="mt-3 text-center">
      Недавние записи
    </h3>
    <div class="mt-5">
      <News
        v-for="(item, index) in postsData"
        :key="index"
        :_id="item._id"
        :author_id="item.author_id"
        :text="item.text"
        :created-at="item.createdAt"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { decode } from "jwt-js-decode";
import { onMounted, ref, type Ref } from "vue";

import { News } from "@/features/news";

interface IPostsData {
  _id?: string;
  text?: string;
  author_id?: string;
  createdAt?: Date;
}

const postsData: Ref = ref<IPostsData[]>([]);

async function getPosts() {
  axios.get(`${import.meta.env.VITE_APP_API}/get_all_posts`).then((resp) => {
    postsData.value = resp.data;
  }).catch((err) => {
    console.log(err);
  });
}

onMounted(() => {
  getPosts();
});

</script>

<style scoped>
h3 {
    color: aliceblue;
}
</style>
