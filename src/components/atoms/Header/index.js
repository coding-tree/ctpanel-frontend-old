import React from 'react';
import styled, { css } from 'styled-components';

const StyledHeader = styled.h1`
    display: flex;
`;

const Header = ({ children }) => {
    return (
        <StyledHeader>
            {children}
        </StyledHeader>
    );
};

export default Header;