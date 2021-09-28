import React from "react";
import { ThemeContext, themes, Color } from "./context/theme-context";
import ThemeTogglerButton from "./context/themed-toggler-button";

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}

export default class App extends React.Component<
  unknown,
  { theme: Color; toggleTheme: () => void }
> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  toggleTheme = () => {
    this.setState((state) => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark,
    }));
  };

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state}>
          <Content />
        </ThemeContext.Provider>
      </div>
    );
  }
}
