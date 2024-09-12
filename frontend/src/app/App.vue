<template>
  <div class="wrapperApp">
    <Suspense>
      <auth-layer />
    </Suspense>
  </div>
</template>
<script setup lang="ts">
import { AuthLayer } from "@/shared/ui/auth";
</script>

<style>
html{
  height: 100%;
}
body{
  height: 100%;
}
#app{
  height: 100%;
}
.wrapperApp {
  background-image: url("https://i.pinimg.com/564x/3c/a9/7e/3ca97e8538585ba87eed3b0ce36960f6.jpg");
  width: 100%;
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
  height: 100%;
  /* height: 973px; */
}

</style>
