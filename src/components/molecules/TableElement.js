import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    height: 50px;
    border-bottom: 1px solid #f3eef0;
`;

const TableElement = ({ _id, date, topic, leader, duration, usefulLinks, resourcesURL }) => {
    return (
        <StyledWrapper>
            Element 1
        </StyledWrapper>
    );
};

export default TableElement;