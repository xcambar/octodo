import React from 'react';

const Counter = ({ toggleItem, info, state }) => (
  <span className="octicon octicon-pin" onClick={toggleItem}></span>
  // Clicked: <span className="counter">{state.counter.count}</span> times
  // <button className="btn" onClick={decrement}>-</button>
  // <button className="btn" onClick={() => incrementAsync()}>Increment async</button>
);

export default Counter;
