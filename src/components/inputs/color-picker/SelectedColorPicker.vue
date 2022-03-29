<template>
  <div class="relative flex-center w-10 h-10 rounded-lg border border-grey-5">
    <!-- Selected Color -->
    <div
      v-if="selectedColor"
      @click.stop="$emit('toggle')"
      class="w-6 h-6 rounded-full cursor-pointer"
      :style="{'background-color': selectedColor}"
    >
    </div>
    <!-- Dropdown -->
    <transition name="toggle">
      <div 
        v-if="isDropdownShown"
        class="absolute top-full mt-2 px-4 py-2 w-52 flex flex-wrap border border-grey-5 rounded z-30 bg-white"
      >
        <div
          v-for="color in colors"
          :key="color"
          @click.stop="$emit('optionClicked', color)"
          class="mr-2.5 last:mr-0 w-5 h-5 rounded-full cursor-pointer"
          :style="{'background-color': color}"
        >
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  colors: string[],
  selectedColor?: string,
  isDropdownShown: boolean,
}>()
</script>

<style scoped>

</style>