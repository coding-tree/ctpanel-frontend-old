import React from 'react';
import StyledHeader from './Style';

const Header = ({ children }) => {
    return (
        <StyledHeader>
            {children}
        </StyledHeader>
    );
};

export default Header;