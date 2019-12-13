import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';

const MainTemplate = ({ children }) =>
    (
        <>
            <GlobalStyle />
            {children}
        </>
    );

export default MainTemplate;