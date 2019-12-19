import React from 'react';
import Style from './style';

const Button = ({children, primary}) => {
  return <Style primary={primary}>{children}</Style>;
};

export default Button;
