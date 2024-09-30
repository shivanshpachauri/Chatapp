import React from 'react';
import { Alert } from 'react-alert';

const MyComponent = () => {
  const showAlert = () => {
    alert.show('This is a custom alert message');
  };

  return (
    <button onClick={showAlert}>Show Alert</button>
  );
};
export default MyComponent;