<template>
    <div @click.self.stop="$emit('closeModal')" class="fixed inset-0  flex justify-center items-center bg-grey-9 bg-opacity-60">
        <div @click.stop="toggleCurrentDropdown('')" class="modal-viewport relative px-14 py-12 bg-white overflow-y-auto custom-scrollbar rounded">
            <img @click="$emit('closeModal')" class="absolute top-6 right-6 w-6 h-6 cursor-pointer" src="/assets/icons/cross-circle.svg" alt="Close" data-testid="cross-img">

            <h6 class="text-center text-grey-8 font-semibold text-lg">
              {{ task ? 'Edit' : 'Add' }} Task
            </h6>

            <div class="mt-8 flex space-x-3">
              <!-- Task title -->
              <TextInput
                  @inputChange="changeTaskName"
                  id="task-name"
                  label="Task Title"
                  :initialValue="task?.name"
                  :limit="100"
                  :errorMessage="taskNameError"
                  class="flex-grow"
              />
              <SelectedColorPicker
                @toggle="toggleCurrentDropdown('task-color-picker')"
                @optionClicked="changeTaskColor"
                :isDropdownShown="currentDropdown === 'task-color-picker'"
                :colors="taskBackgroundColors"
                :selectedColor="taskColor"
              />
              <!-- Task title -->
              <TextInput
                  @inputChange="changeTaskAssignee"
                  id="task-assignee"
                  label="Assignee"
                  :initialValue="task?.assignee"
                  :limit="100"
                  class="w-52"
              />
            </div>
            <div class="mt-8 flex space-x-3">
              <div class="flex-grow">
                <Textarea
                    @inputChange="changeTaskDescription"
                    id="task-description"
                    label="Description"
                    inputHeight="7.65rem"
                    class="flex-grow"
                    :initialValue="task?.description"
                    :limit="1000"
                />
              </div>
              <div class="w-40">
                <!-- Task Due Date Picker -->
                <DatePicker
                  @toggle="changeTaskDueDate"
                  :isDropdownShown="currentDropdown === 'task-due-date'"
                  :date="task?.dueDate"
                  label="Due Date"
                  class=""
                />
                <!-- Task Stage -->
                <SingleSelectDropdown
                  @toggle="toggleCurrentDropdown('task-stage')"
                  @optionClicked="changeTaskStage"
                  :isDropdownShown="currentDropdown === 'task-stage'"
                  :options="stages"
                  label="Stage"
                  :selectedOptionId="taskStageId"
                  dropdownHeight="160px"
                  class="mt-4 text-grey-9 text-sm"
                />
                <!-- Task Status -->
                <SingleSelectDropdown
                  @toggle="toggleCurrentDropdown('task-status')"
                  @optionClicked="changeTaskStatus"
                  :isDropdownShown="currentDropdown === 'task-status'"
                  :options="statuses"
                  label="Status"
                  :selectedOptionId="taskStatusId"
                  dropdownHeight="160px"
                  class="mt-4 text-grey-9 text-sm"
                />
              </div>
            </div>
            <Button
                @click="task ? editTask() : addTask()"
                :title="`${ task ? 'Save Changes' : 'Add Task' }`"
                :disabled="!isBtnActive"
                class="mt-8 mx-auto"
            />
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue'
import { useBoardStore } from '../../store/board.store';
import TextInput from '../inputs/text-inputs/TextInput.vue';
import Textarea from '../inputs/text-inputs/Textarea.vue';
import Button from '../buttons/Button.vue';
import SelectedColorPicker from '../inputs/color-picker/SelectedColorPicker.vue';
import SingleSelectDropdown from '../inputs/dropdowns/SingleSelectDropdown.vue';

import { TaskDetail, TaskUpdateRequest } from '../../store/interface/board.interface';
import { taskBackgroundColors } from '../../helpers/data/colors'
import { getMaxOrder, isNameDuplicatedCaseInsensitive } from '../../helpers/arrayMethods';
import { useRootStore } from '../../store/root.store';
import DatePicker from '../inputs/DatePicker.vue';

const props = defineProps<{
  task?: TaskDetail
}>()
const emit = defineEmits(['closeModal'])

