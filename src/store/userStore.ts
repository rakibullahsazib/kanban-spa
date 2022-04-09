import { defineStore } from 'pinia'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { UserInfo } from './interface/user.interface'
import { db } from '../firebase/config'
import { collection, query, where, doc, addDoc, getDocs } from 'firebase/firestore'
console.log('userStore')
export interface UserStoreState {
  uid: string;
  userInfo: UserInfo;
  email: string;
  isLoggedIn: boolean;
}

export const useUserStore = defineStore('user', {
  state: (): UserStoreState => {
    return {
      uid: '',
      userInfo: {
        name: '',
        user_uid: ''
      },
      email: '',
      isLoggedIn: false
    }
  },
  getters: {
  },
  actions: {
    async createUser (name: string, email: string, password: string) {
      const auth = getAuth();
      const response = await createUserWithEmailAndPassword(auth, email, password)
      console.log(response.user)
      await addDoc(collection(db, "users"), {
        name,
        user_uid: response.user.uid
      });
    },
    async logInUser (email: string, password: string) {
      const auth = getAuth();
      const response = await signInWithEmailAndPassword(auth, email, password)
      console.log(response.user)
    },
    async logOutUser () {
      console.log('logout')
      const auth = getAuth();
      const response = await signOut(auth)
      console.log(response)
    },
    async getUserInfo () {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("user_uid", "==", this.uid))
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        this.userInfo = doc.data() as UserInfo
      });
    },
  },
})