<template>
  <div class="select-container relative">
    <label
      v-if="label"
      class="label block px-2 absolute mt-0.5 transition-300 bg-white font-semibold z-0"
      :class="[errorMessage ? 'text-red' : 'text-grey-7', {'label-lifted': calendarDate}]"
    >
      {{ label }}
    </label>
    <div @click.stop="$emit('toggle')" class="px-4 pt-1.5 pb-1 flex items-center justify-between space-x-2 text-sm text-grey-6 cursor-pointer border border-grey-5 rounded">
      <p class="font-semibold text-grey-9">
        {{ stringifiedDate }}
      </p>
      <img class="w-6 h-6" src="/assets/icons/chevron-down.svg">
    </div>
    <!-- Dropdown -->
    <transition name="toggle">
      <div
        @click.stop
        v-if="isDropdownShown"
        class="absolute top-full right-0 mt-1 transform scale-75 origin-top-right custom-scrollbar bg-white shadow-c rounded z-10"
      >
        <DatePicker
          class="font-mulish text-sm"
          v-model="calendarDate"
          is-expanded
        />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import 'v-calendar/dist/style.css';
import { DatePicker } from 'v-calendar'
import { stringifyDate } from '../../../helpers/dateFormatter'

const props = defineProps<{
  isDropdownShown: boolean
  date?: string,
  label?: string,
  errorMessage?: string
}>()
const emit = defineEmits(['toggle'])

const calendarDate = ref(props.date ? new Date(props.date) : new Date())
const stringifiedDate = computed(() => {
  return stringifyDate(calendarDate.value)
})
watch(() => calendarDate.value, () => {
  emit('toggle', calendarDate.value.toISOString())
})
</script>

<style scoped>
.select-container > .label {
  top: 0.5rem;
  margin-left: 0.5rem;
  font-size: 0.875rem/* 14px */;
  line-height: 1.25rem/* 20px */
}
.select-container:focus > .label, .select-container > .label.label-lifted {
  top: -0.7rem;
  margin-left: 0.5rem;
  font-size: 0.75rem/* 12px */;
  line-height: 1rem/* 16px */;
}
</style>