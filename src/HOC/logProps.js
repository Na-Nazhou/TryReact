import React, { Component } from "react";

export function logProps(WrappedComponent) {
  class LogProps extends Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      const { forwardedRef, ...rest } = this.props;
      // Assign the custom prop "forwardedRef" as a ref
      return <WrappedComponent ref={forwardedRef} {...rest} />;
    }
  }

  // Forward the ref
  const forwardRef = (props, ref) =>
    <LogProps {...props} forwardedRef={ref} />

  // Give this component a more helpful display name in DevTools.
  // e.g. "ForwardRef(logProps(MyComponent))"
  const name = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  forwardRef.displayName = `logProps(${name})`;

  // Note the second param "ref" provided by React.forwardRef.
  // We can pass it along to LogProps as a regular prop, e.g. "forwardedRef"
  // And it can then be attached to the Component.
  return React.forwardRef(forwardRef);
}

