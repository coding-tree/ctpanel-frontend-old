import React from 'react';
import LoginStyle from 'theme/LoginStyle';

const LoginTemplate = ({children}) => (
  <>
    <LoginStyle />
    {children}
  </>
);

export default LoginTemplate;
