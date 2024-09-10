<template>
  <component
    :is="layout"
  >
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const layout = computed(() => route.meta.layoutComponent);
console.log(layout.value, "layout");
</script>
