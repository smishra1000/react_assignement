/*React Portal is a feature in React that allows you to render a component's subtree (including child components) into a different part of the DOM hierarchy, outside of its parent component. This is useful when you need to render content at a different DOM node, such as modals, tooltips, or dropdown menus, without breaking the component hierarchy.
Here's an example of using React Portal to render a modal outside the main component:*/

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') // The portal target container in the DOM
  );
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
/* 
In this example, we have a parent component (App) and a child component (Modal) that represents a modal dialog. The Modal component is rendered using ReactDOM.createPortal() method, which takes the JSX content and a target container element where the modal should be rendered. In this case, we specify document.getElementById('modal-root') as the target container, which is an element in the HTML where the modal will be rendered.
The Modal component takes an isOpen prop to control its visibility and an onClose prop to handle the close event. When the isOpen prop is true, the modal is rendered as a portal outside of the parent component's DOM hierarchy.
Inside the App component, we have a button that triggers the opening of the modal when clicked. The openModal function updates the state to make the modal visible. The closeModal function updates the state to hide the modal.
By using React Portal, the modal component is rendered outside of the main component's DOM hierarchy, allowing it to overlay the rest of the UI without affecting the component structure. This enables more flexible and modular UI components, such as modals, that can be used across different parts of the application.
*/
