<template>
  <div class="layout__secured">
    <TheHeader />
    <div class="layoout__secured-main min-h-full">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { TheHeader } from "@/shared/ui/headers";
</script>
