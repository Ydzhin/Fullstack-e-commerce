<script setup lang="ts">

</script>

<template>
  <div class="d-flex justify-content-center mt-2">
    <div>
      <h2>Привет. Это простая авторизация на Vue3 + Express + MongoDB</h2>
      <div class="d-flex justify-content-center mt-2 gap-2 mt-4">
        <RouterLink to="/login">
          <button class="button">Войти</button>
        </RouterLink>
        <RouterLink to="/register">
          <button class="button">Регистрация</button>
        </RouterLink>
        <RouterLink to="/profile">
          <button class="button">Профиль</button>
        </RouterLink>
        <RouterLink to="/news">
          <button class="button">Новости</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.button {
  width: 200px;
  border: 1px solid #646464;
  color: #646464;
  background: none;
  border-radius: 40px;
  height: 35px;
}
.button:hover {
  border: 1px solid #0fa90f;
  color: #0fa90f;

  transition: border 0.4s ease-in-out, color 0.4s ease-in-out;
}
</style>