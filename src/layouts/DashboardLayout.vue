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
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import SidebarMenu from '../components/page-sections/SidebarMenu.vue';
const route = useRoute()
console.log(route.name)
watch(() => route.name, (nameTo) => {
  // Set document title
  let title = import.meta.env.VITE_APP_TITLE?.toString()
  if (nameTo) {
    title += ' | ' + nameTo.toString()
  }
  document.title = title || 'Kanban'

})
</script>

<style scoped>

</style>