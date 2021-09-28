import React from "react";
import styles from "./App.module.css";

interface IThemeProps {
  theme: "dark" | "light";
}

const ToolBar: React.FC<IThemeProps> = (props) => {
  return <ThemedButton theme={props.theme} />;
};

const ThemedButton: React.FC<IThemeProps> = (props) => {
  return <Button theme={props.theme} />;
};

const Button: React.FC<IThemeProps> = (props) => {
  return <div className={styles[props.theme]}>我是按钮</div>;
};

export default function App(): React.ReactElement {
  return <ToolBar theme="dark" />;
}
