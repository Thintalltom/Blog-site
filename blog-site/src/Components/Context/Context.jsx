import { createContext, useState, useEffect } from "react";
import { auth } from "../../Firebase/firebaseConfig";
import {signInWithEmailAndPassword,
    signOut,
    createUserWithEmailAndPassword,
    onAuthStateChanged} from "firebase/auth";

export const userContext = createContext();

export const UserProvider = (props) => {
const[user, setUser] = useState(null)


function signUp(email, password) {
    //return the function
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const login = (email, password) => {
    //return the function
    return signInWithEmailAndPassword(auth, email, password);
  };

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userContext.Provider value={{
        user, 
        signUp,
        login,
        logOut

    }}>{props.children}</userContext.Provider>
  )

}
