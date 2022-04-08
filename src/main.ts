import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import { createPinia } from 'pinia'

import { firebaseApp, db } from './firebase/config'
import { listenFirebaseAuthState } from './firebase/auth'

createApp(App).use(createPinia()).use(router).mount('#app')

listenFirebaseAuthState()
