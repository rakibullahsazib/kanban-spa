<template>
  <div>
    <HomeSldebarSlider></HomeSldebarSlider>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useRootStore } from '../store/root'

import HomeSldebarSlider from '../components/page-sections/home/HomeSldebarSlider.vue';

const mainStore = useRootStore()

onMounted(() => {
  window.addEventListener('click', function () {
    mainStore.toggleCurrentDropdown('')
  })
})
</script>