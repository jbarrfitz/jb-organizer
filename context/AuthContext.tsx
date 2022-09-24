import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from 'firebase/auth';
import { auth } from '../config/firebase';

import { message } from 'antd';
const { info, success, warning, error } = message;

export interface IUserState extends Partial<User> {}

export interface IAuthContext {
  user?: Nullable<IUserState>;
  login: (email: string, password: string) => Promise<UserCredential>;
  signup: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<Partial<IAuthContext>>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState<IUserState | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signup = async (email, password) => {
    let res: UserCredential;
    try {
      res = await createUserWithEmailAndPassword(auth, email, password);
      success(`Signed up with ${res.user.displayName || res.user.email}!`)
    } catch(err) {
      error(`Unable to login: ${err.toString()}`);
    }
    return res;
  };

  const login = async (email, password) => {
    let res: UserCredential;
    try {
      res = await signInWithEmailAndPassword(auth, email, password)
      success(`Signed in as ${res.user.displayName || res.user.email}!`)
    } catch(err) {
      error(`Unable to login: ${err.toString()}`);
    }
    return res;
  };

  const logout = async () => {
    setUser(null);
    await signOut(auth);
    info('Logged out successfully. Returning to main page...')
    setTimeout(() => {}, 1000);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
