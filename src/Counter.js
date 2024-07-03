import React, { useRef, useState } from 'react';

const Counter = () => {
  const countRef = useRef(0);
  const [, forceUpdate] = useState();

  const increment = () => {
    countRef.current += 1;
    console.log("Current count:", countRef.current);
    forceUpdate({});
  };

  const decrement = () => {
    countRef.current -= 1;
    console.log("Current count:", countRef.current);
    forceUpdate({});
  };

  const reset = () => {
    countRef.current = 0;
    console.log("Current count:", countRef.current);
    forceUpdate({});
  };

  return (
    <div>
      <p>Counter: {countRef.current}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
