import React, { useState } from "react";
import { ThemeContext, themes } from './ThemeContext';
import { ThemedButton } from './ThemedButton';

type ToolBarProps = {
  changeTheme: () => void
}
// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
export const Toolbar: React.FC<ToolBarProps> = ({ changeTheme }) =>
  <ThemedButton onClick={changeTheme}>
    Change Theme
  </ThemedButton>

export const ContextDemo = () => {
  const [theme, setTheme] = useState(themes.light)

  const toggleTheme = () => {
    setTheme(theme => theme === themes.dark
      ? themes.light
      : themes.dark)
  }

  // Use a Provider to pass the current theme to the tree below.    
  // Any component can read it, no matter how deep it is.    
  // In this example, we're passing "dark" as the current value.    
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <Toolbar changeTheme={toggleTheme} />
        <div>
          <ThemedButton> Show theme </ThemedButton>
        </div>
      </ThemeContext.Provider>

      <div>
        <ThemedButton> Does not Show theme </ThemedButton>
      </div>
    </div>
  );
}


