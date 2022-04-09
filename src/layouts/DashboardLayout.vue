<template>
  <div class="flex">
    <SidebarMenu />
    <router-view v-slot="{ Component, route }">
      <transition name="route-fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import SidebarMenu from '../components/page-sections/SidebarMenu.vue';
</script>

<style scoped>

</style>