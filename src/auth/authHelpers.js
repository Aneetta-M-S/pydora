import React, { useContext, useState, useEffect } from "react";
import { auth, provider } from "../firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";


  async function Login() {

    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log("auth: ",user);
        localStorage.setItem('user', JSON.stringify(user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  function logout() {
    return signOut(auth);
  }

  // function resetPassword(email) {
  //   return auth.sendPasswordResetEmail(email)
  // }

  //   function updateEmail(email) {
  //     return currentUser.updateEmail(email)
  //   }

  //   function updatePassword(password) {
  //     return currentUser.updatePassword(password)
  //   }

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     setCurrentUser(user);
  //     console.log(user)
  //     setLoading(false);
  //   });

  //   return unsubscribe;
  // }, []);

  const value = {
    Login,
    logout,
  };



export default value;
