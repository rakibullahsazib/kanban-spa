<template>
  <div class="relative border rounded px-4 py-2 transition-300" :class="errorMessage ? 'border-red' : 'border-grey-5'">    
    <input
      type="text"
      :id="id"
      class="text-input relative block w-full bg-white bg-opacity-0 text-sm text-grey-9 transition-300 focus:outline-none z-10"
      :class="errorMessage ? 'text-red' : 'text-grey-9'"
      :value="input"
      @input="changeInput"
    >
    <label
      v-if="label"
      :for="id"
      class="label block px-2 absolute mt-0.5 transition-300 bg-white font-semibold z-0 transition-300"
      :class="[errorMessage ? 'text-red' : 'text-grey-7', {'label-lifted': input}]"
    >
      {{ label }}
    </label>
    <transition name="fade">
      <p v-if="errorMessage" class="absolute top-full mt-1 text-xs font-semibold text-red">
        {{ errorMessage }}
      </p>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { checkStringLimit } from '../../helpers/stringMethods';
const props = defineProps<{
  id?: string,
  label?: string,
  errorMessage?: string,
  initialValue?: string
  limit: number
}>()
const emit = defineEmits(['inputChange'])

const input = ref(props.initialValue || '')
const changeInput = (event: Event) => {
  console.log('input changed')
  const target = event.target as HTMLInputElement
  input.value = checkStringLimit(target.value, props.limit)
  target.value = input.value
  emit('inputChange', input.value.trimEnd())
}
</script>

<style scoped>
.text-input + .label {
  top: 0.4rem;
  margin-left: -0.5rem;
  font-size: 0.875rem/* 14px */;
  line-height: 1.25rem/* 20px */
}
.text-input:focus + .label, .text-input + .label.label-lifted {
  top: -0.7rem;
  margin-left: -0.5rem;
  font-size: 0.75rem/* 12px */;
  line-height: 1rem/* 16px */;
}
</style>