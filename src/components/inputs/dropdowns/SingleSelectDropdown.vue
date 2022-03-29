<template>
  <div
    class="select-container relative transition-300 bg-white border rounded"
    :class="[selectedOptionId ? 'text-grey-9 font-semibold' : 'text-grey-7', errorMessage ? 'border-red' : 'border-grey-5']"
  >
    <label
      v-if="label"
      :for="id"
      class="label block px-2 absolute mt-0.5 transition-300 bg-white font-semibold z-0 transition-300"
      :class="[errorMessage ? 'text-red' : 'text-grey-7', {'label-lifted': selectedOptionId}]"
    >
      {{ label }}
    </label>
    <!-- Click to toggle -->
    <div @click.stop="$emit('toggle')" class="flex px-4 pt-1.5 pb-1 items-center cursor-pointer">
      <div class="flex-grow flex space-x-2 items-center">
        <img v-if="selectedOption?.icon" :src="`/assets/icons/${selectedOption.icon}`" class="flex-shrink-0 w-4 h-4">
        <p class="flex-grow truncate">
          {{ selectedOptionId ? selectedOption?.name : '' }}
        </p>
      </div>
      <img :class="isDropdownShown ? 'rotate-180' : ''" class="flex-shrink-0 w-6 h-6 transform transition-all duration-300" src="/assets/icons/chevron-down.svg" alt="Toggle Dropdown">
    </div>
    <transition name="toggle">
      <div
        v-show="isDropdownShown && options.length"
        class="absolute mt-1 w-full bg-white text-grey-9 rounded shadow border border-grey-5 overflow-y-auto custom-scrollbar z-30"
        :style="{'max-height': dropdownHeight}"
      >
        <div
          @click="$emit('optionClicked', option.id)"
          v-for="option in options"
          :key="option.id"
          :data-testid="`option_${option.id}`"
          class="px-4 py-1 flex space-x-2 items-center cursor-pointer bg-opacity-40 hover:bg-opacity-40"
          :class="option.id === selectedOptionId ? 'bg-yellow-light hover:bg-yellow-light font-semibold' : 'bg-white hover:bg-grey-5'"
          :title="option.name"
        >
          <img v-if="option.icon" :src="`/assets/icons/${option.icon}`" class="flex-shrink-0 w-4 h-4">
          <p class="truncate text-xs">
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
  id: string,
  name: string,
  icon?: string,
}
const props = defineProps<{
  id?: string,
  options: Option[],
  selectedOptionId?: string,
  dropdownHeight?: string,
  isDropdownShown: boolean
  label?: string,
  errorMessage?: string
}>()

const selectedOption = computed(() => props.options.find(i => i.id === props.selectedOptionId))
</script>

<style scoped>
.select-container > .label {
  top: 0.5rem;
  margin-left: 0.5rem;
  font-size: 0.875rem/* 14px */;
  line-height: 1.25rem/* 20px */
}
.select-container:focus > .label, .select-container > .label.label-lifted {
  top: -0.7rem;
  margin-left: 0.5rem;
  font-size: 0.75rem/* 12px */;
  line-height: 1rem/* 16px */;
}
</style>