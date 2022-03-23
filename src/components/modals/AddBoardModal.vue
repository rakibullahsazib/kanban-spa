<template>
    <div @click.self.stop="$emit('closeModal')" class="fixed inset-0  flex justify-center items-center bg-grey-8 bg-opacity-60">
        <div @click.stop class="relative px-20 py-16 bg-white overflow-y-auto custom-scrollbar rounded" style="max-height: 80%; max-width: 540px; min-width: 375px">
            <img @click="$emit('closeModal')" class="absolute top-4 right-4 w-6 h-6 cursor-pointer" src="/assets/icons/cross-circle.svg" alt="Close">

            <h6 class="text-center text-grey-8 font-medium text-lg">
              Add Board
            </h6>

            <p class="mt-6 text-center text-grey-8">
                message
            </p>
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
// defineProps<{
//   y
// }>()
const onConfirm = () => {
  console.log('confirm')
}
</script>

<style scoped>

</style>