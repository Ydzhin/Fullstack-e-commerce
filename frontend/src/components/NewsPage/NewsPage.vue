<script setup lang="ts">
import axios from 'axios';
import { decode } from 'jwt-js-decode';
import { onMounted, ref, type Ref } from 'vue';
import { api } from '../../../Constants'
import News from "@/components/NewsPage/News/News.vue";

interface IPostsData {
    _id?: string;
    text?: string;
    author_id?: string;
    createdAt?: Date;
}

const postsData: Ref = ref<IPostsData[]>([]);

async function getPosts() {
    axios.get(`${api}/get_all_posts`).then((resp) => {
        postsData.value = resp.data;
    }).catch((err) => {
        console.log(err);
    });
}

onMounted(() => {
    getPosts();
});


</script>

<template>
    <div>
        <h3 class="mt-3 text-center">Недавние записи</h3>
        <div class="mt-5">
            <News v-for="(item) in postsData" :_id="item._id" :author_id="item.author_id" :text="item.text"
                :created-at="item.createdAt" />
        </div>
    </div>
</template>

<style scoped>
h3 {
    color: aliceblue;
}
</style>