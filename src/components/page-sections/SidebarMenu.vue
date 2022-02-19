<template>
  <div class="px-1.5 h-screen bg-grey-9">
    <img class="my-2 w-12 h-12" src="/assets/icons/rs-logo.svg" alt="Logo">
    <!-- Routes -->
    <ul class="pt-2 mb-4 bg-grey-9 z-10 border-t border-grey-7">
      <router-link :to="{name: nav.name}" v-for="nav in navs" :key="nav.name" class="relative mt-3 mx-auto w-10 h-10 flex justify-center items-center transition-all duration-700 rounded-full" :class="{'bg-white bg-opaci': currentNav === nav.name}">
          <img :src="`/assets/icons/${nav.icon}`" :alt="nav.name" :title="nav.name" class="flex-shrink-0 w-5 h-5">
          <Transition name="fade">
            <img v-show="currentNav === nav.name" class="absolute left-full my-2 w-4 h-4" src="/assets/icons/triangle.svg" alt="Logo">
          </Transition>
      </router-link>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const currentNav = computed(() => useRoute().name)
const navs = [
  {
    name: 'Board View',
    icon: 'board.svg'
  },
  {
    name: 'Workspaces',
    icon: 'workspace.svg'
  },
  {
    name: 'Members',
    icon: 'members.svg'
  },
  {
    name: 'Timelogs',
    icon: 'clock.svg'
  },
  {
    name: 'Settings',
    icon: 'settings.svg'
  },
  {
    name: 'Notifications',
    icon: 'notification.svg'
  },
  {
    name: 'Messages',
    icon: 'message.svg'
  },
]
</script>

<style scoped>

</style>