<template>
  <div class="flex items-center border-b border-grey-5 pt-0 pb-1">
    <slot></slot>
    <div v-if="userInfo" class="pb-1 parent-hover relative flex items-center space-x-2 text-sm text-grey-9">
      <img v-if="userInfo.photo" :src="userInfo.photo" alt="" class="w-8 h-8 rounded-full">
      <div
        v-else-if="userInfo"
        class="flex-shrink-0 w-8 h-8 flex-center uppercase bg-highlight bg-opacity-50 text-black font-semibold text-xs rounded-full"
        :title="userInfo.name" data-testid="task-assignee-initials"
      >
        {{ getInitials(userInfo.name) }}
      </div>
      <p v-if="userInfo.name" class="font-semibold">
        {{ userInfo.name }}
      </p>
      <ul class="child-visible absolute top-full right-0 bg-yellow-light border border-grey-5 rounded shadow px-4 py-2 text-right z-50" style="min-width: 8rem">
        <li @click="logOut" class="whitespace-nowrap cursor-pointer font-semibold">
          Log Out
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { getInitials } from '../helpers/stringMethods'
import { useUserStore } from '../store/userStore';

const userStore = useUserStore()
const userInfo = computed(() => userStore.userInfo)
const logOut = userStore.logOutUser
</script>

<style scoped>

</style>