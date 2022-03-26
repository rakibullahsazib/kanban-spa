<template>
    <div @click.self.stop="$emit('closeModal')" class="fixed inset-0  flex justify-center items-center bg-grey-9 bg-opacity-60">
        <div @click.stop class="modal-viewport relative px-12 py-12 bg-white overflow-y-auto custom-scrollbar rounded">
            <img @click="$emit('closeModal')" class="absolute top-6 right-6 w-6 h-6 cursor-pointer" src="/assets/icons/cross-circle.svg" alt="Close">

            <h6 class="text-center text-grey-8 font-semibold text-lg">
              {{ boardId ? 'Edit' : 'Add' }} Board
            </h6>

            <div class="mt-8">
                <TextInput
                    @inputChange="changeBoardName"
                    id="board-name"
                    label="Board Title"
                    :initialValue="board?.name"
                    :limit="100"
                    :errorMessage="boardNameError"
                />
                <Textarea
                    @inputChange="changeBoardDescription"
                    id="board-description"
                    label="Description"
                    inputHeight="7rem"
                    class="mt-8"
                    :initialValue="board?.description"
                    :limit="500"
                />
            </div>
            <Button
                @click="boardId ? editBoard() : addBoard()"
                :title="`${ boardId ? 'Save Changes' : 'Add Board' }`"
                class="mt-8 mx-auto"
            />
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import TextInput from '../inputs/TextInput.vue';
import Textarea from '../inputs/Textarea.vue';
import Button from '../buttons/Button.vue';
import { BoardBrief, BoardUpdateRequest } from '../../store/interface/board.interface';
import { useBoardStore } from '../../store/board.store';
import { getMaxOrder, isNameDuplicatedCaseInsensitive } from '../../helpers/arrayMethods';
const props = defineProps<{
  boardId?: string
}>()
const emit = defineEmits(['closeModal'])

const boardStore = useBoardStore()
const board = ref<BoardBrief|undefined>(undefined)
if (props.boardId) {
    for (const b of boardStore.boards) {
        if (b.id === props.boardId) {
            board.value = b
        }
    }
}
const boardName = ref(board.value?.name || '')
const boardNameError = ref('')
const changeBoardName = (value: string) => {
    boardNameError.value = ''
    // in case of edit if the value is same no need to proceed further
    if (board.value && board.value.name === value)  return

    if (isNameDuplicatedCaseInsensitive(value, boardStore.boards)) {
        boardNameError.value = "This board name already exists."
    } else {
        boardName.value = value
    }
}
const boardDescription = ref(board.value?.description || '')
const changeBoardDescription = (value: string) => {
    boardDescription.value = value
}
const addBoard = () => {
    boardStore.addBoard({
        name: boardName.value,
        description: boardDescription.value,
        order: getMaxOrder(boardStore.boards) + 1
    })
    emit('closeModal')
}
const editBoard = () => {
    if (!board.value) return
    const reqBody:BoardUpdateRequest = {}
    if (board.value.name !== boardName.value) {
        reqBody.name = boardName.value
    }
    if (board.value.description !== boardDescription.value) {
        reqBody.description = boardDescription.value
    }
    boardStore.updateBoard(board.value.id, reqBody)
    emit('closeModal')
}
</script>

<style scoped>
.modal-viewport {
    max-height: 80%;
    max-width: 540px;
    min-width: 420px;
}
</style>