<template>
  <div class="py-10 w-80 text-grey-9">
    <div class="flex items-center space-x-3">
      <img class="h-10" src="/assets/icons/rs-logo.svg" alt="">
      <h1 class="text-2xl font-semibold">
        Login
      </h1>
    </div>
    <div class="mt-8 relative">
      <TextInput
        @inputChange="changeEmailAddress"
        label="Email"
        :limit="100"
        :error-message="emailErrorMessage"
        class="mt-7"
      />
      <TextInput
        @inputChange="changePassword"
        type="password"
        label="Password"
        :limit="32"
        :error-message="passwordErrorMessage"
        class="mt-7"
      />
      <Button
        @click="logIn"
        title="Log In"
        class="mt-8 w-full"
        :disabled="!isBtnActive"
      />
      <transition name="fade">
        <p v-if="apiErrorMessage" class="absolute w-full top-full mt-0.5 text-xs font-semibold text-red truncate pr-6 text-center" :title="apiErrorMessage">
          {{ apiErrorMessage }}
        </p>
      </transition>
    </div>
    <div class="mt-8 text-xs text-grey-7">
      <p>
        Don't have an account? <router-link class="font-semibold underline text-grey-9" :to="{ name: 'Create Account' }">Create Account</router-link>
      </p>
      <p class="mt-1">
        All rights reserved &copy; Rakibullah Sazib, {{ new Date().getFullYear() }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import TextInput from '../../components/inputs/text-inputs/TextInput.vue';
import { useUserStore } from '../../store/userStore'
import Button from '../../components/buttons/Button.vue';
import { validateEmailAddress, findPasswordError } from '../../helpers/inputValidators'
import { debounce } from '../../helpers/debounce';
import { useRootStore } from '../../store/rootStore';
import { useRouter } from 'vue-router';

const router = useRouter()
const rootStore = useRootStore()
const userStore = useUserStore()

// Email
const email = ref('')
const emailErrorMessage = ref('')
const changeEmailAddress = debounce((value: string) => {
  apiErrorMessage.value = ''
  emailErrorMessage.value = ''
  if (validateEmailAddress(value)) {
    email.value = value
  } else {
    emailErrorMessage.value = 'Please provide a valid email address.'
  }
}, 500)
// Password
const password = ref('')
const passwordErrorMessage = ref('')
const changePassword = debounce((value: string) => {
  apiErrorMessage.value = ''
  passwordErrorMessage.value = findPasswordError(value, 8, 32)
  if (!passwordErrorMessage.value) {
    password.value = value
  }
}, 500)

// Sign up
const apiErrorMessage = ref('')
const isBtnActive = computed(() => {
  if (email.value && password.value && !apiErrorMessage.value && !emailErrorMessage.value && !passwordErrorMessage.value) {
    return true
  }
  return false
})
const logIn = async () => {
  console.log('signup')
  if (!isBtnActive.value) return
  rootStore.resetStores()
  try {
    await userStore.logInUser(email.value, password.value)
    if (rootStore.previousRouteName) {
      router.push({ name: rootStore.previousRouteName })
    } else {
      router.push({ name: 'Home' })
    }
  } catch (error: any) {
    apiErrorMessage.value = error.message
  }
}
</script>

<style scoped>

</style>