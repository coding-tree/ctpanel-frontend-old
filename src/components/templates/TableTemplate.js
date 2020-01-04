import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  
`;

const TableTemplate = ({ header, children }) =>
    (
        <StyledWrapper>
            {header}
            {children}
        </StyledWrapper>
    );

export default TableTemplate;