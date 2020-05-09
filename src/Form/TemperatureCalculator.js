import React, { Component } from "react";

const BoilingVerdict = ({ celsius }) => {
  if (celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.scaleNames = { c: 'Celsius', f: 'Fahrenheit' };
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const { temperature, scale } = this.props;
    return (
      <fieldset>
        <legend>Enter temperature in {this.scaleNames[scale]}:</legend>
        <input value={temperature}
          onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export class TemperatureCalculator extends Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: '', scale: 'c' };
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: 'c', temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: 'f', temperature });
  }

  toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }

  toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }

  tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  render() {
    const { temperature, scale } = this.state;
    const celsius = scale === 'f'
      ? this.tryConvert(temperature, this.toCelsius)
      : temperature;

    const fahrenheit = scale === 'c'
      ? this.tryConvert(temperature, this.toFahrenheit)
      : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
