/*In React, the lifecycle refers to a series of methods that are invoked at different stages of a component's existence. These lifecycle methods allow you to perform certain actions at specific points during a component's lifecycle, such as initialization, rendering, updating, and unmounting.

In React, with the introduction of React 16.3 and later versions, some lifecycle methods have been deprecated, and new lifecycle methods have been introduced. Here's an example of the latest lifecycle methods in a class component:
*/
import React, { Component } from 'react';

class ExampleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    // Update state based on props (rarely used)
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
    // Perform setup tasks or fetch data from an API
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    // Return false to prevent unnecessary re-rendering
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    // Capture information from the DOM before it updates (rarely used)
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
    // Perform side effects after the component updates
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    // Clean up resources, subscriptions, etc.
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    console.log('render');
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default ExampleComponent;
/*In this example, we have updated the lifecycle methods based on the latest recommendations:
static getDerivedStateFromProps: This static method is called before rendering and is used to compute and return the updated state based on changes in props. It is rarely used because using derived state from props can lead to more complex code. If you need to compute state based on props, consider using regular class methods or functional components instead.
componentDidMount: This method is called immediately after the component is mounted. It is commonly used for setting up subscriptions, fetching data from an API, or performing any necessary setup tasks that require access to the DOM.
shouldComponentUpdate: This method is called before rendering when props or state changes. It allows you to control whether the component should re-render or not. By default, it returns true, but you can optimize performance by returning false when you know the component doesn't need to update.
getSnapshotBeforeUpdate: This method is called right before the changes from the virtual DOM are reflected in the actual DOM. It allows you to capture information from the DOM, such as scroll position, before it gets updated. It returns a snapshot value that can be passed to the componentDidUpdate method.
componentDidUpdate: This method is called after the component has updated and the changes have been applied to the DOM. It is commonly used to perform side effects, such as making additional API calls, updating the DOM based on the new data, or interacting with external libraries.
componentWillUnmount: This method is called right before the component is unmounted and removed from the DOM. It is typically used for cleaning up resources, such as unsubscribing from event listeners or canceling pending API requests.*/
render: This method is responsible for rendering the component's UI. It is called whenever the component needs to be re-rendered due to changes in props or
