<template>
    <div
      v-show="isDropdownShown"
      class="absolute mt-2 w-full bg-white text-grey-9 rounded shadow border border-grey-5 overflow-y-auto custom-scrollbar z-30"
      :style="{'max-height': dropdownHeight}"
    >
      <div
        @click="$emit('optionClicked', option.id)"
        v-for="option in options"
        :key="option.id"
        class="px-4 py-2 flex space-x-2 items-center cursor-pointer bg-opacity-40 hover:bg-opacity-40"
        :class="option.id === selectedOptionId ? 'bg-yellow-light hover:bg-yellow-light font-semibold' : 'bg-white hover:bg-grey-5'"
        :title="option.name"
      >
        <img v-if="option.icon" :src="`/assets/icons/${option.icon}`" class="flex-shrink-0 w-4 h-4">
        <p class="truncate">
          {{ option.name }}
        </p>
      </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Option {
  id: string,
  name: string,
  icon?: string
}
const props = defineProps<{
  options: Option[],
  selectedOptionId?: string,
  dropdownHeight?: string,
  isDropdownShown: boolean
}>()
</script>

<style scoped>

</style>