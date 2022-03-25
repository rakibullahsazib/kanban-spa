<template>
  <div class="flex w-full">
    <HomeSldebarSlider class="flex-shrink-0" />
    <div v-if="currentBoard" class="flex-grow px-4 py-2">
      <HomeHeader />
    </div>
    <!-- No current board -->
    <div v-else class="flex-grow w-full h-full flex-center text-grey-7">
      <div>
        <p>
          Sorry, No board found.&nbsp;
          <span
            @click="isAddBoardModalShown = true"
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
      <AddBoardModal
        v-if="isAddBoardModalShown"
        @closeModal="isAddBoardModalShown = false"
        class="z-30"
        data-testid="add-board-modal"
      />
      </transition>
    </teleport>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRootStore } from '../store/root.store'
import { useBoardStore } from '../store/board.store';

import HomeSldebarSlider from '@/components/page-sections/home/HomeSidebarSlider.vue';
import HomeHeader from '@/components/page-sections/home/HomeHeader.vue';
import AddBoardModal from '@/components/modals/AddBoardModal.vue';


const rootStore = useRootStore()
const boardStore = useBoardStore()
const currentBoard = computed(() => boardStore.currentBoard)

const isAddBoardModalShown = ref(false)

// let currentDropdown = computed(() => rootStore.currentDropdown)
// const toggleCurrentDropdown = rootStore.toggleCurrentDropdown
// onMounted(() => {
//   window.addEventListener('click', function () {
//     rootStore.toggleCurrentDropdown('')
//   })
// })
</script>