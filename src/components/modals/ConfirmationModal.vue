<template>
    <div @click.self.stop="$emit('closeModal')" class="fixed inset-0  flex justify-center items-center bg-grey-9 bg-opacity-60">
        <div @click.stop class="modal-viewport relative px-14 py-12 bg-white overflow-y-auto custom-scrollbar rounded">
            <img @click="$emit('closeModal')" class="absolute top-6 right-6 w-6 h-6 cursor-pointer" src="/assets/icons/cross-circle.svg" alt="Close" data-testid="cross-img">

            <h6 class="text-center text-grey-9 font-semibold text-lg" data-testid="title">
              {{ title }}
            </h6>
            <p v-if="message" class="mt-6 text-sm text-center text-grey-9" data-testid="message">
              {{ message }}
            </p>
            <div class="mt-8 flex-center space-x-3">
              <Button
                v-if="noBtn"
                @click="$emit('closeModal')"
                :title="noBtn"
                data-testid="noBtn"
              />
              <Button
                @click="$emit('confirm')"
                :title="yesBtn"
                type="danger"
                data-testid="yesBtn"
              />
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import Button from '../buttons/Button.vue';
defineProps<{
  title: string,
  message?: string,
  yesBtn: string,
  noBtn?: string
}>()
</script>

<style scoped>
.modal-viewport {
    max-height: 80%;
    max-width: 540px;
    min-width: 460px;
}
</style>