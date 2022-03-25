<template>
  <div v-if="currentBoard" class="border-b border-grey-5 pt-1 pb-3">
    <div class="relative flex items-center space-x-3">
      <h2 class="pr-1 text-xl text-grey-9 font-semibold truncate">
        {{ currentBoard.name }}
      </h2>
      <!-- Dropdown -->
      <div>
        <img
          @click.stop="toggleCurrentDropdown('boards')"
          class="cursor-pointer w-6 h-6"
          src="/assets/icons/chevron-down.svg"
        >
        <transition name="toggle">
          <HeadlessSingleSelectDropdown
            :isDropdownShown="currentDropdown === 'boards'"
            :options="boards"
            :selectedOptionId="currentBoard.id"
            dropdownHeight="200px"
            class="w-56 left-0 text-grey-9 text-sm"
          />
        </transition>
      </div>
      <!-- description -->
      <div class="parent-hover relative">
        <img
          class="cursor-pointer w-5 h-5"
          src="/assets/icons/question.svg"
        >
        <p class="child-visible absolute mt-2 -ml-10 w-56 px-3 py-2 text-xs text-grey-9 bg-white border border-grey-5 rounded shadow" style="max-width: 40rem;">
          {{ currentBoard.description }}
        </p>
      </div>
      <!-- edit btn -->
      <img
        @click="boardToBeEdited = currentBoard?.id"
        class="cursor-pointer w-5 h-5"
        src="/assets/icons/edit.svg"
        data-testid="edit-btn"
      >
      <img
        @click="deleteBoard(currentBoard?.id)"
        class="cursor-pointer w-5 h-5"
        src="/assets/icons/trash.svg"
        data-testid="edit-btn"
      >
    </div>
    <teleport to="body">
      <transition name="fade">
      <BoardModal
        v-if="boardToBeEdited"
        @closeModal="boardToBeEdited = undefined"
        :boardId="currentBoard.id"
        class="z-30"
        data-testid="add-edit-board-modal"
      />
      </transition>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useBoardStore } from '../../../store/board.store';
import { useRootStore } from '../../../store/root.store';
import HeadlessSingleSelectDropdown from '../../inputs/dropdowns/HeadlessSingleSelectDropdown.vue';
import BoardModal from '@/components/modals/BoardModal.vue';

const rootStore = useRootStore()
const boardStore = useBoardStore()
const boards = computed(() => boardStore.boards)
const currentBoard = computed(() => boardStore.currentBoard)
const boardToBeEdited = ref<string|undefined>(undefined)
const deleteBoard = (boardId: string|undefined) => {
  if(!boardId) return
  boardStore.deleteBoard(boardId)
}

let currentDropdown = computed(() => rootStore.currentDropdown)
const toggleCurrentDropdown = rootStore.toggleCurrentDropdown
</script>

<style scoped>

</style>