const rootStore = useRootStore()
const boardStore = useBoardStore()
// Task name
const taskName = ref(props.task?.name || '')
const taskNameError = ref('')
const changeTaskName = (value: string) => {
    taskNameError.value = ''
    taskName.value = value
    if (!taskName.value) {
        taskNameError.value = "Task name can not be empty."
        return
    }
    // in case of edit if the value is same no need to proceed further
    if (props.task && props.task.name === value)  return

    if (isNameDuplicatedCaseInsensitive(value, boardStore.boards)) {
        console.log('name duplicated')
        taskNameError.value = "This task name already exists in this board."
    }
}
// Task Color
const taskColor = ref(props.task?.color || taskBackgroundColors[0])
const changeTaskColor = (color: string) => {
  taskColor.value = color
}
// Task Assignee
const taskAssignee = ref(props.task?.assignee || '')
const changeTaskAssignee = (value: string) => {
    taskAssignee.value = value
}
// Task Description
const taskDescription = ref(props.task?.description || '')
const changeTaskDescription = (value: string) => {
    taskDescription.value = value
}

// Task Due Date
const taskDueDate = ref(props.task?.dueDate || new Date().toISOString())
const changeTaskDueDate = (isoDate: string) => {
  taskDueDate.value = isoDate
  toggleCurrentDropdown('task-due-date')
}

// Task Stage
const stages = computed(() => boardStore.currentBoard?.stages || [])
const taskStageId = ref(props.task?.stageId || stages.value?.find(s => s.name === 'Backlog')?.id)
const changeTaskStage = (stageId: string) => {
  taskStageId.value = stageId
}

// Task Status
const statuses = computed(() => boardStore.taskStatuses || [])
const taskStatusId = ref(props.task?.statusId || statuses.value?.find(s => s.name === 'Ongoing')?.id)
const changeTaskStatus = (statusId: string) => {
  taskStatusId.value = statusId
}

const isBtnActive = computed(() => {
    // Case: Add task
    if (!props.task && taskName.value && !taskNameError.value && taskDueDate.value && taskStageId.value && taskStatusId.value) {
        return true
    }
    // Case: Edit task
    if (props.task && taskName.value && !taskNameError.value && taskDueDate.value && taskStageId.value && taskStatusId.value
        && (
            // if task name is changed
            (props.task.name !== taskName.value)
            // or task name is same but description changed
            || (props.task.name === taskName.value && props.task.description !== taskDescription.value)
            || (props.task.assignee !== taskAssignee.value)
            || (props.task.dueDate !== taskDueDate.value)
            || (props.task.stageId !== taskStageId.value)
            || (props.task.statusId !== taskStatusId.value)
        )
    ) {
        
        return true
    }
    
    return false
})
const addTask = () => {
    console.log('adding task', taskName.value, taskDescription.value)
    if (!taskStageId.value || !taskStatusId.value) return
    boardStore.addTask({
        name: taskName.value,
        description: taskDescription.value,
        order: getMaxOrder(boardStore.boards) + 1,
        assignee: taskAssignee.value,
        color: taskColor.value,
        dueDate: taskDueDate.value,
        stageId: taskStageId.value,
        statusId: taskStatusId.value,
    })
    emit('closeModal')
}
const editTask = () => {
    if (!props.task) return
    const reqBody:TaskUpdateRequest = {}
    if (props.task.name !== taskName.value) {
        reqBody.name = taskName.value
    }
    if (props.task.description !== taskDescription.value) {
        reqBody.description = taskDescription.value
    }
    if (props.task.color !== taskColor.value) {
        reqBody.color = taskColor.value
    }
    if (props.task.assignee !== taskAssignee.value) {
        reqBody.assignee = taskAssignee.value
    }
    if (props.task.dueDate !== taskDueDate.value) {
        reqBody.dueDate = taskDueDate.value
    }
    if (props.task.stageId !== taskStageId.value) {
        reqBody.stageId = taskStageId.value
    }
    if (props.task.statusId !== taskStatusId.value) {
        reqBody.statusId = taskStatusId.value
    }
    // console.log(reqBody)
    boardStore.updateTask(props.task.stageId, props.task.id, reqBody)
    emit('closeModal')
}

let currentDropdown = computed(() => rootStore.currentDropdown)
const toggleCurrentDropdown = rootStore.toggleCurrentDropdown
</script>

<style scoped>
.modal-viewport {
    max-height: 80%;
    max-width: 660px;
    min-width: 660px;
}
</style>