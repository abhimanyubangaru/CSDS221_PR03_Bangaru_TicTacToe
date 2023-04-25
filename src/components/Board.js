import React from 'react';
import { Box } from './Box.js';
import './Board.css';

export const Board = ({ winningIndices, board, onClick }) => {
  return (
    <div className="board">
      {board.map((value, index) => {
        return (
          <Box
            value={value}
            win={winningIndices && !winningIndices.includes(index)}
            onClick={() => value === null && onClick(index)}
          />
        );
      })}
    </div>
  );
};
