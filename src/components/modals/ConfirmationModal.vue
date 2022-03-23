<template>
    <div @click.self.stop="$emit('closeModal')" class="fixed inset-0  flex justify-center items-center bg-grey-8 bg-opacity-60">
        <div @click.stop class="relative px-20 py-16 bg-white overflow-y-auto custom-scrollbar rounded" style="max-height: 80%; max-width: 540px; min-width: 375px">
            <img @click="$emit('closeModal')" class="absolute top-4 right-4 w-6 h-6 cursor-pointer" src="@/assets/icons/cross-circle.svg" alt="Close">

            <h6 v-if="title" class="text-center text-grey-8 font-medium text-lg">
              {{ title }}
            </h6>

            <p class="mt-6 text-center text-grey-8">
                {{ message }}
            </p>
            <div class="mt-12 flex justify-center">
                <button @click="onConfirm" v-if="yesBtnText" class="px-4 py-2 text-red  rounded-full focus:outline-none">
                    {{ yesBtnText }}
                </button>
                <button @click="$emit('closeModal')" v-if="noBtnText" class="ml-6 px-6 py-4 text-white bg-violet-2 rounded-full focus:outline-none">
                    {{ noBtnText }}
                </button>
            </div>
        </div>

    </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'ConfirmationModal',
  props: {
    title: String,
    message: String,
    yesBtnText: String,
    noBtnText: String
  },
  setup (props, { emit }) {
    const isConfirmBtnActive = ref(true)
    const onConfirm = () => {
      if (isConfirmBtnActive.value) {
        emit('confirm')
        isConfirmBtnActive.value = false
      }
    }
    return {
      onConfirm
    }
  }
}
</script>

<style>

</style>
