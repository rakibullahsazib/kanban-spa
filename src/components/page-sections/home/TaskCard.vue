<template>
  <div class="task-handle relative rounded cursor-pointer" :style="{backgroundColor: task.color}">
    <!-- Status -->
    <img
      v-if="taskStatus"
      :src="`/assets/icons/${taskStatus.icon}`"
      class="absolute w-4 h-4 right-2 top-2"
      :alt="taskStatus.name"
      :title="taskStatus.name"
    >
    <!-- Head -->
    <div class="flex space-x-2 p-2 border border-white border-opacity-50">
      <!-- Assignee -->
      <div
        v-if="task.assignee"
        class="flex-shrink-0 w-10 h-10 flex-center uppercase bg-white bg-opacity-50 text-black font-semibold text-xs rounded-full"
        :title="task.assignee"
      >
        {{ getInitials(task.assignee) }}
      </div>
      <div
        v-else
        class="flex-shrink-0 w-10 h-10 flex-center uppercase bg-white opacity-50 text-black font-semibold text-lg rounded-full"
      >
        ?
      </div>
      <div>
        <p class="text-xs opacity-50 font-semibold">
          Due: {{ getDateMonthYearFromISO(task.dueDate) }}
        </p>
        <p class="mt-1 text-xs opacity-50">
          {{ task.assignee }}
        </p>
      </div>
    </div>
    <!-- Title -->
    <h5 class="p-2 text-sm text-black opacity-70 font-semibold">
      {{ task.name }}
    </h5>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { TaskDetail } from '../../../store/interface/board.interface';
import { getDateMonthYearFromISO } from '../../../helpers/dateFormatter'
import { getInitials } from '../../../helpers/stringMethods'
import { useBoardStore } from '../../../store/boardStore';

const props = defineProps<{
  task: TaskDetail
}>()

const boardStore = useBoardStore()
const taskStatus = computed(() => {
  return boardStore.taskStatuses.find(s => s.id === props.task.statusId)
})
</script>

<style scoped>

</style>