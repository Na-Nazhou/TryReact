import React, { useState } from "react";
import { Board } from './Board';
import { MoveList } from './MoveList';
import "./index.css";

export type HistoryType = {
  squares: string[],
  location: (number | null)[]
}[];

const calculateWinner = (squares: string[]) => {
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
      return {
        winner: squares[a],
        line: lines[i]
      };
    }
  }
  return {
    winner: null,
    line: []
  };
}

export const Game: React.FC<{}> = () => {

  const [isAscending, setIsAscending] = useState(true);

  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState<HistoryType>([{
    squares: Array(9).fill(null),
    location: [null, null],
  }])

  const { squares } = history[stepNumber];
  const { winner, line } = calculateWinner(squares);
  const isGameEnd = squares.every(i => i)

  const handleClick = (i: number) => {
    const newSquares = squares.slice();

    // Immutability
    // var player = {score: 1, name: 'Jeff'};
    // var newPlayer = Object.assign({}, player, { score: 2 });
    // var newPlayer = {...player, score: 2};
    if (winner || newSquares[i]) {
      return;
    }

    const location = [Math.floor(i / 3), i % 3];

    newSquares[i] = xIsNext ? 'X' : 'O';
    // 'concat'/spread syntax is immutable
    // 'push' is mutable

    setStepNumber(history.length)
    setXIsNext(!xIsNext)
    setHistory([...history, {
      squares: newSquares,
      location: location
    }])
  }

  const toggleSort = () => {
    setIsAscending(!isAscending)
  }

  const jumpTo = (stepNumber: number) => {
    setStepNumber(stepNumber);
    setXIsNext(stepNumber % 2 === 0)
  }

  const getStatus = () => {
    if (winner) {
      return "Winner: " + winner;
    } else if (isGameEnd) {
      return "Draw!"
    } else {
      return "Next player: " + (xIsNext ? 'X' : 'O');
    }
  }
  const status = getStatus()

  const order = isAscending ? 'Desc' : 'Ascend';
  const sort = <button onClick={toggleSort}>{order}</button>

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={squares}
          onClick={handleClick}
          bold={line}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <div>{sort}</div>
        <MoveList moves={history}
          onClick={jumpTo}
          isAscending={isAscending}
          currMove={stepNumber} />
      </div>
    </div>
  );
}
