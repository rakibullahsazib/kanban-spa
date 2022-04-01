<template>
    <div @click.self.stop="$emit('closeModal')" class="fixed inset-0  flex justify-center items-center bg-grey-9 bg-opacity-60">
        <div @click.stop class="modal-viewport relative px-14 py-12 bg-white overflow-y-auto custom-scrollbar rounded">
            <img @click="$emit('closeModal')" class="absolute top-6 right-6 w-6 h-6 cursor-pointer" src="/assets/icons/cross-circle.svg" alt="Close" data-testid="cross-img">

            <h6 class="text-center text-grey-8 font-semibold text-lg">
              {{ board ? 'Edit' : 'Add' }} Board
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
                @click="board ? editBoard() : addBoard()"
                :title="`${ board ? 'Save Changes' : 'Add Board' }`"
                :disabled="!isBtnActive"
                class="mt-8 mx-auto"
            />
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue'
import TextInput from '../inputs/text-inputs/TextInput.vue';
import Textarea from '../inputs/text-inputs/Textarea.vue';
import Button from '../buttons/Button.vue';
import { BoardBrief, BoardUpdateRequest } from '../../store/interface/board.interface';
import { useBoardStore } from '../../store/boardStore';
import { getMaxOrder, isNameDuplicatedCaseInsensitive } from '../../helpers/arrayMethods';
const props = defineProps<{
  board?: BoardBrief
}>()
const emit = defineEmits(['closeModal'])

const boardStore = useBoardStore()
const boardName = ref(props.board?.name || '')
const boardNameError = ref('')
const changeBoardName = (value: string) => {
    boardNameError.value = ''
    boardName.value = value
    if (!boardName.value) {
        boardNameError.value = "Board name can not be empty."
        return
    }
    // in case of edit if the value is same no need to proceed further
    if (props.board && props.board.name === value)  return

    if (isNameDuplicatedCaseInsensitive(value, boardStore.boards)) {
        console.log('name duplicated')
        boardNameError.value = "This board name already exists."
    }
}
const boardDescription = ref(props.board?.description || '')
const changeBoardDescription = (value: string) => {
    boardDescription.value = value
}
const isBtnActive = computed(() => {
    // Case: Add board
    if (!props.board && boardName.value && !boardNameError.value) {
        return true
    }
    // Case: Edit board
    if (props.board && boardName.value && !boardNameError.value
        && (
            // if board name is changed
            (props.board.name !== boardName.value)
            // or board name is same but description changed
            || (props.board.name === boardName.value && props.board.description !== boardDescription.value)
        )
    ) {
        return true
    }
    
    return false
})
const addBoard = () => {
    // console.log('adding board', boardName.value, boardDescription.value)
    boardStore.addBoard({
        name: boardName.value,
        description: boardDescription.value,
        order: getMaxOrder(boardStore.boards) + 1
    })
    emit('closeModal')
}
const editBoard = () => {
    if (!props.board) return
    const reqBody:BoardUpdateRequest = {}
    if (props.board.name !== boardName.value) {
        reqBody.name = boardName.value
    }
    if (props.board.description !== boardDescription.value) {
        reqBody.description = boardDescription.value
    }
    // console.log(reqBody)
    boardStore.updateBoard(props.board.id, reqBody)
    emit('closeModal')
}
</script>

<style scoped>
.modal-viewport {
    max-height: 80%;
    max-width: 540px;
    min-width: 460px;
}
</style>