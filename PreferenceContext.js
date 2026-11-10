import React, { createContext, useState } from 'react';

export const PreferenceContext = createContext();

export const PreferenceProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleDarkMode = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDarkMode((prev) => !prev);
      setIsLoading(false);
    }, 1000); // 1-second loading feedback simulation
  };

  return (
    <PreferenceContext.Provider value={{ darkMode, toggleDarkMode, isLoading }}>
      {children}
    </PreferenceContext.Provider>
  );
};