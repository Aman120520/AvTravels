import React, { createContext, useState, useEffect } from "react";
import { View } from "react-native";
import { themes } from "../resources/theme";
import { Appearance } from "react-native";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<{
  theme: "light" | "dark";
  toggleTheme: () => void;
}>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const systemTheme = Appearance.getColorScheme(); // fallback on initial load
  const [theme, setTheme] = useState<"light" | "dark">(systemTheme ?? "light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <View
        style={themes[theme]}
        className={`flex-1 ${theme === "dark" ? "dark" : ""}`}
      >
        {children}
      </View>
    </ThemeContext.Provider>
  );
};
