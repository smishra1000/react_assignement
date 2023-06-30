import React, { useState } from 'react';

const UserList = () => {
  const [filter, setFilter] = useState('');
  const [users] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' },
    { id: 4, name: 'Alice Williams' },
  ]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>User List</h1>
      <input
        type="text"
        placeholder="Filter users"
        value={filter}
        onChange={handleFilterChange}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
/*
In this example, we have a UserList component that displays a list of users and provides an input field to filter the users. The component maintains the filter value using the filter state variable, which is initially set to an empty string. The list of users is stored in the users state variable.

The handleFilterChange function is called when the value of the filter input changes. It updates the filter state with the new value entered by the user.

The filteredUsers variable applies the filter logic by using the filter method on the users array. It checks if the lowercase name of each user includes the lowercase filter value.

In the component's render method, we display the filter input field and map over the filteredUsers array to render the filtered user list. Each user's name is displayed as an <li> element.

Now, when the user types in the filter input, the user list will dynamically update to show only the users whose names match the entered filter value.
*/
