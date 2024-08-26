<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  }
});

const typeClass: string = "alert alert-" + props.type;
</script>

<template>
  <div :class="typeClass" role="alert">
    {{ props.text }}
  </div>
</template>

<style scoped>

</style>