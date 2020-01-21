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

const TableElement = ({ _id, date, topic, leader, duration, usefulLinks, resourcesURL }) => {
    return (
        <StyledWrapper>
            <StyledSection>
                <checkbox></checkbox>
            </StyledSection>
            <StyledSection>
                <span>#129</span>
            </StyledSection>
            <StyledSection>
                <span>10 Listopad 2019</span>
            </StyledSection>
            <StyledSection>
                <span>React - Zaawansowane techniki hook's</span>
            </StyledSection>
            <StyledSection>
                <span>1h 30m</span>
            </StyledSection>
            <StyledSection>
                <span>Damian Ospara</span>
            </StyledSection>
        </StyledWrapper>
    );
};

export default TableElement;