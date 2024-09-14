import React from 'react';

const Button = ({children}) => {
  return (
    <button style={{color: "blue"}}>{children}</button>
  );
};

export default Button;