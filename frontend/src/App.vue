<template>
  <div class="wrapperApp">
    <div class="content">
      <!-- <HeaderApp v-if="this.$route.name !== 'AuthPage' && this.$route.name !== 'RegisterPage'" /> -->
      <div class="container mt-4">
        <RouterView />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

import HeaderApp from "./components/Header/HeaderApp.vue";
</script>

<style>
.alert {
  width: 400px;
}

button {
  background: none;
  border: none;
}

input,
textarea {
  border: none;
  background: none;
}

body {
  background-color: #f9f9f9;
  overflow: hidden;
}

.wrapperApp {
  background-image: url("https://i.pinimg.com/564x/3c/a9/7e/3ca97e8538585ba87eed3b0ce36960f6.jpg");
  width: 100%;
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
  height: 973px;
}

.content {
  position: absolute;
  top: 0;
  height: 950px;
  z-index: 2;
  width: 100%;
  overflow-x: hidden;
  overflow: scroll;
}

.content::-webkit-scrollbar {
  display: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .50s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
