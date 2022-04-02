<template>
  <div class="pl-1 pr-1 pb-2 flex flex-col">
    <!-- Add Task Button -->
    <ButtonWithIcon
      v-if="stage.name === 'Backlog'"
      @click="isTaskModalShown = true"
      title="Add Task"
      icon="plus-circle-black.svg"
      class="sticky top-2"
    />
    <draggable
      item-key="id"
      tag="ul"
      :animation="300"
      :list="stage.tasks"
      group="boardTasks"
      handle=".task-handle"
      @end="onTaskDragEnd"
      class="mt-4 flex-grow overflow-x-hidden overflow-y-auto custom-scrollbar"
    >
      <template #item="{element}">
        <TaskCard
          @edit="taskToBeEdited = element.id"
          @delete="taskToBeDeleted = element.id"
          :task="element"
          class="mb-2 w-56"
        />
      </template>
    </draggable>
    <teleport to="body">
      <transition name="fade">
      <TaskModal
        v-if="isTaskModalShown || taskToBeEdited"
        @closeModal="closeTaskModal"
        :task="stage.tasks.find(b => b.id === taskToBeEdited)"
        class="z-30"
      />
      <ConfirmationModal
        v-else-if="taskToBeDeleted"
        @confirm="deleteTask"
        @closeModal="closeConfirmationModal"
        title="Delete Task ?"
        :message="deleteTaskMessage"
        yesBtn="Yes, Delete"
        noBtn="Cancel"
        class="z-30"
      />
      </transition>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import {  ref } from 'vue';
import { useBoardStore } from '../../../store/boardStore'
import draggable from 'vuedraggable'

import { StageDetail } from '../../../store/interface/board.interface';
import TaskCard from './TaskCard.vue';
import TaskModal from '../../modals/TaskModal.vue';
import ConfirmationModal from '../../modals/ConfirmationModal.vue';
import { deleteTaskMessage } from '../../../helpers/data/messages'
import ButtonWithIcon from '../../buttons/ButtonWithIcon.vue';

const props = defineProps<{
  stage: StageDetail
}>()

const boardStore = useBoardStore()

const isTaskModalShown = ref(false)
const taskToBeEdited = ref<string|undefined>(undefined)
const closeTaskModal = () => {
  isTaskModalShown.value = false
  taskToBeEdited.value = undefined
}

const taskToBeDeleted = ref<string|undefined>(undefined)
const closeConfirmationModal = () => {
  taskToBeDeleted.value = undefined
}
const deleteTask = () => {
  if (!taskToBeDeleted.value) return
  boardStore.deleteTask(props.stage.id, taskToBeDeleted.value)
  closeConfirmationModal()
}
// dragging tasks
const onTaskDragEnd = () => {
  console.log('drag end')
}
</script>

<style scoped>

</style>