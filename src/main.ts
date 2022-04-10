import { Component, createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import { createPinia } from 'pinia'

import { firebaseApp, db } from './firebase/config'
import { useRootStore } from "./store/rootStore";
import { useUserStore } from "./store/userStore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
let app: Component;
onAuthStateChanged(auth, (user) => {
  if (!app) {
    app = createApp(App).use(createPinia()).use(router).mount('#app')
  }
  const userStore = useUserStore()
  const rootStore = useRootStore()
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User

    userStore.uid = user.uid
    userStore.getUserInfo()
    if (user.email) {
      userStore.email = user.email;
    }
    userStore.isLoggedIn = true
    console.log('loggedIn', userStore.email, userStore.uid)
  } else {
    rootStore.resetStores()
    // router.push({name: 'Login'})
  }
})
