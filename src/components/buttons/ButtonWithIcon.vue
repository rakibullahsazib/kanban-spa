<template>
  <button
    :disabled="disabled"
    class="flex-center text-grey-9 font-semibold rounded-full text-sm py-2 px-4 focus:outline-none transition-colors duration-300"
    :class="{
      'bg-highlight' : !type,
      'bg-red' : type === 'danger',
    }"
  >
    <img v-if="icon" :src="`/assets/icons/${icon}`" alt="" class="absolute left-4 w-4 h-4">
    <p class="">
      {{ title }}
    </p>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  title?: string,
  icon?: string,
  disabled?: boolean,
  type?: 'primary' | 'danger'
}>()
</script>

<style scoped>
button:disabled{
  background-color: #aaa;
  opacity: 0.5;
}
</style>