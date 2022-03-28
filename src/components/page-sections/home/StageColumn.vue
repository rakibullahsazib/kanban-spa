<template>
  <div class="">
    <div class="px-2 pb-2">
      <draggable
        item-key="id"
        tag="ul"
        :animation="300"
        :list="stage.tasks"
        group="boardTasks"
        handle=".task-handle"
        @end="onTaskDragEnd"
        class="list-group"
      >
        <template #item="{element}">
          <TaskCard
            @click="taskToBeEdited = element.id"
            :task="element"
            class="mt-2 w-56"
          />
        </template>
      </draggable>
    </div>
    <teleport to="body">
      <transition name="fade">
      <TaskModal
        v-if="isTaskModalShown || taskToBeEdited"
        @closeModal="closeTaskModal"
        :board="stage.tasks.find(b => b.id === taskToBeEdited)"
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
import { useBoardStore } from '../../../store/board.store'
import draggable from 'vuedraggable'

import { StageDetail } from '../../../store/interface/board.interface';
import StageColumnHeader from './StageColumnHeader.vue';
import TaskCard from './TaskCard.vue';
import TaskModal from '../../modals/TaskModal.vue';
import ConfirmationModal from '../../modals/ConfirmationModal.vue';
import { deleteTaskMessage } from '../../../helpers/messages'
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