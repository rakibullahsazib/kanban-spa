import { getAuth, onAuthStateChanged } from "firebase/auth";
import router from "../router";
import { useRootStore } from "../store/rootStore";
import { useUserStore } from "../store/userStore";

const auth = getAuth();
export const listenFirebaseAuthState = () => onAuthStateChanged(auth, (user) => {
  const rootStore = useRootStore()
  const userStore = useUserStore()
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
    router.push({name: 'Login'})
  }
});