<template>
  <div
    class="h-screen shadow-lg shadow-grey-5 border-r-2 border-grey-5 rounded-xl transition-all duration-500 overflow-hidden"
    :class="collapsed ? 'collapsed' : 'expanded'"
  >
    <div class="relative mb-8 flex space-x-2 items-center">
      <!-- <div class="w-10 h-10 flex-shrink-0 flex-center bg-yellow text-grey-9 rounded-full">
        AI
      </div> -->
      <h3 class="text-grey-9 font-semibold text-3xl" data-testid="sidebar-slider-title">
        {{ title }}
      </h3>
      <div 
        @click="collapsed = !collapsed"
        class="absolute -right-4 w-7 h-12 flex-center rounded-l-lg bg-grey-7 cursor-pointer"
      >
        <img 
          src="/assets/icons/collapse-white.svg"
          class="w-5 h-5 transform trasition-all duration-500"
          :class="{'rotate-180' : collapsed}"
          data-testid="sidebar-slider-toggle-btn"
        >
      </div>
    </div>
    <!-- <transition name="fade"> -->
    <div
      v-show="!collapsed"
      data-testid="sidebar-slider-content"
    >
      <slot></slot>
    </div>
    <!-- </transition> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineProps<{
  title?: string
}>()

const collapsed = ref(false)
</script>

<style scoped>
.collapsed {
  width: 1.5rem;
  padding: 1rem;
}
.expanded {
  width: 16rem;
  padding: 1rem;
}
</style>