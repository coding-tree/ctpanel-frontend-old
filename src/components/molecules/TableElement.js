import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    align-items: center;
    min-height: 50px;
    padding: 0 10px;
    border-bottom: 1px solid #f3eef0;

    &:hover{
        background-color: #fcfbfc;
    }
`;

const TableElement = ({ _id, date, topic, leader, duration, usefulLinks, resourcesURL }) => {
    return (
        <StyledWrapper>
            Element 1
        </StyledWrapper>
    );
};

export default TableElement;