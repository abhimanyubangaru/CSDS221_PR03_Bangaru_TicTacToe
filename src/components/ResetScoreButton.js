import React from 'react';
import './ResetScoreButton.css';

export const ResetScoreButton = ({ onClick }) => {
  return (
    <button className="reset-score-button" onClick={onClick}>
      Reset SCORE
    </button>
  );
};
