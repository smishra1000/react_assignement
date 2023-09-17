useId
useId is a React Hook that is used to generate unique IDs. This can be valuable in a number of scenarios, such as generating unique IDs for accessibility attributes.

Here’s the sample syntax code:

import { useId } from 'react'

const App =()=>{
const id = useId()

return (
  <input type="text" id={id} />
  )
}

Now, let’s look at a use case. Here’s an example of a scenario using the useId Hook with a TextField component:

const TextField =()=>{
  return(
      <>
        <label htmlFor="name" /> 
        <input type="text" id="name"/>
      </>
  )
}

We’ll use the TextField component a couple times in our App component below:

const App=()=>{
  return (
    <div className="inputs">
      <TextField />
      <TextField />
    </div>
  )
}

To link a label element to an input field, we use the id and htmlFor attribute. 
This will cause the browser to associate a particular label element with a 
particular input field. If we were working with plain HTML, this wouldn’t be 
necessary — instead, we could simply duplicate the elements and change the attributes.

However, in our example above we created a reusable TextField component and 
we’re using this component twice in our App component. Since the attributes on 
the element in the TextField
are static, every time we render the component, the attributes remain the same.

We can fix this by using the useId Hook. Let’s modify the TextField component, 
like so:



const TextField =()=>{
  const id = useId();
    return(
        <>
          <label htmlFor={id} /> 
          <input type="text" id={id}/>
        </>
    )
  }
  Now, every time we call the TextInput component, a unique ID will be associated 
  with the elements that are rendered.
