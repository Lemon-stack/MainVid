/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback } from "react";
import { auth, provider } from "../client/client";
import {
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithPopup,
} from "firebase/auth";
import Loading from "@/main/spinner";

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState("lemon");
  const [loading, setLoading] = useState(true);

  const googleSignin = useCallback(() => {
    return signInWithPopup(auth, provider);
  }, []);

  const sendPasswordReset = useCallback(async (email) => {
    return sendPasswordResetEmail(auth, email);
  }, []);

  useEffect(() => {
    setLoading(true); // Set loading to true immediately
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        setCurrentUser(null);
      } else {
        setCurrentUser(user);
  
      }
      setLoading(false); // Set loading to false after determining the user state
    });

    // Cleanup the subscription
  }, []);

  if (loading) {
    return <Loading />;
  }
  const value = {
    currentUser,
    loading,
    googleSignin,
    sendPasswordReset,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
