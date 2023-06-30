import React, { useState, useCallback } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  // Define a callback function using useCallback
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h1>useCallback Example</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default MyComponent;
/*
In this example, we have a MyComponent that displays a count value and a button to increment the count. The handleClick function is defined using the useCallback hook.
By using useCallback, we ensure that the handleClick function reference remains the same unless the count value changes. This prevents unnecessary re-creation of the function on each render.
Inside the component, the handleClick function is passed as the onClick event handler for the button. When the button is clicked, the handleClick function increments the count state value using the setCount function.
By memoizing the handleClick function with useCallback, we optimize performance by avoiding unnecessary re-renders and re-creation of the function when other unrelated state or props change.
Using useCallback is especially beneficial when passing callback functions as props to child components, as it ensures that the callback reference remains stable and doesn't trigger unnecessary re-renders of those child components.
*/
