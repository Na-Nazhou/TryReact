
import React, { Component } from "react";

const FancyButton = React.forwardRef((props, ref) =>
  (<button
    ref={ref}
    className="FancyButton">
    {props.children}
  </button>
  ));

export class TextInput extends Component {
  custructor(props) {
    super(props)
    // You can now get a ref directly to the DOM button:
    this.ref = React.createRef();

  }
  render() {
    return (<FancyButton ref={this.ref}>
      Click me!
    </FancyButton>);
  }
}
