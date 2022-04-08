import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useRootStore } from "../store/rootStore";
import { useUserStore } from "../store/userStore";

const auth = getAuth();
export const listenFirebaseAuthState = () => onAuthStateChanged(auth, (user) => {
  const userStore = useUserStore()
  const rootStore = useRootStore()
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    userStore.uid = user.uid
    if (user.email) {
      userStore.email = user.email;
    }
    userStore.loggedIn = true
    console.log('loggedIn', userStore.email, userStore.uid)
  } else {
    rootStore.resetStores()
  }
});