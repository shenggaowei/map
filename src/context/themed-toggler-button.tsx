import React, { useContext } from "react";
import { ThemeContext } from "./theme-context";

export default function ThemeTogglerButton() {
  // 相当于 class组件中的 static contextType  = ThemeContext 或者 <MyContext.Consumer>
  const theme = useContext(ThemeContext);
  return (
    <button
      onClick={theme.toggleTheme}
      style={{ backgroundColor: theme.theme.background }}
    >
      Toggle Theme
    </button>
  );
}
