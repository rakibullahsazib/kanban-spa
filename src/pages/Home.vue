<template>
  <div>
    <HomeSldebarSlider></HomeSldebarSlider>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRootStore } from '../store/root.store'

import HomeSldebarSlider from '../components/page-sections/home/HomeSidebarSlider.vue';

const rootStore = useRootStore()

// let currentDropdown = computed(() => rootStore.currentDropdown)
// const toggleCurrentDropdown = rootStore.toggleCurrentDropdown
// onMounted(() => {
//   window.addEventListener('click', function () {
//     rootStore.toggleCurrentDropdown('')
//   })
// })
</script>