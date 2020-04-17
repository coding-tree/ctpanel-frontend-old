import React, {useState} from 'react';
import styled from 'styled-components';
import Checkbox from 'components/atoms/Checkbox';
import variables from 'settings/variables';
import StyledDate from 'components/atoms/StyledDate';

const TableElement = ({meetingData}) => {
  const {id, date, topic, leader, duration} = meetingData;
  const [isSelected, setSelection] = useState(false);
  return (
    <StyledRow isSelected={isSelected}>
      <StyledTableData>
        <Checkbox isSelected={isSelected} setSelection={setSelection} type="checkbox"></Checkbox>
      </StyledTableData>
      <StyledTableData mainColor>#{id}</StyledTableData>
      <StyledTableData>
        <StyledDate format="DD MMMM YYYY" date={date}></StyledDate>
      </StyledTableData>
      <StyledTableData>{topic}</StyledTableData>
      <StyledTableData right>{duration}</StyledTableData>
      <StyledTableData right>{leader}</StyledTableData>
    </StyledRow>
  );
};

export default TableElement;

// Styled-components
const StyledRow = styled.tr`
  align-items: center;
  height: 50px;
  padding: 0 10px;
  border-bottom: 1px solid ${variables.tableBorderColor};
  &:hover {
    background-color: ${variables.tableHeaderColor};
  }
  background-color: ${({isSelected}) => isSelected && variables.tableHeaderColor};
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
