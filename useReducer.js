import React, { useReducer } from 'react';

const initialState = {
  employees: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    case 'UPDATE_EMPLOYEE':
      return {
        ...state,
        employees: state.employees.map((employee) =>
          employee.id === action.payload.id ? action.payload : employee
        ),
      };
    case 'DELETE_EMPLOYEE':
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

const EmployeeList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddEmployee = () => {
    const newEmployee = {
      id: Date.now(),
      name: 'John Doe',
      position: 'Software Engineer',
    };

    dispatch({ type: 'ADD_EMPLOYEE', payload: newEmployee });
  };

  const handleUpdateEmployee = (id) => {
    const updatedEmployee = {
      id,
      name: 'Jane Smith',
      position: 'Senior Software Engineer',
    };

    dispatch({ type: 'UPDATE_EMPLOYEE', payload: updatedEmployee });
  };

  const handleDeleteEmployee = (id) => {
    dispatch({ type: 'DELETE_EMPLOYEE', payload: id });
  };

  return (
    <div>
      <h1>Employee List</h1>
      <button onClick={handleAddEmployee}>Add Employee</button>
      <ul>
        {state.employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {employee.position}
            <button onClick={() => handleUpdateEmployee(employee.id)}>
              Update
            </button>
            <button onClick={() => handleDeleteEmployee(employee.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
/*
In this example, we define the initial state of the employees as an empty array in the initialState object. We also define a reducer function that handles different actions: ADD_EMPLOYEE, UPDATE_EMPLOYEE, and DELETE_EMPLOYEE. The reducer updates the state based on the dispatched action and returns a new state object.
Within the EmployeeList component, we use the useReducer hook to manage the state and dispatch actions. We have three handler functions: handleAddEmployee to add a new employee, handleUpdateEmployee to update an existing employee, and handleDeleteEmployee to delete an employee. Each handler function dispatches the appropriate action with the relevant payload.
The rendered output displays the employee list along with buttons to update and delete employees. Clicking the "Add Employee" button triggers the handleAddEmployee function, adding a new employee to the state. Clicking the "Update" and "Delete" buttons triggers the handleUpdateEmployee and handleDeleteEmployee functions, respectively, updating or removing the corresponding employee from the state.
By using the useReducer hook, you can easily manage state and perform CRUD operations in a predictable and controlled manner.
*/
