import React, { Component } from 'react';

class Cat extends Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src="/cat.jpg"
        style={{ position: 'absolute', left: mouse.x, top: mouse.y }}
        alt="A cat" />
    );
  }
}

class Mouse extends Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

export class MouseTracker extends Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )} />
      </div>
    );
  }
}

export function withMouse(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <Mouse render={mouse => (
          <WrappedComponent {...this.props} mouse={mouse} />
        )} />
      );
    }
  }
}