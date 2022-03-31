<template>
  <p
    ref="contentEditableEl"
    contenteditable
    spellcheck="false"
    v-text="initialContent"
    @blur="onContentChange"
    @input="onContentChange"
    class="rounded cursor-text focus:outline-grey-5 border border-white hover:border-grey-5"
  >
  </p>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { debounce } from '../../../helpers/debounce'

const props = defineProps<{
  initialContent?: string
  limit?: number
}>()
const emit = defineEmits(['inputChange'])

const contentEditableEl = ref<HTMLDivElement>()

const onContentChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  console.log(target.innerText)
  let text = target.innerText
  if (!text) {
    target.innerText = props.initialContent || ''
    return
  }
  if (props.limit && text.length > props.limit) {
    text = text.substring(0, props.limit)
    target.innerText = text
  }
  emitEvent(text)
}
const emitEvent = debounce((text: string) => {
  emit('inputChange', text)
}, 500)

onMounted(() => {
  console.log(contentEditableEl.value)
  contentEditableEl.value?.focus()
})
</script>

<style scoped>

</style>