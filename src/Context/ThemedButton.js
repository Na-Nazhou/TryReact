import React, { useContext } from "react";
import { ThemeContext } from './ThemeContext';

export const ThemedButton = (props) => {
  // Assign a contextType to read the current theme context.  
  // React will find the closest theme Provider above and use its value.  
  // In this example, the current theme is "dark".  
  const theme = useContext(ThemeContext);

  return (
    <button
      {...props}
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    />
  );
}