import React from 'react';

import './ScoreBoard.css';

export const ScoreBoard = ({ scores, userX }) => {
  const { xScore, oScore } = scores;
  return (
    <div className="scoreboard">
      <span className={` score x-score ${!userX && 'inactive'}`}>
        {' '}
        X - {xScore}{' '}
      </span>
      <span className={` score o-score ${userX && 'inactive'}`}>
        {' '}
        O - {oScore}{' '}
      </span>
    </div>
  );
};
