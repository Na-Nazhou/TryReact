
import React from "react";
import { HistoryType } from './Game'

type MoveListProps = {
  moves: HistoryType,
  onClick: (i: number) => void,
  currMove: number,
  isAscending: boolean
}

export const MoveList: React.FC<MoveListProps> = ({ moves, onClick, currMove, isAscending }) => {
  // (value, index, array)
  const items = moves.map((step, move) => {
    const [row, col] = step.location;
    const desc = move
      ? `Go to move #${move}: (${row}, ${col})`
      : 'Go to game start';
    const disabled = move === currMove;

    return (
      <li key={move}>
        <button onClick={() => onClick(move)} disabled={disabled}>{desc}</button>
      </li>
    );
  });

  if (!isAscending) {
    items.reverse()
  }

  return <ol>{items}</ol>
}