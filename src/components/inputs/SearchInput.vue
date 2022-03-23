<template>
  <div class="flex items-center space-x-2">
    <input
      @input="onInputChange"
      type="text"
      :id="id"
      :placeholder="placeholder"
      class=" flex-grow w-full focus:outline-none"
      data-testid="search-input"
    >
    <label :for="id" class="block flex-shrink-0">
      <img class="w-5 h-5" src="/assets/icons/search.svg" alt="">
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: string,
  placeholder: string
}>()

const emit = defineEmits(['inputChange'])

const onInputChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('inputChange', target.value)
}
</script>

<style scoped>

</style>