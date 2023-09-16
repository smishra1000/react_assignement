Uncontrolled Components: Uncontrolled Components are the components that are not controlled
 by the React state and are handled by the DOM (Document Object Model). 
 So in order to access any value that has been entered we take the help of refs.


import React, { useRef } from 'react';
  
function App() {
  const inputRef = useRef(null);
  
  function handleSubmit() {
    alert(`Name: ${inputRef.current.value}`);
  }
  
  return (
    <div className="App">
      <h3>Uncontrolled Component</h3>
      <form onSubmit={handleSubmit}>
        <label>Name :</label>
        <input type="text" name="name" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
  
export default App;

Controlled Components: In React, Controlled Components are those in which form’s 
data is handled by the component’s state. It takes its current value through props 
and makes changes through callbacks like onClick, onChange, etc. A parent component 
manages its own state and passes the 
new values as props to the controlled component



import { useState } from 'react';
  
function App() {
  const [name, setName] = useState('');
  
  function handleSubmit() {
    alert(`Name: ${name}`);
  }
    
  return (
    <div className="App">
      <h3>Controlled Component</h3>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name="name" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
  
export default App;
