<script setup lang="ts">
import axios from 'axios';
import { decode } from 'jwt-js-decode';
import { onMounted, ref, type Ref } from 'vue';
import {api} from "../../../Constants";
interface userData {

    _id?: string;
    password?: string;
    login?: string;
}


const userData: Ref<userData> = ref<userData>({});

const token: string = localStorage.getItem("token") ?? "";
let jwt;
let id: string = "";

if (token) {
    jwt = decode(token);;
    id = jwt.payload.id;
}


async function getUserData() {
    if (token) {
        axios.get(`${api}/user/get_by_id/${id}`).then((resp) => {
            userData.value = resp.data;
        }).catch((err) => {
            console.log(err);
        });
    }
}

function logOut() {
    if (token) {
        localStorage.removeItem("token");
        location.reload();
    }
}

onMounted(() => {
    getUserData();
})

</script>

<template>


    <header>
        <a href="#" class="header-link" @click="logOut">Log out</a>
        <RouterLink to="/news" class="router-link-header">
            <h2 className="main-title">jwt</h2>
        </RouterLink>
        <RouterLink v-if="token" to="/profile" class="router-link-header header-link">
            {{ userData.login }}
        </RouterLink>

        <RouterLink v-else to="/profile" class="router-link-header header-link">
            Profile
        </RouterLink>
    </header>
</template>

<style scoped>
header {
    display: flex;
    justify-content: center;
    height: 75px;
    gap: 75px;
    align-items: center;
}

.router-link-header {
    text-decoration: none;
}

.main-title {
    font-weight: 100;
    font-size: 40px;
    color: white;
    text-decoration: none;
}

.header-link {
    color: white;
    font-size: 24px;
    font-weight: 300;
    text-decoration: none;
    background: none;
}

.header-link:hover,
.main-title:hover {
    color: rgb(218, 218, 218);
    cursor: pointer;
    transition: color 0.2s;
}
</style>