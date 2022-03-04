<template>
  <div class="relative">
    <div
      class="relative flex items-center justify-between pl-1.5 pr-2 rounded cursor-pointer space-x-4 bg-white"
      :class="selectedOptionId ? 'text-grey-9 font-semibold' : 'text-grey-7'"
    >
      <div class="flex space-x-2 items-center">
        <img v-if="selectedOption?.icon" :src="`/assets/icons/${selectedOption.icon}`" class="flex-shrink-0 w-4 h-4">
        <p>
          {{ selectedOptionId ? selectedOption?.name : placeholder }}
        </p>
      </div>
      <img :class="isDropdownShown ? 'rotate-180' : ''" class="w-6 h-6 transform transition-all duration-300" src="/assets/icons/chevron-down.svg" alt="Toggle Dropdown">
  </div>
    <transition name="toggle">
      <div
        v-show="isDropdownShown"
        class="absolute mt-2 w-full bg-white text-grey-9 rounded shadow border border-grey-5 overflow-y-auto custom-scrollbar"
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
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Option {
  id: number,
  name: string,
  icon?: string
}
const props = defineProps<{
  options?: Option[],
  selectedOptionId?: number,
  dropdownHeight?: string,
  isDropdownShown?: boolean,
  placeholder?: string
}>()

const selectedOption = computed(() => {
  if (!props.selectedOptionId || !props.options) return undefined
  for (const option of props.options) {
    if (option.id === props.selectedOptionId) {
      return option
    }
  }
})
</script>

<style scoped>

</style>