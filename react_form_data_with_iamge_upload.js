import React, { useState } from 'react';

const FormDataForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && age && image) {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('age', age);
      formData.append('image', image);

      fetch('http://example.com/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle response data
          console.log(data);
        })
        .catch((error) => {
          // Handle error
          console.error(error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input type="text" id="age" value={age} onChange={handleAgeChange} />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" onChange={handleImageChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormDataForm;
/* 
In this example, we have a FormDataForm component that includes input fields for name, age, and an image upload field. The input field values are stored in component state using the useState hook.
The handleNameChange, handleAgeChange, and handleImageChange functions are used to update the corresponding state values as the user interacts with the input fields.
In the handleSubmit function, we check if all the required fields (name, age, and image) have values. If they are all present, we create a new FormData object and append the field values to it using the append method. The image file is appended with the key 'image' (you can adjust this key as per your server's expected input).
Then, we make a fetch request to the specified URL (http://example.com/upload) with the method set to 'POST' and the body set to the FormData object.
Once the request is made, we handle the response by parsing it as JSON using the response.json() method. You can perform further actions based on the response data. In this example, we simply log the response data to the console.
If there's an error during the request or parsing the response, we catch the error and log it to the console.
In the JSX, we render the form with input fields for name, age, and the file upload field for the image. When the form is submitted, the handleSubmit function is called.
*/
