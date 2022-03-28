<template>
  <div class="relative parent-hover py-3 px-10 flex-center space-x-3">
    <h3 class="truncate flex-grow flex-center font-semibold text-grey-7">
      {{ stage.name }}
    </h3>
    <!-- Move btn -->
    <img
      v-if="stage.name !== 'Backlog'"
      class="stage-handle absolute left-2 child-visible cursor-move w-4 h-4"
      src="/assets/icons/move.svg"
      data-testid="move-stage-btn"
      title="Move Stage"
    >
    <!-- delete btn -->
    <img
      v-if="stage.name !== 'Backlog'"
      @click="stageToBeDeleted = stage.id"
      class="absolute right-4 child-visible cursor-pointer w-4 h-4"
      src="/assets/icons/trash.svg"
      data-testid="delete-stage-btn"
      title="Delete Stage"
    >
    <!-- Add stage btn -->
    <img
      @click="$emit('addStage')"
      class="absolute -right-2 cursor-pointer w-4 h-4"
      src="/assets/icons/plus-circle.svg"
      data-testid="add-stage-btn"
      title="Add Stage"
    >
    <teleport to="body">
      <transition name="fade">
      <ConfirmationModal
        v-if="stageToBeDeleted"
        title="Delete Stage ?"
        :message="deleteStageMessage"
        yesBtn="Yes, Delete"
        noBtn="Cancel"
        @confirm="deleteStage"
        @closeModal="closeConfirmationModal"
        class="z-30"
      />
      </transition>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { StageDetail } from '../../../store/interface/board.interface';
import ConfirmationModal from '../../modals/ConfirmationModal.vue';
import { useBoardStore } from '../../../store/board.store';
import { deleteStageMessage } from '../../../helpers/messages'

defineProps<{
  stage: StageDetail
}>()

const boardStore = useBoardStore()

const stageToBeDeleted = ref<string|undefined>(undefined)
const closeConfirmationModal = () => {
  stageToBeDeleted.value = undefined
}
const deleteStage = () => {
  if (!stageToBeDeleted.value) return
  boardStore.deleteStage(stageToBeDeleted.value)
  closeConfirmationModal()
}
</script>

<style scoped>
</style>