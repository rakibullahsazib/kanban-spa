<template>
    <div @click.self.stop="$emit('closeModal')" class="fixed inset-0  flex justify-center items-center bg-grey-9 bg-opacity-60">
        <div @click.stop class="modal-viewport relative px-12 py-12 bg-white overflow-y-auto custom-scrollbar rounded">
            <img @click="$emit('closeModal')" class="absolute top-6 right-6 w-6 h-6 cursor-pointer" src="/assets/icons/cross-circle.svg" alt="Close">

            <h6 class="text-center text-grey-8 font-semibold text-lg">
              {{ boardId ? 'Edit' : 'Add' }} Board
            </h6>

            <div class="mt-8">
                <TextInput
                    id="board-name"
                    label="Board Title"
                />
                <Textarea
                    id="board-description"
                    label="Description"
                    inputHeight="7rem"
                    class="mt-4"
                />
            </div>
            <div class="mt-12 flex justify-center">
                <button @click="onConfirm" class="px-4 py-2 text-red  rounded-full focus:outline-none">
                    Add Board
                </button>
                <button @click="$emit('closeModal')" class="ml-6 px-6 py-4 text-white bg-violet-2 rounded-full focus:outline-none">
                    Cancel
                </button>
            </div>
        </div>

    </div>
</template>


<script setup lang="ts">
import TextInput from '../inputs/TextInput.vue';
import Textarea from '../inputs/Textarea.vue';
defineProps<{
  boardId?: string
}>()
const onConfirm = () => {
  console.log('confirm')
}
</script>

<style scoped>
.modal-viewport {
    max-height: 80%;
    max-width: 540px;
    min-width: 420px;
}
</style>