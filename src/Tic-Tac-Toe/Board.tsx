import React, { Fragment } from "react";
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
        {[0, 1, 2].map(j => <Fragment key={j}>{renderSquare(i * 3 + j)}</Fragment>)}
      </div>
    );
  }

  return (
    <div>
      {[0, 1, 2].map(i => <Fragment key={i}>{renderRow(i)}</Fragment>)}
    </div>
  );
}