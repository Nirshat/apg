import { ReactNode, useState, useEffect } from "react";
import Theme from "../context/Theme";

interface AppContent {
  children: ReactNode;
}

const ThemeProvider = ({ children }: AppContent) => {
  const [mode, setMode] = useState(() => {
    // Load/Read the theme from localStorage or set default
    const savedMode = localStorage.getItem("theme");
    return savedMode || "light";
    // return current theme or else the default theme
  });

  useEffect(() => {
    // Save the theme to localStorage whenever it changes
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <Theme.Provider value={{ mode, toggleMode }}>
      {children}
    </Theme.Provider>
  );
};

export default ThemeProvider;
