import React, { Component } from "react";

export class ReservationForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { name, checked, value } = event.target;
    const outputValue = name === 'isGoing'
      ? checked
      : value;

    this.setState({
      [name]: outputValue
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing" type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests" type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
