<template>
  <button
    :disabled="disabled"
    class="block text-grey-9 font-semibold rounded-full text-xs py-3 px-8 focus:outline-none transition-colors duration-300"
    :class="{
      'bg-highlight' : !type,
      'bg-red' : type === 'danger',
    }"
  >
    {{ title }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  title: string,
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