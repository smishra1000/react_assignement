import React, { useState } from 'react';

// Tree component
const TreeNode = ({ node }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ul>
      <li>
        <div onClick={handleToggle}>
          {node.children && (
            <span>{isOpen ? '-' : '+'}</span>
          )}
          {node.label}
        </div>
        {isOpen && node.children && (
          <ul>
            {node.children.map((child) => (
              <TreeNode key={child.id} node={child} />
            ))}
          </ul>
        )}
      </li>
    </ul>
  );
};

// App component
const App = () => {
  const treeData = {
    label: 'Root',
    children: [
      {
        id: 1,
        label: 'Node 1',
        children: [
          { id: 11, label: 'Node 1.1' },
          { id: 12, label: 'Node 1.2' },
        ],
      },
      {
        id: 2,
        label: 'Node 2',
        children: [
          { id: 21, label: 'Node 2.1' },
          {
            id: 22,
            label: 'Node 2.2',
            children: [{ id: 221, label: 'Node 2.2.1' }],
          },
        ],
      },
    ],
  };

  return (
    <div>
      <h1>Tree Example</h1>
      <TreeNode node={treeData} />
    </div>
  );
};

export default App;
