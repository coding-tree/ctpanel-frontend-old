import React from 'react';
import styled from 'styled-components';
import Icon from 'components/atoms/Icon';
import variables from 'settings/variables';
import Checkbox from 'components/atoms/Checkbox';

const StyledWrapper = styled.thead`
  align-items: center;
  height: 50px;
  padding: 0 10px;
  border-top: 1px solid #f3eef0;
  border-bottom: 1px solid #f3eef0;
  background-color: #fcfbfc;
  color: ${variables.colorLink};
`;

const StyledTableRow = styled.tr`
  height: 50px;
`;

const StyledTableHead = styled.th`
  text-align: left;
  padding: 0 3rem;
  min-width: 20px;
  white-space: nowrap;
  &:first-child {
    padding: 0 0 0 2rem;
  }
  text-align: ${({right}) => right && 'right'};
`;

const TableListMenu = () => {
  return (
    <StyledWrapper>
      <StyledTableRow>
        <StyledTableHead>
          <Checkbox type="checkbox"></Checkbox>
        </StyledTableHead>
        <StyledTableHead>
          ID <Icon className="fas fa-sort"></Icon>
        </StyledTableHead>
        <StyledTableHead>
          Data <Icon className="fas fa-sort"></Icon>
        </StyledTableHead>
        <StyledTableHead>
          Temat spotkania <Icon className="fas fa-sort"></Icon>
        </StyledTableHead>
        <StyledTableHead right>
          Planowany czas trwania <Icon className="fas fa-sort"></Icon>
        </StyledTableHead>
        <StyledTableHead right>
          Prowadzący <Icon className="fas fa-sort"></Icon>
        </StyledTableHead>
      </StyledTableRow>
    </StyledWrapper>
  );
};

export default TableListMenu;
