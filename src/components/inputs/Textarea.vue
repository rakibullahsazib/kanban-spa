<template>
  <div>
    <div class="relative border rounded px-2 py-2" :class="error ? 'border-red' : 'border-grey-5'">    
      <textarea
        :id="id"
        class="text-input relative px-2 pt-2 block w-full min-w-full bg-white bg-opacity-0 text-sm text-grey-9 focus:outline-none custom-scrollbar z-10"
        :class="[error ? 'text-red' : 'text-grey-9', {'resize-none': !resize}]"
        :value="input"
        @input="changeInput"
        :style="{height: inputHeight}"
      >
      </textarea>   
      <label
        v-if="label"
        :for="id"
        class="label block px-2 absolute mt-0.5 transition-300 bg-white font-semibold z-0"
        :class="[error ? 'text-red' : 'text-grey-7', {'label-lifted -ml-2': input}]"
      >
        {{ label }}
      </label>
    </div>
    <p v-if="limit" class="mt-0.5 text-grey-7 text-xs">
      {{ input.length }} / {{ limit }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { checkStringLimit } from '../../helpers/stringMethods';
const props = defineProps<{
  id?: string,
  label?: string,
  inputHeight?: string,
  error?: boolean,
  resize?: boolean
  initialValue?: string,
  limit: number
}>()
const emit = defineEmits(['inputChange'])

const input = ref(props.initialValue || '')
const changeInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  input.value = checkStringLimit(target.value, props.limit)
  target.value = input.value
  emit('inputChange', input.value.trimEnd())
}
</script>

<style scoped>
.text-input + .label {
  top: 0.4rem;
  font-size: 0.875rem/* 14px */;
  line-height: 1.25rem/* 20px */
}
.text-input:focus + .label, .text-input + .label.label-lifted {
  top: -0.7rem;
  margin-left: -0.1rem;
  font-size: 0.75rem/* 12px */;
  line-height: 1rem/* 16px */;
}
</style>