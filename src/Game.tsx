import React, { Component } from "react";
import "./index.css";

const Square = props => {
  const { onClick, value } = props;
  return (
    <button className="square"
      onClick={onClick}>
      {value}
    </button>);
}

class Board extends Component {

  renderSquare(i) {
    const value = this.props.squares[i];
    return (<Square
      value={this.props.bold.includes(i) ? <mark>{value}</mark> : value}
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

function MoveList(props) {
  // (value, index, array)
  const moves = props.moves.map((step, move) => {
    const location = step.location;
    const desc = move
      ? `Go to move #${move}: (${location[0]}, ${location[1]})`
      : 'Go to game start';
    const disabled = move === props.stepNumber;

    return (
      <li key={move}>
        <button onClick={() => props.onClick(move)} disabled={disabled}>{desc}</button>
      </li>
    );
  });

  if (!props.isAscending) {
    moves.reverse()
  }

  return <ol>{moves}</ol>
}

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        location: (null, null),
      }],
      stepNumber: 0,
      isAscending: true,
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
    if (this.calculateWinner(squares)[0] || squares[i]) {
      return;
    }

    const location = [Math.floor(i / 3), i % 3];

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    // 'concat'/spread syntax is immutable
    // 'push' is mutable
    this.setState({
      history: [...history, {
        squares: squares,
        location: location
      }],
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

  toggleSort() {
    this.setState(currState => ({
      isAscending: !currState.isAscending
    }))
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
        return [squares[a], lines[i]];
      }
    }
    return [null, []];
  }

  isGameEnd(squares) {
    for (let i = 0; i < 9; i++) {
      if (!squares[i]) {
        return false;
      }
    }

    return true
  }

  renderStatus(squares, winner) {
    if (winner) {
      return "Winner: " + winner;
    } else if (this.isGameEnd(squares)) {
      return "Draw!"
    } else {
      return "Next player: " + (this.state.xIsNext ? 'X' : 'O');
    }
  }

  render() {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[this.state.stepNumber];

    const [winner, line] = this.calculateWinner(current.squares);
    const status = this.renderStatus(current.squares, winner);

    const order = this.state.isAscending ? 'Desc' : 'Ascend';
    const sort = <button onClick={() => this.toggleSort()}>{order}</button>

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            bold={line}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <div>{sort}</div>
          <MoveList moves={history}
            onClick={(i) => this.jumpTo(i)}
            isAscending={this.state.isAscending}
            stepNumber={this.state.stepNumber} />
        </div>
      </div>
    );
  }
}
