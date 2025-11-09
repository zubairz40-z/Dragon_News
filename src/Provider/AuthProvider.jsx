// src/Provider/AuthProvider.jsx
import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config"; // make sure this initializes Firebase

export const AuthContext = createContext(null); // ✅ create the context
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);      // ✅ current user (or null)
  const [loading, setLoading] = useState(true); // ✅ while we check login status

  // ---------- Auth actions we expose to the app ----------
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = async ({ displayName, photoURL }) => {
    if (!auth.currentUser) return;
    await updateProfile(auth.currentUser, { displayName, photoURL });
    // refresh our local user state after profile update
    setUser({ ...auth.currentUser });
  };

  // ---------- Subscribe to auth changes ----------
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null); // ✅ fix typo & null safety
      setLoading(false);
    });
    return () => unsubscribe();     // ✅ cleanup
  }, []);

  const authData = {
    user,
    loading,
    setUser,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authData}>  {/* ✅ correct Provider API */}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
