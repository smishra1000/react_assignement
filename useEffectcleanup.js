/*
Order of Operations: To understand the order of operations of cleanup functions, let's break down the sequence of events when a component renders with a useEffect() hook:
Render Phase: The component renders, and the useEffect() hook is encountered. React remembers the cleanup function associated with the previous render, if any.
Effect Phase: The effect function is executed. This is where you define your side effect logic. Additionally, you can return a cleanup function from the effect, which will be executed when the effect is re-run, or when the component unmounts.
Cleanup Phase (Before Unmount): If a cleanup function from the previous render exists, it is executed. This ens that any cleanup actions from the previous effect are performed before applying the new effect.
Re-render Phase: The component may re-render due to changes in state or props.
Effect Phase (Again): If the component re-rendered, the effect function is executed again. The new effect function can return a different cleanup function.
Cleanup Phase (Before Unmount or Before Next Effect): If a cleanup function from the previous re-render exists, it is executed again before applying the new effect or unmounting the component.
*/

/*Scenario 1: Basic Usage*/

import React, { useEffect } from 'react';

function ExampleComponent() {
  useEffect(() => {
    console.log('Effect is running.');
    
    return () => {
      console.log('Cleanup is being performed.');
    };
  }, []);

  return <div>Example Component</div>;
}
In this scenario, the cleanup function is executed only when the component unmounts because the dependency array ([]) is empty. The order of operations follows the sequence described earlier.

 /* Scenario 2: Dependency Array with Values*/

import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect is running.');
    
    return () => {
      console.log('Cleanup is being performed.');
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
/*In this case, the cleanup function is executed before applying the new effect (when the component re-renders due to a change in count).*/

  
