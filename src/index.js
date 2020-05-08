import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Square(props) {
  return (
    <button className="square"
      onClick={props.onClick}>
      {props.value}
    </button>);
}

class Board extends React.Component {

  renderSquare(i) {
    return (<Square
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
    />);
  }

  renderRow(i) {
    const items = []
    for (let j = 0; j < 3; j++) {
      items.push(this.renderSquare(i * 3 + j));
    }
    return (
      <div className="board-row">
        {items}
      </div>
    );
  }

  render() {
    const rows = [];
    for (let i = 0; i < 3; i++) {
      rows.push(this.renderRow(i));
    }
    return (
      <div>
        {rows}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        location: (null, null),
      }],
      stepNumber: 0,
      xIsNext: true,
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[this.state.stepNumber];

    const squares = current.squares.slice();
    // Immutability
    // var player = {score: 1, name: 'Jeff'};
    // var newPlayer = Object.assign({}, player, { score: 2 });
    // var newPlayer = {...player, score: 2};
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }

    const location = [Math.floor(i / 3), i % 3];

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    // 'concat' is immutable
    // 'push' is mutable
    this.setState({
      history: history.concat([{
        squares: squares,
        location: location
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    })
  }

  jumpTo(stepNumber) {
    this.setState({
      stepNumber: stepNumber,
      xIsNext: stepNumber % 2 === 0,
    })
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  render() {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[this.state.stepNumber];

    const winner = this.calculateWinner(current.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? 'X' : 'O');
    }

    // (value, index, array)
    const moves = history.map((step, move) => {
      const location = step.location;
      const desc = move
        ? 'Go to move #' + move + ': (' + location[0] + ', ' + location[1] + ')'
        : 'Go to game start';
      const disabled = move === this.state.stepNumber;

      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)} disabled={disabled}>{desc}</button>
        </li>
      );
    })

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
