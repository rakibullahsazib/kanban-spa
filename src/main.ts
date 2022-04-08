import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
// import pinia from './store'
import { createPinia } from 'pinia'
import { firebaseApp, db } from './firebase/config'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useUserStore } from "./store/userStore";

createApp(App).use(createPinia()).use(router).mount('#app')
const firebase = firebaseApp
const firestore = db

const auth = getAuth();
const userStore = useUserStore()
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    userStore.uid = user.uid
    if (user.email) {
      userStore.email = user.email;
    }
    userStore.loggedIn = true
    console.log('loggedIn', userStore.email, userStore.uid)
    // ...
  } else {
    userStore.resetStores()
  }
});
