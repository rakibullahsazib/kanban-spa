<template>
  <button
    :disabled="disabled"
    class="block text-grey-9 font-semibold bg-highlight rounded-full text-xs py-3 px-8 focus:outline-none transition-300"
  >
    {{ title }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  title: string,
  disabled?: boolean
}>()
</script>

<style scoped>
button:disabled{
  background-color: #aaa;
  opacity: 0.5;
}
</style>