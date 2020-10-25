import React from 'react';

const Counter = ({ onIncreaseAsync, onDecreaseAsync, number }) => {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncreaseAsync}>+1</button>
      <button onClick={onDecreaseAsync}>-1</button>
    </div>
  );
};

export default Counter;
