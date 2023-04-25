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
        {info ? 'Hello!' : gameOver ?? 'Game Over!'}
      </DialogTitle>
      <DialogContent className="dialogContent">
        {info ? (
          <>
            <div>I hope you're doing well.</div>
            <div>Welcome to Tic Tac Toe!</div>
          </>
        ) : winner === 'TIE' ? (
           <div>IT IS A TIE!</div>
        ) : (
           <div>And the winner is... {winner}!</div>
        )}
      </DialogContent>
      <DialogActions className="dialogActions">
        <Button className="button" onClick={CloseInfoDialog}>
          Close
        </Button>
      </DialogActions>
    </>
  );
};
