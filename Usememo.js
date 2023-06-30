import React, { useState, useMemo } from 'react';

const calculateExpensiveValue = (value) => {
  // Simulating an expensive calculation
  console.log('Calculating expensive value...');
  return value * 2;
};

const MyComponent = () => {
  const [count, setCount] = useState(0);

  // Use useMemo to memoize the expensive value
  const expensiveValue = useMemo(() => calculateExpensiveValue(count), [count]);

  return (
    <div>
      <h1>useMemo Example</h1>
      <p>Count: {count}</p>
      <p>Expensive Value: {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default MyComponent;
/*
In this example, we have a MyComponent that displays a count value and an expensive value calculated using the calculateExpensiveValue function. The calculateExpensiveValue function simulates an expensive calculation by simply multiplying the value by 2.

By using the useMemo hook, we can memoize the expensive value, ensuring that it is only recalculated when the count value changes. The dependency array [count] specifies that the memoized value should be updated whenever the count value changes.

Inside the component, we display the current count value and the expensiveValue obtained from the memoized calculation. When the user clicks the "Increment" button, the count value is incremented, triggering a re-render. However, the expensiveValue is only recalculated if the count value has changed.

By utilizing useMemo, we can optimize performance by avoiding unnecessary recalculations of expensive values when the dependencies haven't changed. This can be particularly useful when dealing with computationally intensive operations or when the calculation relies on complex or time-consuming logic.
*/
