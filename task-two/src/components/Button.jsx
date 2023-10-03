/*Task 2: Create a JSX component for a button
Create a new file called "Button.js" and define a functional component.
Inside the component, render a button element with appropriate styling and text.
Implement any necessary props as needed.
Use the component in a parent component to demonstrate its functionality.*/


// Button.js

import React from 'react';

// Functional component for a custom button
function Button(props) {
  // Destructure props to get the button's label and onClick function
  const { label, onclick } = props;

  return (
    <div className='container'>
        <button className='btn' onClick={onclick}>{label}</button>
    </div>
  );
}

export default Button;
