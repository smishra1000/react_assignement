import React, { useState } from 'react';

const Counter = () => {
  // Declare a state variable called 'count' and initialize it to 0
  const [count, setCount] = useState(0);

  // Event handler for incrementing the count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Event handler for decrementing the count
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;

/*
In this example, we have a Counter component that displays a count value and two buttons for incrementing and decrementing the count.

We use the useState hook to declare a state variable called count and initialize it to 0. The useState hook returns an array with two elements: the current state value (count) and a function (setCount) to update the state.

We define two event handlers: handleIncrement and handleDecrement. When the corresponding button is clicked, these event handlers are invoked, and the setCount function is called to update the count state. The setCount function takes a new value as an argument, and React handles updating the state and re-rendering the component.

Inside the component, we display the current value of count using JSX. The handleIncrement function is passed as the onClick event handler for the "Increment" button, and the handleDecrement function is passed as the onClick event handler for the "Decrement" button.

When the buttons are clicked, the count state is updated, and the component re-renders, reflecting the updated value on the screen.

The useState hook allows you to add state to functional components, enabling them to manage and update their own state without using class components.

*/
