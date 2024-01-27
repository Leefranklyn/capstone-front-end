/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [IsloggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [lastActivity, setLastActivity] = useState(Date.now());
  const [loading, setIsLoading] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  const login = async (credentials) => {
    setIsLoading(true);
    try {
      const response = await fetch('https://propsqr.onrender.com/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({credentials})
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Login successful:', data);
        setAlertType('success');
        setAlertMessage('Login successful');
        setShowAlert(true);
        setToken(data.token);
        setIsLoggedIn(true);
      } else if (response.status === 404) {
        console.error('Login failed:', response.status, data.message);
        setAlertType('error');
        setAlertMessage('User not found');
        setShowAlert(true);
      } else if (response.status === 400) {
        console.error('Login failed:', response.status, data.message);
        setAlertType('error');
        setAlertMessage("Email not verified");
        setShowAlert(true);
      } else if (response.status === 401) {
        console.error('Login failed:', response.status, data.message);
        setAlertType('error');
        setAlertMessage('Invalid password');
        setShowAlert(true);
      }
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }  };

  const logout = () => {
    setIsLoggedIn(false);
    setToken(null);
  };

  useEffect(() => {
    const checkTokenExpiration = () => {
      const currentTime = Date.now();
      const tokenExpirationTime = 24 * 60 * 60 * 1000;

      if (currentTime - lastActivity > tokenExpirationTime) {
        logout();
      }
    };

    const interval = setInterval(checkTokenExpiration, 60000);

    return () => clearInterval(interval);
  }, [lastActivity]);

  const values = {
    IsloggedIn,
    token,
    login,
    logout,
    setLastActivity,
    loading,
    alertType,
    alertMessage,
    showAlert
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
