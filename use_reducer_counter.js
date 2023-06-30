import React, { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;

/* 
In this example, we define an initial state object with a count property set to 0. We also define a reducer function that handles different actions to update the state.

The reducer function takes the current state and an action as arguments and returns the updated state based on the action type. In this case, the reducer handles three actions: INCREMENT, DECREMENT, and RESET, and updates the count property accordingly.

Inside the Counter component, we use the useReducer hook to initialize the state using the initialState and reducer. It returns the current state and a dispatch function to trigger actions.

We define three event handlers: handleIncrement, handleDecrement, and handleReset, which call dispatch with the respective action types.

In the JSX, we display the current count from the state object. Clicking the "Increment" button dispatches an INCREMENT action, increasing the count. Clicking the "Decrement" button dispatches a DECREMENT action, decreasing the count. Clicking the "Reset" button dispatches a RESET action, resetting the count to 0.

By using useReducer, we manage the state and handle state updates through actions dispatched to the reducer function. This approach helps to simplify state management in more complex scenarios and allows for predictable state transitions.
*/
