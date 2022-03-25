<template>
  <SidebarSliderLayout
    title="Home"
  >
    <section class="w-56">
      <HeaderAddButton
        @add="isAddBoardModalShown = true"
        title="Boards"
      />
      <div v-if="!boards.length" class="mt-2 text-grey-7 text-xs">
        <p>
          No board created yet.
        </p>
        <button
          @click="isAddBoardModalShown = true"
          class="mt-1 text-grey-9 underline focus:outline-none"
          data-testid="add-board-text-btn"
        >
          Add a board
        </button>
      </div>

      <div v-else class="mt-2">
        <SearchInput
          @inputChange="changeSearchInput"
          id="search-boards"
          placeholder="Search Boards"
          class="mb-2 px-2 py-1 w-full border border-grey-5 text-xs rounded"
        />
        <!-- Boards -->
        <div
          v-for="board in filteredBoards"
          :key="`board_${board.id}`"
          :data-testid="`board_${board.id}`"
          @click="setCurrentBoard(board.id)"
          class="parent-hover flex items-center space-x-2 py-1.5 px-2 transition-300"
          :class="currentBoard?.id === board.id ? 'bg-highlight-light hover:bg-highlight-light' : 'cursor-pointer hover:bg-grey-1'"
        >
          <img src="/assets/icons/board.svg" alt="">
          <h3 class="flex-grow truncate text-sm font-semibold" :title="board.name">
            {{ board.name }}
          </h3>
          <img
            @click.stop="boardToBeEdited = board.id"
            src="/assets/icons/edit.svg"
            class="child-visible cursor-pointer w-4 h-4"
            :data-testid="`board_${board.id}_edit`"
          >
          <img
            @click.stop="deleteBoard(board.id)"
            src="/assets/icons/trash.svg" alt=""
            class="child-visible cursor-pointer w-4 h-4"
            :data-testid="`board_${board.id}_delete`"
          >
        </div>
      </div>
    </section>
    <teleport to="body">
      <transition name="fade">
      <BoardModal
        v-if="isAddBoardModalShown || boardToBeEdited"
        @closeModal="closeBoardModal"
        :boardId="boardToBeEdited"
        class="z-30"
      />
      </transition>
    </teleport>
  </SidebarSliderLayout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useBoardStore } from '../../../store/board.store'
import SidebarSliderLayout from '../../../layouts/SidebarSliderLayout.vue';
import HeaderAddButton from '../../buttons/HeaderAddButton.vue';
import SearchInput from '../../inputs/SearchInput.vue';
import BoardModal from '../../modals/BoardModal.vue';

const boardStore = useBoardStore()

const boards = computed(() => boardStore.boards)
const currentBoard = computed(() => boardStore.currentBoard)
const setCurrentBoard = boardStore.setCurrentBoard
const deleteBoard = boardStore.deleteBoard

const searchInput = ref('')
const changeSearchInput = (value: string) => {
  searchInput.value = value
}
const filteredBoards = computed(() => {
  if (!searchInput.value) return boards.value
  return boards.value.filter(board => {
    return board.name.toLowerCase().indexOf(searchInput.value.toLowerCase()) > -1
  })
})

const isAddBoardModalShown = ref(false)
const boardToBeEdited = ref<string|undefined>(undefined)
const closeBoardModal = () => {
  isAddBoardModalShown.value = false
  boardToBeEdited.value = undefined
}

</script>

<style scoped>
</style>