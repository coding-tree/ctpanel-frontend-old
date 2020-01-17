import React from 'react';
import StyledButton from './style';

const Button = ({ children, primary }) => {
  return (
    <StyledButton style={{ backgroundColor: 'yellow' }} primary={primary}>
      {children}
    </StyledButton>
  );
};

export default Button;
