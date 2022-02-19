<template>
  <div class="flex">
    <SidebarMenu />
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import SidebarMenu from '../components/page-sections/SidebarMenu.vue';

</script>

<style scoped>

</style>