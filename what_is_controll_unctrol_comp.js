/*
In React, the terms "controlled component" and "uncontrolled component" refer to different approaches for managing form inputs and their associated state.

Controlled Components: A controlled component is a form element (e.g., input, select, textarea) whose value is controlled by React state. The value of the input is bound to the component's state, and any changes to the input value are handled through event handlers that update the state. In other words, React controls and manages the state of the input.
Example of a controlled component:
*/
import React, { useState } from 'react';

const ControlledComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Input Value: {inputValue}</p>
    </div>
  );
};


/* 
In the example, the value of the input field is controlled by the inputValue state variable. The handleChange function updates the state with the new value entered in the input field. The current value of the input is displayed below the input field.

Controlled components provide a reliable and predictable way to manage form inputs. Since React manages the state, it allows for validation, transformation, and easy synchronization between multiple inputs or components.

Uncontrolled Components: An uncontrolled component is a form element whose value is handled by the HTML DOM itself rather than being controlled by React state. With uncontrolled components, you rely on references to access the input's value when needed, rather than tracking it through React state.
Example of an uncontrolled component:
*/
import React, { useRef } from 'react';

const UncontrolledComponent = () => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    console.log('Input Value:', inputValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


/* 
In this example, the inputRef is used to access the input value when the form is submitted. React doesn't track or manage the input value; it is handled directly by the DOM.
Uncontrolled components can be useful in certain scenarios, especially when dealing with large forms or when you need to integrate with third-party libraries that require direct access to the DOM. However, they provide less control and validation compared to controlled components.
In summary, controlled components rely on React state to manage and synchronize the input value, while uncontrolled components rely on direct access to the DOM. Controlled components offer more control and flexibility, especially when working with form validation and complex form interactions.
*/
