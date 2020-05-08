import React, { Component } from "react";
import { ThemeContext, themes } from './ThemeContext';
import { ThemedButton } from './ThemedButton';

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
export const Toolbar = props =>
  <ThemedButton onClick={props.changeTheme}>
    Change Theme
  </ThemedButton>

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }

  render() {
    // Use a Provider to pass the current theme to the tree below.    
    // Any component can read it, no matter how deep it is.    
    // In this example, we're passing "dark" as the current value.    
    return (
      <Page>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>

        <Section>
          <ThemedButton />
        </Section>
      </Page>
    );
  }
}


