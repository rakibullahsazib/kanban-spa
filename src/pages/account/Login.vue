<template>
  <div class="py-10 w-80 text-grey-9">
    <div class="flex items-center space-x-3">
      <img class="h-10" src="/assets/icons/rs-logo.svg" alt="">
      <h1 class="text-2xl font-semibold">
        Sign In
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
        @click="signIn"
        title="Sign In"
        class="mt-8 w-full"
        :disabled="!isBtnActive"
      />
      <transition name="fade">
        <p v-if="apiErrorMessage" class="absolute w-full top-full mt-0.5 text-xs font-semibold text-red truncate pr-6 text-center" :title="apiErrorMessage">
          {{ apiErrorMessage }}
        </p>
      </transition>
    </div>
    <div class="mt-10 border-t border-grey-5 flex justify-center">
        <h6 class="-mt-2.5 px-4 text-xs text-grey-7 bg-white">
            or
        </h6>
    </div>
    <!-- Sign in with Google -->
    <div class="relative mt-8 ">
      <button @click="signInWithGoogle" class="p-3 w-full flex justify-center items-center space-x-3 bg-highlight-0 hover:bg-highlight-light rounded-full cursor-pointer  focus:outline-none focus:opacity-80 transition-all duration-300">
          <img class="w-6 h-6" src="/assets/icons/google-logo.png" alt="Google">
          <h6 class="text-sm text-grey-9 font-semibold">
              Sign in with Google
          </h6>
      </button>
      <transition name="fade">
        <p v-if="googleSignInErrorMessage" class="absolute w-full top-full mt-0.5 text-xs font-semibold text-red truncate pr-6 text-center" :title="googleSignInErrorMessage">
          {{ googleSignInErrorMessage }}
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
  googleSignInErrorMessage.value = ''
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
  googleSignInErrorMessage.value = ''
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
const signIn = async () => {
  if (!isBtnActive.value) return
  rootStore.resetStores()
  try {
    await userStore.signInUser(email.value, password.value)
    if (!userStore.isLoggedIn) router.push({ name: 'Login' })
    if (rootStore.previousRoutePath) {
      router.push({ path: rootStore.previousRoutePath })
    } else {
      router.push({ name: 'Home' })
    }
  } catch (error: any) {
    apiErrorMessage.value = error.message
  }
}
const googleSignInErrorMessage = ref('')
const signInWithGoogle = async() => {
  try {
    await userStore.signInWithGoogle()
    if (!userStore.isLoggedIn) router.push({ name: 'Login' })
    if (rootStore.previousRoutePath) {
      router.push({ path: rootStore.previousRoutePath })
    } else {
      router.push({ name: 'Home' })
    }
  } catch (error: any) {
    googleSignInErrorMessage.value = error.message
  }
}
</script>

<style scoped>

</style>