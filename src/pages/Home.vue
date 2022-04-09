<template>
  <div class="flex w-full overflow-hidden">
    <HomeSidebarSlider class="flex-shrink-0" />
    <!-- Right Side Content -->
    <div v-if="currentBoard" class="h-screen flex-grow flex flex-col px-4 py-2 overflow-hidden">
      <HomeHeader />
      <!-- Stages -->
      <div class="flex-grow flex justify-start">
        <!-- Backlog stage -->
        <div class="flex-shrink-0 flex flex-col">
          <StageColumnHeader
            :stage="currentBoard.stages[0]"
            class="flex-shrink-0 border-r-2 border-b-2 border-dashed border-grey-1"
            style="width: 15rem;"
          />
          <StageColumn
            :stage="currentBoard.stages[0]"
            class="flex-shrink-0 border-b-2 border-r-2 border-dashed border-grey-1"
            style="width: 15rem; height:calc(100vh - 7rem)"
          />
        </div>
        <!-- Other stages -->
        <div class="flex-grow overflow-x-auto overflow-y-hidden custom-scrollbar">
          <!-- Stage Headers -->
          <draggable
            item-key="id"
            tag="ul"
            :animation="300"
            :list="currentBoard.stages"
            group="boardStages"
            handle=".stage-handle"
            @end="onStageDragEnd"
            class="flex"
          >
            <template #item="{element}">
              <StageColumnHeader
                v-if="element.name !== 'Backlog'"
                :stage="element"
                class="flex-shrink-0 border-b-2 border-r-2 border-dashed border-grey-1"
                style="width: 15rem;"
              />
            </template>
          </draggable>
          <!-- Stage Columns -->
          <div class="flex-grow flex border-b-2 border-dashed border-grey-1">
            <template v-for="stage in currentBoard.stages" :key="stage.id">
            <StageColumn
              v-if="stage.name !== 'Backlog'"
              :stage="stage"
              class="flex-shrink-0 border-b-2 border-r-2 border-dashed border-grey-1"
              style="width: 15rem; height:calc(100vh - 7rem)"
            />
            </template>
          </div>
        </div>
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
import { useRootStore } from '../store/rootStore'
import { useBoardStore } from '../store/boardStore';

import HomeSidebarSlider from '../components/page-sections/home/HomeSidebarSlider.vue';
import HomeHeader from '../components/page-sections/home/HomeHeader.vue';
import BoardModal from '../components/modals/BoardModal.vue';
import StageColumn from '../components/page-sections/home/StageColumn.vue';
import StageColumnHeader from '../components/page-sections/home/StageColumnHeader.vue';
import { useUserStore } from '../store/userStore';


const rootStore = useRootStore()
const boardStore = useBoardStore()
const userStore = useUserStore()
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