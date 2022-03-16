<template>
  <SidebarSliderLayout
    title="Home"
  >
    <section class="w-56">
      <HeaderAddButton
        @add="isCreateBoardModalShown = true"
        title="Boards"
      />
      <div v-if="!boards.length" class="mt-2 text-grey-7 text-xs">
        <p>
          No board created yet.
        </p>
        <button
          @click="isCreateBoardModalShown = true"
          class="mt-1 text-grey-9 underline focus:outline-none"
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
          :key="board.id"
          @click="setCurrentBoard(board.id)"
          class="parent-hover flex items-center space-x-2 py-1.5 px-2 transition-300"
          :class="currentBoard.id === board.id ? 'bg-highlight-light hover:bg-highlight-light' : 'cursor-pointer hover:bg-grey-1'"
        >
          <img src="/assets/icons/board.svg" alt="">
          <h3 class="flex-grow truncate text-sm font-semibold" :title="board.name">
            {{ board.name }}
          </h3>
          <img @click.stop="isCreateBoardModalShown = true" src="/assets/icons/edit.svg" alt="" class="child-visible cursor-pointer w-4 h-4">
          <img @click.stop="deleteBoard(board.id)" src="/assets/icons/trash.svg" alt="" class="child-visible cursor-pointer w-4 h-4">
        </div>
      </div>
    </section>
  </SidebarSliderLayout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useBoardStore } from '../../../store/board'
import SidebarSliderLayout from '../../../layouts/SidebarSliderLayout.vue';
import HeaderAddButton from '../../buttons/HeaderAddButton.vue';
import SearchInput from '../../inputs/SearchInput.vue';

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

const isCreateBoardModalShown = ref(false)
const isEditBoardModalShown = ref(false)

</script>

<style scoped>
</style>