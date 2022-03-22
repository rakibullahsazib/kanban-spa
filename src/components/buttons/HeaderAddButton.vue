<template>
  <div class="pb-1.5 flex space-x-2 items-center font-semibold text-sm border-b border-grey-5">
    <h4>
      {{ title }}
    </h4>
    <button
      @click="$emit('add')"
      :data-testid="`${title}-add-btn`"
    >
      <img class="w-4 h-4" src="/assets/icons/plus-circle.svg" alt="Add">
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<style scoped>

</style>