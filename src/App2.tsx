import React from "react";
import styles from "./App.module.css";

type Theme = "dark" | "light";
interface IThemeProps {
  theme: Theme;
}

const ThemeContext = React.createContext<Theme>("light");

// React DevTools 使用该字符串来确定 context 要显示的内容
ThemeContext.displayName = "MyDisplayName";

const ToolBar: React.FC = () => {
  return <ThemedButton2 />;
};

// themeContext.Consumer 使函数组件可以订阅 context
const ThemedButton2: React.FC = () => {
  return (
    <ThemeContext.Consumer>
      {(value) => <Button theme={value} />}
    </ThemeContext.Consumer>
  );
};

const Button: React.FC<IThemeProps> = (props) => {
  return <div className={styles[props.theme]}>我是按钮</div>;
};

// themeContext.Provider 允许消费组件订阅 context 的变化
export default function App(): React.ReactElement {
  return (
    <ThemeContext.Provider value="light">
      <ToolBar />
    </ThemeContext.Provider>
  );
}

class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}
