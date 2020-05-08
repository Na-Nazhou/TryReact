import React, { Component } from "react";
import { ThemeContext } from './ThemeContext';

export class ThemedButton extends Component {
  // Assign a contextType to read the current theme context.  
  // React will find the closest theme Provider above and use its value.  
  // In this example, the current theme is "dark".  
  static contextType = ThemeContext;

  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button
        {...props}
        style={{ backgroundColor: theme.background }}
      />
    );
  }
}