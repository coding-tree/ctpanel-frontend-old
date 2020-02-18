import React from 'react';
import styled from 'styled-components';
import Checkbox from 'components/atoms/Checkbox';
import variables from 'settings/variables';
import DataLabel from 'components/atoms/dateLabel';

const StyledRow = styled.tr`
  align-items: center;
  height: 50px;
  padding: 0 10px;
  border-bottom: 1px solid #f3eef0;

  &:hover {
    background-color: #fcfbfc;
  }
`;

const StyledTableData = styled.td`
  border: 1px solid;
  padding: 1rem 3rem;
  border: none;
  white-space: nowrap;
  &:first-child {
    padding: 0 0 0 2rem;
  }
  &:nth-child(4n) {
    white-space: initial;
  }

  text-align: ${({right}) => right && 'right'};
  color: ${({mainColor}) => mainColor && variables.colorLink};
`;

const TableElement = ({meetingData}) => {
  const {id, date, topic, leader, duration} = meetingData;
  return (
    <StyledRow>
      <StyledTableData>
        <Checkbox type="checkbox"></Checkbox>
      </StyledTableData>
      <StyledTableData mainColor>#{id}</StyledTableData>
      <StyledTableData>
        <DataLabel date={date} table></DataLabel>
      </StyledTableData>
      <StyledTableData>{topic}</StyledTableData>
      <StyledTableData right>{duration}</StyledTableData>
      <StyledTableData right>{leader}</StyledTableData>
    </StyledRow>
  );
};

export default TableElement;
