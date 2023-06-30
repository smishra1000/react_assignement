import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  // Effect with no dependencies (equivalent to componentDidMount and componentDidUpdate)
  useEffect(() => {
    console.log('Effect with no dependencies - called on mount and update');
    // Perform some side effect or logic here
    // This effect runs every time the component re-renders
  });

  // Effect with dependencies (equivalent to componentDidMount and componentDidUpdate with specific dependencies)
  useEffect(() => {
    console.log('Effect with dependencies - called on mount and when count changes');
    // Perform some side effect or logic here
    // This effect only runs when the count state changes
  }, [count]);

  // Cleanup effect (equivalent to componentWillUnmount)
  useEffect(() => {
    console.log('Cleanup effect - called on unmount');
    return () => {
      console.log('Cleanup logic');
      // Perform any necessary cleanup here
      // This cleanup effect runs when the component is unmounted
    };
  }, []);

  return (
    <div>
      <h1>useEffect Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default MyComponent;

/*
In this example, we have a MyComponent that displays a count value and a button to increment the count. We use the useEffect hook to add different types of effects.

Effect with no dependencies: The first useEffect hook has an empty dependency array []. This effect is called when the component mounts and every time the component re-renders. It is equivalent to the combination of componentDidMount and componentDidUpdate lifecycle methods in class components. It's useful for side effects that don't depend on any specific value or state.

Effect with dependencies: The second useEffect hook has [count] as the dependency array. This effect is called when the component mounts and whenever the count state changes. It allows you to perform side effects or logic based on specific dependencies. It's equivalent to the combination of componentDidMount and componentDidUpdate with specific dependencies in class components.

Cleanup effect: The third useEffect hook has an empty dependency array [] and a cleanup function defined within it. This effect is called when the component is unmounted. The cleanup function is executed before the component is removed from the DOM and allows you to clean up any resources or subscriptions that the component might have created. It's equivalent to the componentWillUnmount lifecycle method in class components.

In the example, each effect logs a message to the console to indicate when it's called. You can replace the console log statements with your desired side effects or logic.

By using the useEffect hook, you can add lifecycle-like behavior to functional components and perform side effects, such as fetching data, subscribing to events, or manipulating the DOM, based on the component's lifecycle.
*/
