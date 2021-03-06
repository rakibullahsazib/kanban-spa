<template>
  <HeaderLayout>
    <div v-if="currentBoard" class="flex-grow">
      <div class="relative flex items-center space-x-3">
        <h2 class="pr-1 text-xl text-grey-9 font-semibold truncate" data-testid="board-title">
          {{ currentBoard.name }}
        </h2>
        <!-- Dropdown -->
        <div>
          <img
            @click.stop="toggleCurrentDropdown('boards')"
            class="cursor-pointer w-6 h-6"
            src="/assets/icons/chevron-down.svg"
            data-testid="dropdown-btn"
          >
          <transition name="toggle">
            <HeadlessSingleSelectDropdown
              @optionClicked="setCurrentBoard($event)"
              :isDropdownShown="currentDropdown === 'boards'"
              :options="boards"
              :selectedOptionId="currentBoard.id"
              dropdownHeight="200px"
              class="w-56 left-0 text-grey-9 text-sm"
            />
          </transition>
        </div>
        <!-- description -->
        <div class="parent-hover relative" data-testid="board-description">
          <img
            class="cursor-pointer w-5 h-5"
            src="/assets/icons/question.svg"
          >
          <p class="child-visible absolute mt-2 -ml-10 w-56 px-3 py-2 text-xs text-grey-9 bg-white border border-grey-5 rounded shadow" style="max-width: 40rem;" data-testid="board-description-message">
            {{ currentBoard.description }}
          </p>
        </div>
        <!-- edit btn -->
        <img
          @click="boardToBeEdited = currentBoard?.id"
          class="cursor-pointer w-5 h-5"
          src="/assets/icons/edit.svg"
          data-testid="edit-btn"
          title="Edit Board"
        >
        <!-- delete btn -->
        <img
          @click="boardToBeDeleted = currentBoard?.id"
          class="cursor-pointer w-5 h-5"
          src="/assets/icons/trash.svg"
          data-testid="delete-btn"
          title="Delete Board"
        >
        <!-- add board btn -->
        <img
          @click="isBoardModalShown = true"
          class="cursor-pointer w-5 h-5"
          src="/assets/icons/plus-circle-transparent.svg"
          data-testid="add-board-btn"
          title="Add Board"
        >
      </div>
      <teleport to="body">
        <transition name="fade">
        <BoardModal
          v-if="isBoardModalShown || boardToBeEdited"
          @closeModal="closeBoardModal"
          :board="boards.find(b => b.id === boardToBeEdited)"
          class="z-30"
          data-testid="add-edit-board-modal"
        />
        <ConfirmationModal
          v-else-if="boardToBeDeleted"
          title="Delete Board ?"
          :message="deleteBoardMessage"
          yesBtn="Yes, Delete"
          noBtn="Cancel"
          @confirm="deleteBoard"
          @closeModal="closeConfirmationModal"
          class="z-30"
        />
        </transition>
      </teleport>
    </div>
  </HeaderLayout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useBoardStore } from '../../../store/boardStore';
import { useRootStore } from '../../../store/rootStore';
import HeaderLayout from '../../../layouts/HeaderLayout.vue';
import HeadlessSingleSelectDropdown from '../../inputs/dropdowns/HeadlessSingleSelectDropdown.vue';
import BoardModal from '@/components/modals/BoardModal.vue';
import ConfirmationModal from '../../modals/ConfirmationModal.vue';
import { deleteBoardMessage } from '../../../helpers/data/messages'

const rootStore = useRootStore()
const boardStore = useBoardStore()
const boards = computed(() => boardStore.boards)
const currentBoard = computed(() => boardStore.currentBoard)
const setCurrentBoard = boardStore.setCurrentBoard

const isBoardModalShown = ref(false)
const boardToBeEdited = ref<string|undefined>(undefined)
const closeBoardModal = () => {
  isBoardModalShown.value = false
  boardToBeEdited.value = undefined
}

const boardToBeDeleted = ref<string|undefined>(undefined)
const closeConfirmationModal = () => {
  boardToBeDeleted.value = undefined
}
const deleteBoard = () => {
  if (!boardToBeDeleted.value) return
  boardStore.deleteBoard(boardToBeDeleted.value)
  closeConfirmationModal()
}

let currentDropdown = computed(() => rootStore.currentDropdown)
const toggleCurrentDropdown = rootStore.toggleCurrentDropdown
</script>

<style scoped>

</style>