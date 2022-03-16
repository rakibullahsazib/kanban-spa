<template>
  <div>
    <HomeSldebarSlider></HomeSldebarSlider>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRootStore } from '../store/root'
import SingleSelectDropdown from '../../inputs/dropdowns/SingleSelectDropdown.vue';

import HomeSldebarSlider from '../components/page-sections/home/HomeSldebarSlider.vue';

const rootStore = useRootStore()

let currentDropdown = computed(() => rootStore.currentDropdown)
const toggleCurrentDropdown = rootStore.toggleCurrentDropdown
onMounted(() => {
  window.addEventListener('click', function () {
    rootStore.toggleCurrentDropdown('')
  })
})
</script>