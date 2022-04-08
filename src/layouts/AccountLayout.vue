<template>
  <div class="flex">
    <div class="relative flex-grow">
      <img class="h-screen" src="/assets/images/login-background.jpg" alt="">
      <p class="absolute left-4 bottom-2 text-white opacity-50 text-xs">
        Photo by <a class="underline" href="https://unsplash.com/@alexlionco?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alex Lion</a> on <a class="underline" href="https://unsplash.com/s/photos/project?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </p>
      <div class="angle absolute right-0 top-0"></div>
    </div>
    <div class="w-1/2 h-screen overflow-y-auto flex items-center" style="min-width: 40rem;">
      <router-view v-slot="{ Component, route }">
          <component :is="Component" :key="route.path" class="mx-auto" />
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
  .angle {
    width: 0;
    height: 0;
    border-bottom: 100vh solid white;
    border-left: 100px solid transparent;
  }
  
</style>