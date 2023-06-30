import React, { createContext, useContext } from 'react';

// Step 1: Create the context
const MyContext = createContext();

// Step 2: Create a component that provides the context value
const MyProvider = ({ children }) => {
  const sharedData = 'Shared Data';

  return <MyContext.Provider value={sharedData}>{children}</MyContext.Provider>;
};

// Step 3: Create three child components that consume the context value
const ChildComponent1 = () => {
  const sharedData = useContext(MyContext);

  return <p>Child 1: {sharedData}</p>;
};

const ChildComponent2 = () => {
  const sharedData = useContext(MyContext);

  return <p>Child 2: {sharedData}</p>;
};

const ChildComponent3 = () => {
  const sharedData = useContext(MyContext);

  return <p>Child 3: {sharedData}</p>;
};

// Step 4: Wrap the child components with the provider
const App = () => {
  return (
    <MyProvider>
      <div>
        <h1>Using Context Example</h1>
        <ChildComponent1 />
        <ChildComponent2 />
        <ChildComponent3 />
      </div>
    </MyProvider>
  );
};

export default App;

/* 
In this example, we follow these steps to pass data to three child components using the useContext hook:

Create the context using createContext().
Create a provider component, MyProvider, which wraps its children with the MyContext.Provider component and provides a value for the context.
Create three child components, ChildComponent1, ChildComponent2, and ChildComponent3, which consume the context value using the useContext hook.
Wrap the child components (ChildComponent1, ChildComponent2, and ChildComponent3) with the MyProvider component, ensuring that they are descendants of the provider.
In the App component, we render the three child components within the MyProvider component. Each child component consumes the context value provided by the MyProvider using the useContext hook.

The rendered output will display the shared data, "Shared Data", within each of the child components.

By using the useContext hook and wrapping the child components with the context provider, you can easily share data across multiple components in a clean and efficient manner.

*/
