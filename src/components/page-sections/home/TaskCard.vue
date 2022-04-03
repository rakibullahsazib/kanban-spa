<template>
  <div
    @click="$emit('edit')"
    class="task-handle parent-hover relative rounded cursor-pointer"
    :style="{backgroundColor: task.color}"
  >
    <!-- Delete icon -->
    <img
      @click.stop="$emit('delete')"
      src="/assets/icons/cross-circle-dark.svg"
      class="child-visible absolute -top-1 -left-1 w-4 h-4 z-30"
      title="Delete Task"
      data-testid="task-delete"
    >
    <!-- Status -->
    <img
      v-if="taskStatus"
      :src="`/assets/icons/${taskStatus.icon}`"
      class="absolute w-4 h-4 right-2 top-2"
      :alt="taskStatus.name"
      :title="taskStatus.name"
      data-testid="task-status-icon"
    >
    <!-- Head -->
    <div class="flex space-x-2 p-2 border border-white border-opacity-50">
      <!-- Assignee -->
      <div
        v-if="task.assignee"
        class="flex-shrink-0 w-10 h-10 flex-center uppercase bg-white bg-opacity-50 text-black font-semibold text-xs rounded-full"
        :title="task.assignee" data-testid="task-assignee-initials"
      >
        {{ getInitials(task.assignee) }}
      </div>
      <div
        v-else
        class="flex-shrink-0 w-10 h-10 flex-center uppercase bg-white opacity-50 text-black font-semibold text-lg rounded-full"
        data-testid="task-assignee-initials-absence"
      >
        ?
      </div>
      <div>
        <p class="text-xs opacity-50 font-semibold" data-testid="task-dueDate">
          Due: {{ getDateMonthYearFromISO(task.dueDate) }}
        </p>
        <p v-if="task.assignee" class="mt-1 text-xs opacity-50" data-testid="task-assignee">
          {{ task.assignee }}
        </p>
        <p v-else class="mt-1 text-xs" data-testid="task-not-assigned">
          Not assigned yet
        </p>
      </div>
    </div>
    <!-- Title -->
    <h5 class="p-2 text-sm text-black opacity-70 font-semibold" data-testid="task-name">
      {{ task.name }}
    </h5>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
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