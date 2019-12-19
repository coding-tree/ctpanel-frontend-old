import React from 'react';
import StyledComponent from './style';

const Button = ({children, primary}) => {
  return (
    <StyledComponent style={{backgroundColor: 'yellow'}} primary={primary}>
      {children}
    </StyledComponent>
  );
};

export default Button;
