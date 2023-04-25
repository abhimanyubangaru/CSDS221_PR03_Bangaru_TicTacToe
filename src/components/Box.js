import React from 'react';

import './Box.css';

export const Box = ({ value, onClick, win }) => {
  const style = value === 'X' ? 'box x' : 'box o';
  const winning = win === true ?? ' winningState';
  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};
