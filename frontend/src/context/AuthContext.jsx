import React, { useContext, useState, useEffect, createContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const API_URL = 'http://localhost:5000/api/auth/'; // Assuming backend runs on 5000

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get(API_URL + 'me', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
        } catch (error) {
          console.error('Token validation failed:', error);
          localStorage.removeItem('token');
          setUser(null);
        }
      }
      setLoading(false);
    };

    checkUser();
  }, []);

  const signIn = async (email, password) => {
    const response = await axios.post(API_URL + 'login', { email, password });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      setUser(response.data);
    }
    return response.data;
  };

  const signUp = async (email, password) => {
    const response = await axios.post(API_URL + 'register', { email, password });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      setUser(response.data);
    }
    return response.data;
  };

  const signOut = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const value = { user, loading, signIn, signUp, signOut };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);