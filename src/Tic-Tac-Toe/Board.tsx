import React from "react";
import { Square } from './Square';

type BoardProps = {
  squares: string[],
  onClick: (i: number) => void,
  bold: number[]
}

export const Board: React.FC<BoardProps> = ({ squares, onClick, bold }) => {

  const renderSquare = (i: number) => {
    const value = squares[i];
    const handleClick = () => onClick(i);

    return (<Square
      value={bold.includes(i) ? <mark>{value}</mark> : value}
      onClick={handleClick}
    />);
  }

  const renderRow = (i: number) => {
    return (
      <div className="board-row">
        {[1, 2, 3].map(j => renderSquare(i * 3 + j))}
      </div>
    );
  }

  return (
    <div>
      {[1, 2, 3].map(renderRow)}
    </div>
  );
}