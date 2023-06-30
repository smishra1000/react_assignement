import React from 'react';

// Higher-Order Component
const withListRendering = (WrappedComponent, items) => {
  class WithListRendering extends React.Component {
    render() {
      return (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <WrappedComponent {...item} />
            </li>
          ))}
        </ul>
      );
    }
  }

  return WithListRendering;
};

// Regular component
const ListItem = ({ name, age }) => {
  return (
    <div>
      <span>{name}</span> - <span>{age}</span>
    </div>
  );
};

// Wrap ListItem with the withListRendering HOC
const ListWithRendering = withListRendering(ListItem, [
  { name: 'John Doe', age: 25 },
  { name: 'Jane Smith', age: 30 },
  { name: 'Bob Johnson', age: 35 },
]);

// App component
const App = () => {
  return (
    <div>
      <h1>HOC Example</h1>
      <ListWithRendering />
    </div>
  );
};

export default App;

/*
In this example, we have a Higher-Order Component called withListRendering that takes a component and an array of items as arguments. It returns a new component that renders a list of items using the provided component (WrappedComponent).
We define a regular component called ListItem that represents an individual item in the list. It receives the name and age as props and renders them inside a <div> element.
Next, we create a new component called ListWithRendering by wrapping ListItem with the withListRendering HOC. We pass the ListItem component and an array of items as arguments to the HOC.
Inside the withListRendering HOC, we define the WithListRendering component as a class component. In the render method, we map over the items array and render each item by passing its properties as props to the WrappedComponent. Each item is wrapped inside an <li> element.
Finally, in the App component, we render the ListWithRendering component to see the list rendering functionality in action.
By using HOCs, you can encapsulate the logic for rendering lists or other repetitive patterns and apply it to different components throughout your application. HOCs allow for code reuse and make it easier to manage and update common functionality.
*/
