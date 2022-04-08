<template>
  <div class="py-10 w-80 text-grey-9">
    <div class="flex items-center space-x-3">
      <img class="h-10" src="/assets/icons/rs-logo.svg" alt="">
      <h1 class="text-2xl font-semibold">
        Create Account
      </h1>
    </div>
    <div class="mt-8">
      <TextInput
        @inputChange="changeEmailAddress"
        label="Email"
        :limit="100"
        :error-message="emailErrorMessage"
      />
      <TextInput
        @inputChange="changePassword"
        type="password"
        label="Password"
        :limit="32"
        class="mt-7"
        :error-message="passwordErrorMessage"
      />
      <TextInput
        @inputChange="changeConfirmPassword"
        type="password"
        label="Confirm Password"
        :limit="32"
        class="mt-7"
        :error-message="confirmPasswordErrorMessage"
      />
      <Button
        @click="signup"
        title="Sign Up"
        class="mt-8 w-full"
        :disabled="!isBtnActive"
      />
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
import Button from '../../components/buttons/Button.vue';
import { validateEmailAddress, findPasswordError } from '../../helpers/inputValidators'
import { debounce } from '../../helpers/debounce';

const email = ref('')
const emailErrorMessage = ref('')
const changeEmailAddress = debounce((value: string) => {
  emailErrorMessage.value = ''
  if (validateEmailAddress(value)) {
    email.value = value
  } else {
    emailErrorMessage.value = 'Please provide a valid email address.'
  }
}, 500)
const password = ref('')
const passwordErrorMessage = ref('')
const changePassword = debounce((value: string) => {
  passwordErrorMessage.value = findPasswordError(value, 8, 32)
  if (!passwordErrorMessage.value) {
    password.value = value
  }
}, 500)
const confirmPassword = ref('')
const confirmPasswordErrorMessage = ref('')
const changeConfirmPassword = debounce((value: string) => {
  confirmPasswordErrorMessage.value = ''
  confirmPassword.value = value
  if (!passwordErrorMessage.value && password.value !== confirmPassword.value) {
    confirmPasswordErrorMessage.value = 'Passwords do not match'
  }
}, 500)
const apiErrorMessage = ref('')
const isBtnActive = computed(() => {
  if (email.value && password.value && confirmPassword.value && !apiErrorMessage.value && !emailErrorMessage.value && !passwordErrorMessage.value && !confirmPasswordErrorMessage.value) {
    return true
  }
  return false
})
const signup = () => {
  console.log('signup')
}
</script>

<style scoped>

</style>