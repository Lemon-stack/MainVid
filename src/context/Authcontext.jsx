/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { auth, provider } from "../client/client";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithPopup,
} from "firebase/auth";

// I added the auth functions as a context for easy import anywhere you like
export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }
  function googleSignin() {
    return signInWithPopup(auth, provider);
  }
  const sendPasswordReset = async (email) => {
    return sendPasswordResetEmail(auth, email);
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setCurrentUser(null);
        setLoading(false);
      }
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [currentUser]);


  const value = {
    currentUser,
    signup,
    login,
    logout,
    googleSignin,
    sendPasswordReset,
  };

  if (loading) {
    return <div>Loading......</div>;
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
