import React from "react";

export type Color = {
  foreground: string;
  background: string;
};

export type ThemeKey = "light" | "dark";

type Theme = Record<ThemeKey, Color>;

export const themes: Theme = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const ThemeContext = React.createContext<{
  theme: Color;
  toggleTheme: () => void;
}>({
  theme: themes.dark,
  toggleTheme: () => 0,
});
