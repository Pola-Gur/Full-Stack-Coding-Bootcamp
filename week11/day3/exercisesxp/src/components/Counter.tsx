import React, { useState } from "react";

type CounterProps = {
  incrementOnly?: boolean;
  decrementOnly?: boolean;
};

const Counter: React.FC<CounterProps> = ({ incrementOnly, decrementOnly }) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <p>Count: {count}</p>
      {incrementOnly && <button onClick={increment}>Increment</button>}
      {decrementOnly && <button onClick={decrement}>Decrement</button>}
    </div>
  );
};

export default Counter;






// const Counter: React.FC = () => {
//   const [count, setCount] = useState<number>(0);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </div>
//   );
// };

// export default Counter;

// Exercise 3: Using useState Hook with TypeScript in React
// Create a functional React component that uses the useState hook to manage a counter.
// The component should display the current count and have buttons to increment and decrement the count.

