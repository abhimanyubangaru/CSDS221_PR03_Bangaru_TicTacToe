import React from 'react';
import { useState } from 'react';
import { Box } from './components/Box.js';
import { Board } from './components/Board.js';
import { ScoreBoard } from './components/ScoreBoard.js';
import DiaWrap from '@mui/material/Dialog';

import { ResetButton } from './components/ResetButton.js';
import { ResetScoreButton } from './components/ResetScoreButton.js';
import { DialogBox } from './components/DialogBox.js';
import './style.css';

export default function App() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [userX, setUserX] = useState(true);
  const [didXWin, setDidXWin] = useState(false);
  const [whoWon, setWhoWon] = useState('');
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [winningIndices, setWinningIndices] = useState(Array(3).fill(null));
  const [gameOver, setGameOver] = useState(false);
  const [openDialog, setOpenDialog] = useState(true);
  const [openInfoDialog, setOpenInfoDialog] = useState(true);
  const [numPicked, setNumPicked] = useState(0);

  const handleClose = () => {
    setOpenDialog(false);
    resetBoard();
    setOpenInfoDialog(false);
  };

  const resetScore = () => {
    setScores({ xScore: 0, oScore: 0 });
  };

  const handleBoxClick = (index) => {
    const updatedBoard = board.map((value, ind) => {
      if (index === ind) {
        return userX === true ? 'X' : 'O';
      } else {
        return value;
      }
    });

    const winner = checkWinner(updatedBoard);
    console.log(winner ?? winner);

    if (winner) {
      if (winner === 'O') {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
        setWhoWon('O');
      } else if (winner === 'X') {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
        // setDidXWin(true);
        setWhoWon('X');
      } else {
        let { xScore } = scores;
        xScore += 1;
        let { oScore } = scores;
        oScore += 1;
        setScores({ xScore, oScore });
        setWhoWon('TIE');
      }
      setGameOver(true);
      setOpenDialog(true);
    }

    console.log(scores);

    setBoard(updatedBoard);
    setUserX(!userX);
  };

  const checkWinner = (board) => {
    const newNumPicked = numPicked + 1;
    setNumPicked(newNumPicked);
    console.log(numPicked);
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        const winningNumbers = [x, y, z];
        setWinningIndices(winningNumbers);
        console.log([x, y, z]);
        console.log(JSON.stringify(winningIndices));
        setGameOver(true);
        return board[x];
      }
    }
    if (numPicked === 8) {
      return 'TIE';
    }
  };

  const resetBoard = () => {
    setNumPicked(0);
    setWinningIndices(Array(3).fill(null));
    setGameOver(false);
    setDidXWin(false);
    setBoard(Array(9).fill(null));
  };
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <DiaWrap open={openDialog} onClose={resetBoard}>
        <DialogBox
          CloseInfoDialog={handleClose}
          info={openInfoDialog}
          winner={whoWon}
          gameOver={gameOver}
        />
      </DiaWrap>
      <ScoreBoard scores={scores} userX={userX} />
      <Board
        winningIndicies={winningIndices}
        board={board}
        onClick={gameOver ? resetBoard : handleBoxClick}
      />
      {/* <div>
        <span>
      <ResetButton onClick={resetBoard} />
      <ResetScoreButton onClick={resetScore} />
      </span>
      </div> */}
      <div className="button-container">
        <div className="column">
          <ResetButton onClick={resetBoard} />
        </div>
        <div className="column">
          <ResetScoreButton onClick={resetScore} />
        </div>
      </div>
    </div>
  );
}
