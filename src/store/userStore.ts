import { defineStore } from 'pinia'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { db } from '../firebase/config'
import { collection, addDoc } from 'firebase/firestore'

export interface UserStoreState {
  uid: string;
  name: string;
  email: string;
  loggedIn: boolean;
}

export const useUserStore = defineStore('board', {
  state: (): UserStoreState => {
    return {
      uid: '',
      name: '',
      email: '',
      loggedIn: false
    }
  },
  getters: {
  },
  actions: {
    async createUser(name: string, email: string, password: string) {
      const auth = getAuth();
      const response = await createUserWithEmailAndPassword(auth, email, password)
      console.log(response.user)
      await addDoc(collection(db, "users"), {
        name,
        uid: response.user.uid
      });
    }
  },
})