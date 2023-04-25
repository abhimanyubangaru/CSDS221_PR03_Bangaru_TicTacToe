import React, { useState } from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import './DialogBox.css';

export const DialogBox = ({ CloseInfoDialog, info, winner, gameOver }) => {
  return (
    <>
      <DialogTitle className="dialogTitle">
        {info ? '' : gameOver ?? 'Game Over!'}
      </DialogTitle>
      <DialogContent className="dialogContent">
        {info ? (
          <>
            <div>
              <h1>Welcome to Tic Tac Toe!</h1>
              <p>
                {' '}
                Hope you are doing well <br /> Get ready to play Tic Tac Toe!{' '}
                <br /> Whenever you are ready, click out of this dialog and get
                started playing. If you need to reset the board, click reset
                BOARD. Likewise if you need to reset the score, click reset
                SCORE.
                <br />
                Have fun!
              </p>
            </div>
          </>
        ) : winner === 'TIE' ? (
          <div>
            <h1> IT IS A TIE!</h1>
            <br />
            Click the close button or tap out of this dialog to play again.
          </div>
        ) : (
          <div>
            <h1>And the winner is... {winner}! </h1>
            <br />
            Click the close button or tap out of this dialog to play again.
          </div>
        )}
      </DialogContent>
      <DialogActions className="dialogActions">
        <Button className="button-exit" onClick={CloseInfoDialog}>
          Close
        </Button>
      </DialogActions>
    </>
  );
};
