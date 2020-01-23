import React from 'react';
import styled, { css } from 'styled-components';

const StyledWrapper = styled.div`
    align-items: center;
    min-height: 50px;
    padding: 0 10px;
    border-bottom: 1px solid #f3eef0;

    &:hover{
        background-color: #fcfbfc;
    }
`;

const StyledSection = styled.div`
    checkbox{
        width: 20px;
        height: 20px;
        border: 1px solid;
    }
`;

const TableElement = ({ meetingData }) => {
    const { usefulLinks, _id, date, topic, leader, duration, resourcesURL } = meetingData;
    return (
        <StyledWrapper key={_id}>
            <StyledSection>

            </StyledSection>
            <StyledSection>
                <span>#129</span>
            </StyledSection>
            <StyledSection>
                <span>{date}</span>
            </StyledSection>
            <StyledSection>
                <span>{topic}</span>
            </StyledSection>
            <StyledSection>
                <span>{duration}</span>
            </StyledSection>
            <StyledSection>
                <span>{leader}</span>
            </StyledSection>
        </StyledWrapper>
    );
};

export default TableElement;