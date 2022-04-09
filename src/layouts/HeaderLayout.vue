<template>
  <div class="flex items-center border-b border-grey-5 pt-0 pb-2">
    <slot></slot>
    <div v-if="userName" class="pb-1 parent-hover relative flex items-center space-x-2 text-sm text-grey-9">
      <div
        class="flex-shrink-0 w-7 h-7 flex-center uppercase bg-highlight bg-opacity-50 text-black font-semibold text-xs rounded-full"
        :title="userName" data-testid="task-assignee-initials"
      >
        {{ getInitials(userName) }}
      </div>
      <p>
        {{ userName }}
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
const userName = computed(() => userStore.userInfo.name)
const logOut = userStore.logOutUser
</script>

<style scoped>

</style>