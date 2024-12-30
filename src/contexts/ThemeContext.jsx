import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const theme = {
    isDarkTheme,
    toggleTheme,
    colors: isDarkTheme
      ? {
          background: "#121212",
          subBg: "#1E1E1E",
          text: "#ffffff",
          icon: "#37474F",
          card: "#1E1E1E",
          border: "#000",
          primary: "#1976D2",
          secondary: "#252525",
          optionModal: "#37474F",
          optionBox: "#37474F",
          searchBox: "#37474F",
        }
      : {
          background: "#ffffff",
          subBg: "#E8F5FF",
          text: "#000000",
          icon: "#000000",
          card: "#ffffff",
          border: "#fff",
          primary: "#1976D2",
          secondary: "#ffffff",
          optionModal: "#E3F2FD",
          optionBox: "#ffffff",
          searchBox: "#F4F8FB",
        },
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
