<template>
  <div class="flex w-full">
    <HomeSldebarSlider class="flex-shrink-0" />
    <!-- Right Side Content -->
    <div v-if="currentBoard" class="flex-grow flex flex-col px-4 py-2">
      <HomeHeader />
      <!-- Stage Headers -->
      <draggable
        item-key="id"
        tag="ul"
        :animation="300"
        :list="currentBoard.stages"
        group="boardStages"
        handle=".stage-handle"
        @end="onStageDragEnd"
        class="flex border-b-2 border-dashed border-grey-1"
      >
        <template #item="{element}">
          <StageColumnHeader
            :stage="element"
            class="flex-shrink-0 w-60  border-r-2 border-dashed border-grey-1"
          />
        </template>
      </draggable>
      <!-- Stage Columns -->
      <div class="flex-grow flex border-b-2 border-dashed border-grey-1">
        <StageColumn
          v-for="stage in currentBoard.stages"
          :key="stage.id"
          :stage="stage"
          class="flex-shrink-0 h-full overflow-x-hidden overflow-y-auto w-60 border-r-2 border-dashed border-grey-1"
        />
      </div>
    </div>
    <!-- No current board -->
    <div v-else class="flex-grow w-full h-full flex-center text-grey-7">
      <div>
        <p>
          Sorry, No board found.&nbsp;
          <span
            @click="isBoardModalShown = true"
            class="mt-1 text-grey-9 underline focus:outline-none cursor-pointer font-semibold"
            data-testid="add-board-text-btn"
          >
            Add a board
          </span>
        </p>
      </div>
    </div>
    <teleport to="body">
      <transition name="fade">
      <BoardModal
        v-if="isBoardModalShown"
        @closeModal="isBoardModalShown = false"
        class="z-30"
        data-testid="add-board-modal"
      />
      </transition>
    </teleport>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import draggable from 'vuedraggable'
import { useRootStore } from '../store/root.store'
import { useBoardStore } from '../store/board.store';
import { fake_boards, fake_currentBoard } from '../fakeData/board.fake';

import HomeSldebarSlider from '@/components/page-sections/home/HomeSidebarSlider.vue';
import HomeHeader from '@/components/page-sections/home/HomeHeader.vue';
import BoardModal from '@/components/modals/BoardModal.vue';
import StageColumn from '../components/page-sections/home/StageColumn.vue';
import StageColumnHeader from '../components/page-sections/home/StageColumnHeader.vue';


const rootStore = useRootStore()
const boardStore = useBoardStore()
const currentBoard = computed(() => boardStore.currentBoard)

const isBoardModalShown = ref(false)

onMounted(() => {
  window.addEventListener('click', function () {
    rootStore.toggleCurrentDropdown('')
  })
  boardStore.getBoards()
  boardStore.getCurrentBoard()
  boardStore.getTaskStatuses()
})
// dragging tasks
const onStageDragEnd = () => {
  console.log('stage drag end')
}
</script>