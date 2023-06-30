import React from 'react';

// Higher-Order Component
const withLogger = (WrappedComponent) => {
  class WithLogger extends React.Component {
    componentDidMount() {
      console.log('Component is mounted');
    }

    componentWillUnmount() {
      console.log('Component is unmounted');
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return WithLogger;
};

// Regular component
class MyComponent extends React.Component {
  render() {
    return <div>My Component</div>;
  }
}

// Wrap MyComponent with the withLogger HOC
const MyComponentWithLogger = withLogger(MyComponent);

// App component
const App = () => {
  return (
    <div>
      <h1>HOC Example</h1>
      <MyComponentWithLogger />
    </div>
  );
};

export default App;

/*In this example, we have a Higher-Order Component called withLogger that takes a component as its argument and returns a new component. The withLogger HOC adds logging functionality to the lifecycle methods of the wrapped component.
We then define a regular component called MyComponent which we want to enhance with logging. We create a new component called MyComponentWithLogger by wrapping MyComponent with the withLogger HOC.
In the withLogger HOC, we define the WithLogger component as a class component. It overrides the componentDidMount and componentWillUnmount lifecycle methods to log messages when the component is mounted and unmounted. The render method simply renders the WrappedComponent with the provided props.
Finally, in the App component, we render the MyComponentWithLogger component to see the logging functionality in action.
By using HOCs, you can easily add common functionality or behaviors to multiple components without repeating the same code. HOCs allow you to enhance components in a reusable and flexible manner.
*/
