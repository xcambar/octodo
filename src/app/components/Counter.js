import React from 'react';

const Counter = ({ increment, incrementIfOdd, incrementAsync, decrement, state }) => (
  <span onClick={increment}>{state.counter.count}</span>
  // <div>
  //   Clicked: <span className="counter">{state.counter.count}</span> times
  //   <div className="rule"></div>
  //   <button className="btn" onClick={increment}>+</button>
  //   {' '}
  //   <button className="btn" onClick={decrement}>-</button>
  //   <div className="rule"></div>
  //   <button className="btn" onClick={incrementIfOdd}>Increment if odd</button>
  //   <br />
  //   <button className="btn" onClick={() => incrementAsync()}>Increment async</button>
  // </div>
);

export default Counter;
