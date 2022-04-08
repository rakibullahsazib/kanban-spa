<template>
  <div class="py-10 w-80 text-grey-9">
    <div class="flex items-center space-x-3">
      <img class="h-10" src="/assets/icons/rs-logo.svg" alt="">
      <h1 class="text-2xl font-semibold">
        Create Account
      </h1>
    </div>
    <div class="mt-8 relative">
      <TextInput
        @inputChange="changeName"
        label="Name"
        :limit="100"
        :error-message="nameErrorMessage"
      />
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
      <TextInput
        @inputChange="changeConfirmPassword"
        type="password"
        label="Confirm Password"
        :limit="32"
        :error-message="confirmPasswordErrorMessage"
        class="mt-7"
      />
      <Button
        @click="signup"
        title="Sign Up"
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
        Already have an account? <router-link class="font-semibold underline text-grey-9" :to="{ name: 'Login' }">Login</router-link>
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

const rootStore = useRootStore()
const userStore = useUserStore()

// Name
const name = ref('')
const nameErrorMessage = ref('')
const changeName = debounce((value: string) => {
  apiErrorMessage.value = ''
  nameErrorMessage.value = ''
  if (value) {
    name.value = value
  } else {
    nameErrorMessage.value = 'Name cannot be empty'
  }
}, 500)
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
// Confirm Password
const confirmPassword = ref('')
const confirmPasswordErrorMessage = ref('')
const changeConfirmPassword = debounce((value: string) => {
  apiErrorMessage.value = ''
  confirmPasswordErrorMessage.value = ''
  confirmPassword.value = value
  if (!passwordErrorMessage.value && password.value !== confirmPassword.value) {
    confirmPasswordErrorMessage.value = 'Passwords do not match'
  }
}, 500)
// Sign up
const apiErrorMessage = ref('')
const isBtnActive = computed(() => {
  if (name.value && email.value && password.value && confirmPassword.value && !apiErrorMessage.value && !nameErrorMessage.value && !emailErrorMessage.value && !passwordErrorMessage.value && !confirmPasswordErrorMessage.value) {
    return true
  }
  return false
})
const signup = async () => {
  console.log('signup')
  if (!isBtnActive.value) return
  rootStore.resetStores()
  try {
    await userStore.createUser(name.value, email.value, password.value)
  } catch (error: any) {
    apiErrorMessage.value = error.message
  }
}
</script>

<style scoped>

</style>